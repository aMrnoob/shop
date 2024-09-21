const fs = require('fs');
const path = require('path');
const cloudinary = require('../config/cloudinary'); 

const uploadCloudImg = async () => {
  const folderPath = 'public/styles'; 
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    if (fs.lstatSync(filePath).isFile()) {
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'main-image', 
        });
        console.log('Uploaded:', result.secure_url);
      } catch (error) {
        console.error('Error uploading:', file, error);
      }
    }
  }
};

module.exports = { uploadCloudImg };
