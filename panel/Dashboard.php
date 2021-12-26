<?php

/* Template Name: Main Dashboard */

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/header.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/users.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/dashboard.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barilifestyle Dashboard</title>
</head>

<body>
    <div onclick="showMenu(false)" id="cover"></div>
    <div class="container">
        <div class="side_menu">
            <div class="head_container">
                <a href="http://localhost:8888/Bari/admin-users/">
                    <div class="head">
                        <img style="height: 40px; width: 60px; margin-right: 10px;" src="<?php bloginfo('template_directory'); ?>/panel/images/new-logo.png" alt="">
                        <p style="font-weight: 600; color:#25b5c5;">Barilifestyle</p>
                    </div>
                </a>
                <i id="close_menu" onclick="showMenu(false)" class="fa fa-times" aria-hidden="true"></i>
            </div>
            <p style="margin-top: 30px; color: gray; font-size: 12px;">Features</p>
            <div class="menu_list">
                <a href="">
                    <div class="menu selected">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <p>Dashboard</p>
                    </div>
                </a>

                <a href="http://localhost:8888/Bari/admin-users/">
                    <div class="menu">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <p>Users</p>
                    </div>
                </a>

                <a href="http://localhost:8888/Bari/admin-tips/">
                    <div class="menu">
                        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                        <p>Tips</p>
                    </div>
                </a>

                <a href="http://localhost:8888/Bari/admin-plans/">
                    <div class="menu">
                        <i class="fa fa-money" aria-hidden="true"></i>
                        <p>Plans</p>
                    </div>
                </a>

                <a href="http://localhost:8888/Bari/admin-trophies/">
                    <div class="menu">
                        <i class="fa fa-trophy" aria-hidden="true"></i>
                        <p>Trophies</p>
                    </div>
                </a>

                <a href="http://localhost:8888/Bari/admin-workouts/">
                    <div class="menu">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                        <p>Workouts</p>
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
                    <div class="lang">
                        <img src="<?php bloginfo('template_directory'); ?>/panel/images/eng.svg" alt="">
                        <p>English</p>
                    </div>
                    <div class="prof">
                        <div class="det">
                            <p id="admin_name">Name</p>
                            <p style="font-size: 12px;">admin</p>
                        </div>
                        <img id="admin_img" src="" alt="">
                    </div>
                </div>
            </div>

            <div class="page_container">
                <div class="top_section">
                    <div class="welcome">
                        <div class="wc_msg">
                            <h4>Welcome to the panel</h4>
                            <p>You are an admin!</p>

                            <a href="http://localhost:8888/Bari/admin-users/">View Users</a>
                        </div>
                        <div class="gts_img">
                            <img src="<?php bloginfo('template_directory'); ?>/panel/images/Badge.svg" alt="">
                        </div>
                    </div>
                    <div class="stats">
                        <h4>Statistics</h4>
                        <div class="stat_holder">
                            <div class="stat_card">
                                <div class="stat_imgHolder">
                                    <i class="fa fa-user-o" style="color: #25b5c5;" aria-hidden="true"></i>
                                </div>
                                <div class="stat_det">
                                    <h4 id="user_count">-</h4>
                                    <p>Users</p>
                                </div>
                            </div>

                            <div class="stat_card">
                                <div style="background-color: #FBB3DC;" class="stat_imgHolder">
                                    <i class="fa fa-user-o" style="color: #F70E93;" aria-hidden="true"></i>
                                </div>
                                <div class="stat_det">
                                    <h4 id="r_user">-</h4>
                                    <p>Regular</p>
                                </div>
                            </div>

                            <div class="stat_card">
                                <div style="background-color: #F2F7C6;" class="stat_imgHolder">
                                    <i class="fa fa-user-o" style="color: #DBF212;" aria-hidden="true"></i>
                                </div>
                                <div class="stat_det">
                                    <h4 id="g_user">-</h4>
                                    <p>Gold</p>
                                </div>
                            </div>

                            <div class="stat_card">
                                <div style="background-color: #C8C8F3;" class="stat_imgHolder">
                                    <i class="fa fa-user-o" style="color: #1E1DF4;" aria-hidden="true"></i>
                                </div>
                                <div class="stat_det">
                                    <h4 id="a_user">-</h4>
                                    <p>Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mid_section">
                    <div class="user_graphHolder">
                        <h4 style="margin-bottom: 10px;">User Types</h4>
                        <canvas id="user_type_chart"></canvas>
                    </div>
                </div>

                <div class="users_holder">
                    <div class="header">
                        <div class="actions">
                            <p>Search:</p>
                            <input id="search_user" type="text">
                            <a href="http://localhost:8888/Bari/admin-create-user/">Add User</a>
                        </div>
                    </div>
                    <div class="table_header">
                        <p>User</p>
                        <p>Email</p>
                        <p>Role</p>
                        <p>Plan</p>
                        <p>Weight</p>
                        <p>Actions</p>
                    </div>
                    <div class="user_list">
                    </div>
                </div>
            </div>

        </div>
    </div>

    <script src="https://kit.fontawesome.com/ac7f9a4329.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/variables.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/header/header.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/users/users.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/dashboard/dashboard.js"></script>
</body>

</html>