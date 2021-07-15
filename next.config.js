
require('./server/database.js');
module.exports = {
  images: {
    domains: ['cloudinary.com', 'amazonaws.com'],
    loader: 'cloudinary',
  },
  reactStrictMode: true,
}
