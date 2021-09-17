<?php

/* Template Name: Admin Login Page */

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/admin/login.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
</head>

<body>
    <div class="login_holder">
        <img src="<?php bloginfo('template_directory'); ?>/images/new-logo.png" alt="">

        <h2 id="tag_line">Log into Admin Panel</h2>

        <div class="form">
            <input type="text" id="username" placeholder="username...">
            <input type="password" id="password" placeholder="password...">
            <button onclick="login()">Login</button>
        </div>

    </div>

    <script src="<?php bloginfo('template_directory'); ?>/admin/login.js"></script>
</body>

</html>