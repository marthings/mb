let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix
  .js('resources/js/app.js', './')
  .sass('resources/styles/style.scss', './')
  .tailwind()
  .purgeCss(
    {
      //extensions: ['twig', 'js', 'php'],
     }
  );
