const StaticImage = {
    use: function (img) {
        const imageDir = require.context('../img/', false, /\.(png|gif|jpe?g|svg)$/);

        const applyFunc = function (array) {
            let images = {};
            array.keys().map((item, index) => { images[item.replace('./', '')] = array(item); });
            return images;
        }

        const value = applyFunc(imageDir);
        return value[img];
    }
};

module.exports = StaticImage;
