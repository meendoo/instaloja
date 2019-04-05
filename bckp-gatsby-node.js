var path = require('path');
var scrollMagic = path.resolve(__dirname, 'configs/scrollmagic');
console.log(scrollMagic);

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        scrollmagic: scrollMagic,
        ScrollMagic: scrollMagic,
      },
    },
  });
};
