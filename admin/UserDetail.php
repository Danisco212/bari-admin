<?php

/* Template Name: User Detail Page */

$id = isset($_GET['id']) ? $_GET['id'] : die();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/admin/admin.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/admin/userdetail.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BariLifestyle User</title>
</head>

<body>
    <p id="user_id" style="display: none;"><?php echo $id; ?></p>
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
                        <div class="menu_item">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            <p>Posts</p>
                        </div>
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
                <div class="friends">
                    <h4 style="font-size: 16px;">Friends</h4>
                    <div class="friends_list">
                        <!-- <div class="friend">
                            <img src="../images/new-logo.png" alt="">
                            <div class="friend_det">
                                <p>Friend name</p>
                                <p>Friend username</p>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="user_content">
                    <h4 style="font-size: 16px;">User Content</h4>

                    <h5 style="margin-top: 20px;">Posts</h5>
                    <div style="margin-top: 10px;" class="post_list">
                        <!-- <div class="m_post">
                            <p>Title</p>
                            <p class="p_body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis id eum magnam nulla cum reiciendis molestiae illo dolore autem. Voluptatibus officiis nam perspiciatis ut recusandae doloremque. Magnam ad porro non.</p>
                            <p>DateTime</p>
                        </div> -->
                    </div>

                </div>
                <div class="user_Dets">
                    <div class="profile">
                        <img src="" id="user_img" alt="">
                        <div class="profdetails">
                            <p class="name">This is my name</p>
                            <p class="username">This is my name</p>
                        </div>
                    </div>
                    <div class="prof_Det">
                        <p>Id</p>
                        <p id="m_id"></p>
                    </div>

                    <div class="prof_Det">
                        <p>Email</p>
                        <p id="user_email"></p>
                    </div>

                    <div class="prof_Det">
                        <p>Gender</p>
                        <p id="user_gender"></p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/ac7f9a4329.js" crossorigin="anonymous"></script>
    <script src="<?php bloginfo('template_directory'); ?>/admin/variables.js"></script>
    <script src="<?php bloginfo('template_directory'); ?>/admin/userdetail.js"></script>

</body>

</html>