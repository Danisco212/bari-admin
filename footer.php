<footer>
        <div class="floati"></div>
        <div class="container">
            <h3 style="font-size: 30px; margin-bottom: 10px; text-align: center;">Download Barilifestyle Today</h3>
            <p>Click the link below to download bari lifestyle for any of you platforms</p>
            <div class="downloads flex_row">
                <div class="download_outline" style="margin-right: 30px;"> IOS</div>
                <div class="download_outline">ANDROID</div>
            </div>
            <div class="about_footer">
                <div class="basic">
                    <a href="#" class="" style="text-decoration: none; color: white;">
                        <h3>Barilifestyle</h3>
                    </a>
                    <p style=" margin-top: 10px;">BariLifstyle makes a difference
                        for the bariatric community and for people that suffer from being overweight.</p>
                    <p>© 2021 Barilifestyle</p>
                </div>
                <div class="socials">
                    <div class="list_socials flex_row">
                        <a href="<?php the_field('contact_facebook'); ?>"><img class="small" src="<?php bloginfo('template_directory');?>/images/facebook.png"
                                alt=""></a>
                        <a href="<?php the_field('contact_youtube'); ?>"><img class="small"
                                src="<?php bloginfo('template_directory');?>/images/youtube.png" alt=""></a>
                        <a href="<?php the_field('contact_instagram'); ?>"><img class="small"
                                src="<?php bloginfo('template_directory');?>/images/instagram.png" alt=""></a>
<!--                         <a href="https://youtu.be/SLJzeVuIIF4 "><img class="small"
                                style="margin-left: 7px; width: 30px; height: 30px;" src="<?php bloginfo('template_directory');?>/images/blogger.png"
                                alt=""></a> -->
                    </div>
                    <!--  052-636-9991 -->
                    <!-- <p>+972 52 636-9991</p> -->
                    <a style="text-decoration: none; color: white;" href="mailto:<?php the_field('contact_email'); ?> "><?php the_field('contact_email'); ?></a>
                </div>
            </div>
            <div style="margin-top: 30px; width: 100%; display: flex; align-items: center; flex-direction:row; justify-content:flex-end;">
                <a href="https://barilifestyle.com/faq">FAQ</a>
                <div style="width: 50px;"></div>
                <a href="https://barilifestyle.com/terms">Terms & Conditions</a>
            </div>
        </div>
    </footer>

    <div class="go_up flex_row">
        <img src="<?php bloginfo('template_directory');?>/images/up.png" width="30px" alt="">
    </div>

    <?php wp_footer(); ?>


</body>

</html>