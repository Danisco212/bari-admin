<?php

/* Template Name: User */
$id = isset($_GET['id']) ? $_GET['id'] : die();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/header.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/users.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/panel/css/user.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barilifestyle User</title>
</head>

<body>
    <p id="user_id" style="display: none;"><?php echo $id; ?></p>
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

            <div class="user_detail">
                <div class="basic_data">
                    <div class="basic">
                        <div class="prof">
                            <img style="background-color: white;" id="prof_img" src="" alt="">
                            <div class="info">
                                <h2 id="fullName">Name here</h2>
                                <p id="email">your email is here</p>
                                <div class="actions">
                                    <!-- <button>Edit</button> -->
                                    <button id="block_user">Block User</button>
                                    <button id="reset_password">Reset Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact">
                        <div class="contact_block">
                            <p>Username</p>
                            <p id="userName"></p>
                        </div>
                        <div class="contact_block">
                            <p>Weight (KG)</p>
                            <p id="weight"></p>
                        </div>
                        <div class="contact_block">
                            <p>Height (CM)</p>
                            <p id="height"></p>
                        </div>
                        <div class="contact_block">
                            <p>Target Weight (KG)</p>
                            <p id="targetWeight"></p>
                        </div>
                        <!-- <div class="contact_block">
                            <p>Username</p>
                            <p>value of username here</p>
                        </div> -->
                    </div>
                </div>
                <div class="plan_holder">
                    <p>Current Plan</p>
                    <select name="user_plan" id="s_userType">
                        <option value="ADMIN">Admin</option>
                        <option value="SUBADMIN">Subadmin</option>
                        <option value="REGULAR">Regular User</option>
                        <option value="PRO">Pro User</option>
                        <option value="PREMIUM">Premium User</option>
                    </select>
                    <button onclick="updateUserType()">Change Plan</button>
                </div>
            </div>

            <div class="more_details">
                <h3>More information</h3>
                <p style="margin-top: 10px;">Body Information</p>
                <div class="main_holder">
                    <div class="input_holder">
                        <label for="">Biceps Circumference</label>
                        <br>
                        <input id="biceps" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Hips Circumference</label>
                        <br>
                        <input id="hips" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Chest Circumference</label>
                        <br>
                        <input id="chest" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Wrist Circumference</label>
                        <br>
                        <input id="wrist" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Waist Circumference</label>
                        <br>
                        <input id="waist" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Shoulders Circumference</label>
                        <br>
                        <input id="shoulders" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Neck Circumference</label>
                        <br>
                        <input id="neck" type="number">
                    </div>
                </div>
                <p>Daily Goals</p>
                <div class="main_holder">
                    <div class="input_holder">
                        <label for="">Step Target</label>
                        <br>
                        <input id="targetStep" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Waist Target</label>
                        <br>
                        <input id="targetWaist" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Water Target</label>
                        <br>
                        <input id="targetWater" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Weight Target</label>
                        <br>
                        <input id="weightTarget" type="number">
                    </div>
                    <div class="input_holder">
                        <label for="">Calories Target</label>
                        <br>
                        <input id="targetCalories" type="number">
                    </div>
                </div>

                <button onclick="saveUserDetails()" id="save-details">Save</button>
            </div>

            <div class="users_holder">
                <div class="header">
                    <div class="actions">
                        <p>Search:</p>
                        <input id="search_user" type="text">
                        <a href="/admin-create-user/">Add User</a>
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

    <script src="https://kit.fontawesome.com/ac7f9a4329.js" crossorigin="anonymous"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/variables.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/header/header.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/users/users.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/panel/js/users/user.js"></script>
</body>

</html>