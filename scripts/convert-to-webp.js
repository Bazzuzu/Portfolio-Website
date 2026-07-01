import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'src', 'assets', 'images');
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg'];

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

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dirName = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const destPath = path.join(dirName, baseName + '.webp');

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let pipeline = image;
    let resized = false;
    
    // Resize to 1600px max width if it is wider
    if (metadata.width && metadata.width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      resized = true;
    }
    
    // WebP compression parameters
    pipeline = pipeline.webp({ quality: 80, effort: 6 });
    
    await pipeline.toFile(destPath);
    
    // Delete the original file
    fs.unlinkSync(filePath);
    
    console.log(`✅ Converted to WebP: ${path.relative(process.cwd(), filePath)} -> ${path.basename(destPath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Running JPG to WebP conversion...');
  const files = getFiles(IMAGES_DIR);
  console.log(`Found ${files.length} JPEG images to convert.`);
  
  let convertedCount = 0;
  for (const file of files) {
    const converted = await convertToWebP(file);
    if (converted) {
      convertedCount++;
    }
  }
  
  console.log(`Finished conversion. ${convertedCount} images were converted to WebP.`);
}

main().catch(console.error);
