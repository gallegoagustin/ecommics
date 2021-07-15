
require('./server/database.js');
module.exports = {
  images: {
    domains: ['cloudinary.com', 'amazonaws.com', 'https://ecommics.s3.sa-east-1.amazonaws.com/images'],
    loader: 'cloudinary',
  },
  reactStrictMode: true,
}
