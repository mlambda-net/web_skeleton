module.exports = (config, env) => {

  console.log(config.module)

  config.module.rules.push(
    {
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        }
      }
    })

  config.module.rules.push({
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  })

  config.module.rules.push({
    test: /\.styl$/,
    use: [
      {
        loader: "stylus-loader", // compiles Styl to CSS
      }
    ],
  })

  config.module.rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader'],
  })

  return config
}
