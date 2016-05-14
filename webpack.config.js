var path = require('path');

module.exports = {
    entry: {
      app: [path.join(__dirname, "apps/interview/index.jsx")]
    },
    output: {
        path: path.join(__dirname, "public/assets/js"),
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel?presets[]=react,presets[]=es2015' }
        ]
    },
    resolve: {
      alias: {
        AppDispatcher: path.join(__dirname, "apps/AppDispatcher.js"),
        interview: path.join(__dirname, "apps/interview/")
      }
    }
};
