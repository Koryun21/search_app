const path = require('path');

module.exports = {
  '@src/*': path.resolve(__dirname, 'src'),
  '@hooks/*': path.resolve(__dirname, 'src/shared/hooks'),
  '@lib/*': path.resolve(__dirname, 'src/shared/lib'),
  '@assets/*': path.resolve(__dirname, 'src/shared/assets'),
  '@styles/*': path.resolve(__dirname, 'src/shared/styles'),
  '@pages/*': path.resolve(__dirname, 'src/pages'),
  '@entities/*': path.resolve(__dirname, 'src/entities'),
  '@widgets/*': path.resolve(__dirname, 'src/widgets'),
  '@features/*': path.resolve(__dirname, 'src/features'),
  '@api/*': path.resolve(__dirname, 'src/api'),
};
