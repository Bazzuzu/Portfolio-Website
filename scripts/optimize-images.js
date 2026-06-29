import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'src', 'assets', 'images');
const SUPPORTED_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png'];

// Recursive function to get all files in a directory
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      const ext = path.extname(name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        files.push(name);
      }
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const stats = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const originalSizeKb = (stats.size / 1024).toFixed(1);

  // Skip extremely small files
  if (stats.size < 10 * 1024) {
    return;
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let pipeline = image;
    let resized = false;
    
    // Resize to 1600px max width
    if (metadata.width && metadata.width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      resized = true;
    }
    
    // Configure compression based on format
    if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 80, effort: 6 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ compressionLevel: 8, palette: true });
    }
    
    const tempPath = filePath + '.tmp';
    await pipeline.toFile(tempPath);
      
    const tempStats = fs.statSync(tempPath);
    if (tempStats.size < stats.size) {
      fs.renameSync(tempPath, filePath);
      const newSizeKb = (tempStats.size / 1024).toFixed(1);
      const savings = (100 - (tempStats.size / stats.size) * 100).toFixed(1);
      console.log(`✅ Optimized: ${path.relative(process.cwd(), filePath)}`);
      console.log(`   Dimensions: ${metadata.width}x${metadata.height} ${resized ? '-> resized to 1600px width' : ''}`);
      console.log(`   Size: ${originalSizeKb} KB -> ${newSizeKb} KB (-${savings}%)`);
      return true;
    } else {
      fs.unlinkSync(tempPath);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Running pre-push image optimization...');
  const files = getFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images.`);
  
  let optimizedCount = 0;
  for (const file of files) {
    const optimized = await optimizeImage(file);
    if (optimized) {
      optimizedCount++;
    }
  }
  
  console.log(`Finished optimization. ${optimizedCount} images were compressed.`);
}

main().catch(console.error);
