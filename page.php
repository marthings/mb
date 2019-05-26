<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 */
$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
if ( post_password_required( $timber_post->ID ) ) {
  Timber::render( 'password.twig', $context );
} else {
  Timber::render( array( 'page-' . $timber_post->ID . '.twig', 'page-' . $timber_post->post_type . '.twig', 'page.twig' ), $context );
}