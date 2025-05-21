const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  // Massages
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
  'https://images.unsplash.com/photo-1600334130076-77ce4f6c7818',
  // Facials
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9',
  'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea',
  // Body Treatments
  'https://images.unsplash.com/photo-1600334089960-6dca8078157d',
  'https://images.unsplash.com/photo-1611072172377-0cabc3addb25',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd',
  // Packages
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
  'https://images.unsplash.com/photo-1560750588-73207b1ef5b8',
  // Hero image
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35'
];

// Names for the images
const imageNames = [
  // Massages
  'swedish-massage.jpg',
  'deep-tissue-massage.jpg',
  'aromatherapy-massage.jpg',
  'hot-stone-massage.jpg',
  // Facials
  'classic-facial.jpg',
  'anti-aging-facial.jpg',
  'hydrating-facial.jpg',
  // Body Treatments
  'body-scrub.jpg',
  'detox-body-wrap.jpg',
  'milk-honey-wrap.jpg',
  // Packages
  'signature-package.jpg',
  'couples-retreat.jpg',
  'relaxation-day.jpg',
  // Hero image
  'hero-bg.jpg'
];

const downloadImage = (url, filename) => {
  const imagePath = path.join(__dirname, '../src/assets/images', filename);
  
  // Add required parameters to the URL for downloading full-sized images
  const fullUrl = `${url}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80`;
  
  console.log(`Downloading: ${fullUrl} -> ${imagePath}`);
  
  return new Promise((resolve, reject) => {
    https.get(fullUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      const file = fs.createWriteStream(imagePath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(imagePath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
};

const downloadAllImages = async () => {
  // Create the directory if it doesn't exist
  const imagesDir = path.join(__dirname, '../src/assets/images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  for (let i = 0; i < urls.length; i++) {
    try {
      await downloadImage(urls[i], imageNames[i]);
    } catch (error) {
      console.error(`Error downloading ${imageNames[i]}:`, error);
    }
  }
  
  console.log('All downloads completed!');
};

downloadAllImages(); 