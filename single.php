<?php
/**
 * The Template for displaying all single posts
 *
 */
$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;
if ( post_password_required( $timber_post->ID ) ) {
  Timber::render( 'password.twig', $context );
} else {
  Timber::render( array( 'single-' . $timber_post->ID . '.twig', 'single-' . $timber_post->post_type . '.twig', 'single.twig' ), $context );
}