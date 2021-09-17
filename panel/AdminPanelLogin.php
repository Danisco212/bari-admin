<?php

/* Template Name: Panel Login */

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barilifestyle Login</title>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="<?php bloginfo('template_directory'); ?>/panel/images/new-logo.png" alt="">
            <p>Barilifestyle</p>
        </div>
        <div class="tagline">
            <h2>Welcome to the admin panel</h2>
            <p>Please sign in to your account to enter the panel</p>
        </div>

        <div class="form">
            <p>Username</p>
            <input type="text" id="username" placeholder="username">

            <p>Password</p>
            <div class="password_holder">
                <input type="password" id="password" placeholder="**********">
            </div>

            <label for="terms">
                <input type="checkbox" name="terms" id="terms">
                I agree to the terms and conditions
            </label><br>

            <p id="error_msg">Error mssage</p>

            <button onclick="login()">Sign In</button>
        </div>
        <p>New on our platform? <a href="">Create an account</a></p>
    </div>

    <script src="<?php bloginfo('template_directory'); ?>/panel/js/variables.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/login/login.js"></script>
</body>

</html>