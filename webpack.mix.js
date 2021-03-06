let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix
  .js('resources/js/app.js', './public/app.js')
  .sass('resources/styles/site.scss', './public')
  .purgeCss(
    {
      extensions: ['twig', 'js', 'php'],
     }
  )
  .tailwind();

mix
  .sass('resources/styles/editor-styles.scss', './public/')