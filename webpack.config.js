
module.exports = {
  // entry: glob.sync("./src/**/*.ts"),
  entry: ['./src/index.ts'],
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    // libraryTarget: 'module'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
};