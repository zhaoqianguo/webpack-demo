module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
      autoprefixer: { grid: true },
    }),
  ],
};
