let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix
  .js('resources/js/app.js', './public/app.js')
  .sass('resources/styles/style.scss', './public')
  .purgeCss(
    {
      extensions: ['twig', 'js', 'php'],
     }
  )
  .tailwind();

