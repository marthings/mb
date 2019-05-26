let mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix
  .js('./js/app.js', 'public/js')
  .sass('./styles/style.scss', './')
  .tailwind();