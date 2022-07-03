<?php

function add_mtheme_support(){
    // Adds dynamic title
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'add_mtheme_support');


function load_stylesheets(){
    wp_register_style('styles', get_template_directory_uri() . '/styles.css', array(), 1, 'all');
    wp_enqueue_style('styles');

    wp_register_style('about_styles', get_template_directory_uri() . '/about_styles.css', array(), 1, 'all');
    wp_enqueue_style('about_styles');

    wp_register_style('footer_styles', get_template_directory_uri() . '/footer_styles.css', array(), 1, 'all');
    wp_enqueue_style('footer_styles');

    wp_register_style('feature_styles', get_template_directory_uri() . '/feature_styles.css', array(), 1, 'all');
    wp_enqueue_style('feature_styles');

    wp_register_style('gallery_styles', get_template_directory_uri() . '/gallery_styles.css', array(), 1, 'all');
    wp_enqueue_style('gallery_styles');

    wp_register_style('numbers_styles', get_template_directory_uri() . '/numbers_styles.css', array(), 1, 'all');
    wp_enqueue_style('numbers_styles');

    wp_register_style('header_styles', get_template_directory_uri() . '/header_styles.css', array(), 1, 'all');
    wp_enqueue_style('header_styles');


}

add_action('wp_enqueue_scripts', 'load_stylesheets');

// load scripts
function addjs(){

    wp_register_script('anime', 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js', array(),1,1,1);
    wp_enqueue_script('anime');

    wp_register_script('script', get_template_directory_uri() . '/script.js', array(),1,1,1);
    wp_enqueue_script('script');

}

add_action('wp_enqueue_scripts', 'addjs');
