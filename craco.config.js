const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@src': path.resolve(__dirname, 'src/'),
    },
    devServer: {
      historyApiFallback: true,
      // proxy: {
      //   '/todos/**': {
      //     target: 'https://3006-silver-parakeet-uvgrqdoj.ws-eu07.gitpod.io/',
      //     secure: false,
      //   },
      // },
    },
  },
};
