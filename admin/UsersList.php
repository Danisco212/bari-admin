<?php

/* Template Name: User List Page */

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/admin/admin.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/admin/user.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BariLifestyle Users</title>
</head>

<body>
    <div class="container">
        <div class="side_menu">
            <img src="<?php bloginfo('template_directory'); ?>/images/new-logo.png" alt="">

            <div class="menu">
                <ul>
                    <li>
                        <div class="menu_item">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            <p>Home</p>
                        </div>
                    </li>
                    <li>
                        <a href="http://localhost/wordpress/userlist">
                            <div class="menu_item selected">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <p>Users</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost/wordpress/post-list">
                            <div class="menu_item">
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                <p>Posts</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost/wordpress/tip-list">
                            <div class="menu_item">
                                <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                                <p>Tips</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div class="menu_item">
                            <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                            <p>Workouts</p>
                        </div>
                    </li>
                    <li>
                        <div class="menu_item">
                            <i class="fa fa-money" aria-hidden="true"></i>
                            <p>Plans</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="page">
                <h4 class="title">Users</h4>
                <div class="header">
                    <p>User</p>
                    <p>Role</p>
                    <p>Weight</p>
                    <p>Username</p>
                </div>
                <div class="users_list">
                    <!-- <div class="user">
                        <div class="dets">
                            <p class="name">Username</p>
                            <p class="email">test@t.com</p>
                        </div>
                        <div class="role_holder">
                            <p class="role">This role</p>
                        </div>
                        <p class="weight">150KG</p>
                        <p class="username">MyUsername</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/ac7f9a4329.js" crossorigin="anonymous"></script>
    <script src="<?php bloginfo('template_directory'); ?>/admin/variables.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/admin/users.js"></script>

</body>

</html>