<?php

/* Template Name: Create User */

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/header.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/users.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/user.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/create_user.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barilifestyle User</title>
</head>

<body>
    <div onclick="showMenu(false)" id="cover"></div>
    <div class="container">
        <div class="side_menu">
            <div class="head_container">
                <a href="/admin-users/">
                    <div class="head">
                        <img style="height: 40px; width: 60px; margin-right: 10px;" src="<?php bloginfo('template_directory'); ?>/panel/images/new-logo.png" alt="">
                        <p style="font-weight: 600; color:#25b5c5;">Barilifestyle</p>
                    </div>
                </a>
                <i id="close_menu" onclick="showMenu(false)" class="fa fa-times" aria-hidden="true"></i>
            </div>
            <p style="margin-top: 30px; color: gray; font-size: 12px;">Features</p>
            <div class="menu_list">
                <a href="/admin-dashboard/">
                    <div class="menu">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <p>Dashboard</p>
                    </div>
                </a>

                <a href="/admin-users/">
                    <div class="menu selected">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <p>Users</p>
                    </div>
                </a>

                <a href="/admin-tips/">
                    <div class="menu">
                        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                        <p>Tips</p>
                    </div>
                </a>

                <a href="/admin-discounts/">
                    <div class="menu">
                        <i class="fa fa-money" aria-hidden="true"></i>
                        <p>Discounts</p>
                    </div>
                </a>

                <a href="/admin-trophies/">
                    <div class="menu">
                        <i class="fa fa-trophy" aria-hidden="true"></i>
                        <p>Trophies</p>
                    </div>
                </a>

                <a href="/admin-workouts/">
                    <div class="menu">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                        <p>Workouts</p>
                    </div>
                </a>

                <a href="/admin-activities/">
                    <div class="menu">
                        <i class="fa fa-bolt" aria-hidden="true"></i>
                        <p>Activities</p>
                    </div>
                </a>
            </div>

            <p style="margin-top: 50px; color: gray; font-size: 12px;">Account</p>
            <div class="menu" onclick="logout()">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                <p>Logout</p>
            </div>
        </div>
        <div class="main_content">
            <div class="float_head">
                <div class="actions">
                    <i onclick="showMenu(true)" id="ham_menu_icon" class="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div class="profile">
                    
                    <div class="prof">
                        <div class="det">
                            <p id="admin_name">Name</p>
                            <p style="font-size: 12px;" id="admin_role">admin</p>
                        </div>
                        <img id="admin_img" src="" alt="">
                    </div>
                </div>
            </div>

            <div class="header_holdr">
                <h1 style="margin-right: 20px;">Create User</h1>
                <button onclick="createUser()">Create</button>
            </div>

            <div class="form_holdr">
                <div class="field_holdr">
                    <p>Full name</p>
                    <input type="text" name="" id="uFullname">
                </div>

                <div class="field_holdr">
                    <p>Email</p>
                    <input type="text" name="" id="uEmail">
                </div>

                <div class="field_holdr">
                    <p>Username</p>
                    <input type="text" name="" id="uUsername">
                </div>

                <div class="field_holdr">
                    <p>Password</p>
                    <input type="text" name="" id="uPassword">
                </div>

                <div class="field_holdr">
                    <p>Role</p>
                    <select name="" id="uRole">
                        <option value="ADMIN">Admin</option>
                        <option value="REGULAR">Regular</option>
                        <option value="PRO">Pro</option>
                        <option value="PREMIUM">Premium</option>
                    </select>
                </div>

                <div class="field_holdr">
                    <p>Gender</p>
                    <select name="" id="uGender">
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
            </div>

        </div>
    </div>

    <script src="https://kit.fontawesome.com/ac7f9a4329.js" crossorigin="anonymous"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/variables.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/header/header.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/users/createUser.js"></script>
</body>

</html>