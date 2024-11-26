const path = require('path');
const MiniCssExtractPlugin = require();

module.exports = {
 entry:{
  main: [path.join(__dirname, './src/js/script.js'), path.join(__dirname, './src/sass/main.scss')]
 },

 output: {
  path: path.resolve(__dirname , 'dist'),
  filename: 'bundle.js' ,
 },
 module: {
  rules: [
   {
    test: /\.scss$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
    ]
   },
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
     loader: "babel-loader",
     options: {
      presets:[
          [
              "@babel/preset-env",
           {
            targets: "> 0.25%"
           }
          ]
      ]
     }

    }

   },
  ]
 },
 plugins: [
     new MiniCssExtractPlugin({
      filename: "style.css"
     })
 ]
};