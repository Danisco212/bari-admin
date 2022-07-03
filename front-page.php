<?php get_header(); ?>

<?php 

	$hero = get_field('hero');
	$screenshot1 = get_field('phone1');
	$screenshot2 = get_field('phone2');
	$screenshot3 = get_field('phone3');
?>

<p style="display: none;" id="hero-image-holder"><?php echo $hero['hero_image']; ?></p>
<p style="display: none;" id="about-image-holder"><?php the_field('about_image'); ?></p>

<section id="landing">
        <div class="floaties"></div>
        <div class="container flex_row">
            <div class="text_details">
                <h3><?php echo $hero['impact_message']; ?></h3>
                <!-- <h3>Empowering the Bariatric Community Worldwide</h3> -->
                <p style="margin-top: 20px; margin-bottom: 20px;"><?php echo $hero['hero_description']; ?></p>
                <button class="download_btn">Download Now</button>
            </div>
            <div class="img_holder">
                <div class="overlay"></div>
            </div>
        </div>

    </section>

    <section id="about">
        <div class="container flex_row">
            <div style="display: none;" class="cloud">
                <div class="thin_cloud"></div>
                <div class="thin_cloud c1"></div>
            </div>
            <div class="side_image"></div>

            <div class="text_details">
                <p style="margin-bottom: 10px; color: #50DAE8;"><?php the_field('about_tag'); ?></p>
                <h4 style="margin-bottom: 20px; font-weight: 600px; font-size: 30px;"><?php the_field('about_title'); ?></h4>
                <p><?php the_field('about_detail'); ?></p>
            </div>
        </div>
        <p class="large_txt" style="display: none;">BariLifstyle is the first fully social wellness application which
            will help you to maintain your Health and wellness goals – whether you are on your day-to-day activities,
            holiday, or even on a business trip. with the BariLifstyle app you are in control.

            Our mission is to build and set the largest global bariatric social wellness community that will serve and
            help the individual to maintain Health and Wellness goals.

            For the first time, you can access relevant data, share your thoughts, photos, your story and ask questions
            to the rest of the community and our experts. The BariLifstyle application will help you monitor your health
            and wellness. You can conveniently access your wellness data on your smartphone, anywhere and at any time,
            switch easily between the unique reminders, read articles, news, fitness activities and much more – all in
            one app.

            Your wellness data is presented in a clear and comprehensive way using progress graphs and tables with
            measured values to help you take control of your life.

            We invite you to join us and to enjoy a unique application which aims for the first time to the Bariatric
            community of gastric, who want to go through the process correctly during the 5 years after the surgery and
            maintain their health and new Lifestyle. Our user-centric features will guide and motivate you at each step
            of the process from day one to where you want to go.</p>
    </section>

    <section id="features">
        <div class="container flex_row">
            <div class="text">
                <p style="margin-bottom: 10px; color: #50DAE8;"><?php the_field('services_tag'); ?></p>
                <h4 style="margin-bottom: 20px; line-height: 30px; font-weight: 600px; font-size: 30px;"><?php the_field('services_title'); ?></h4>
                <p style="margin-bottom: 20px;"><?php the_field('services_detail'); ?></p>
                <button class="download_btn">Download Now</button>
            </div>
            <div class="holder">
                <div class="feature" id="feat6">
                    <img src="<?php bloginfo('template_directory');?>/images/communities.png" alt="" class="image_f">
                    <div class="details">
                        <h5>Large Community</h5>
                        <p>Be part of our community. Connect with others with similar goals and get tips and tricks from
                            those who are going through a similar process to your own.</p>
                    </div>
                </div>
                <div class="feature" id="feat5">
                    <img src="<?php bloginfo('template_directory');?>/images/tracker.png" alt="" class="image_f">
                    <div class="details">
                        <h5>Remainders</h5>
                        <p>No longer miss taking your pills or vitamins on time, with our timely notification system you
                            can be sure you are in control.</p>
                    </div>
                </div>
                <div class="feature" id="feat2">
                    <img src="<?php bloginfo('template_directory');?>/images/bell.png" alt="" class="image_f">
                    <div class="details">
                        <h5>Push Notifications</h5>
                        <p>Never miss an update, or major activities, with our timely notification system to set up and
                            remind you.</p>
                    </div>
                </div>
                <div class="feature" id="feat3">
                    <img src="<?php bloginfo('template_directory');?>/images/diet.png" alt="" class="image_f">
                    <div class="details">
                        <h5>Food and Water Intake Monitoring</h5>
                        <p>Counting water and calories is important to make sure you get on track after bariatric
                            surgery. We offer you a service to record your water and food and monitor your consumption –
                            knowledge is power!</p>
                    </div>
                </div>
                <div class="feature" id="feat4">
                    <img src="<?php bloginfo('template_directory');?>/images/scale.png" alt="" class="image_f">
                    <div class="details">
                        <h5>Weight Loss Tracker</h5>
                        <p>Our Weight Loss Tracker will help you monitor your weight loss progress and help you manage
                            your weight loss goals.</p>
                    </div>
                </div>
                <div class="feature" id="feat1">
                    <img src="<?php bloginfo('template_directory');?>/images/fitness.png" alt="" class="image_f">
                    <div class="details">
                        <h5>Workout Plans</h5>
                        <p>Fitness is important for ensuring successful progress after bariatric surgery. Different
                            workout plans depending on different factors will help you maintain your well-being
                            progression. You can select one of the available designs from our wide range of choices</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

	<?php 
		if (get_field('show_numbers') == 1) {
			echo '
			<section id="numbers">
				<div class="container flex_row">
					<div class="cnt">
						<h3 id="clients">'. get_field("happy_clients") .'</h3>
						<div class="under flex_row">
							<div class="line"></div>
							<p>Happy Clients</p>
						</div>
					</div>
					<div class="cnt">
						<h3 id="screens">'. get_field("app_screens").'</h3>
						<div class="under flex_row">
							<div class="line"></div>
							<p>Screens</p>
						</div>
					</div>
					<div class="cnt">
						<h3 id="downloads">'. get_field("download") .'</h3>
						<div class="under flex_row">
							<div class="line"></div>
							<p>Downloads</p>
						</div>
					</div>
					<div class="cnt">
						<h3 id="calories">'. get_field("lost_calories") .'</h3>
						<div class="under flex_row">
							<div class="line"></div>
							<p>Calories Lost</p>
						</div>
					</div>
				</div>
			</section>
			';
		}
	?>

    <section id="extra_features">
        <div class="container flex_row">
            <div class="options">
                <div class="option flex_row">
                    <div class="content">
                        <h3>Easy to handle.</h3>
                        <p>A clear, user-friendly design is available by default. The BariLifestyle app is pioneering in
                            concept and design</p>
                    </div>
                    <div class="pointer left"></div>
                </div>
                <div class="option flex_row">
                    <div class="content">
                        <h3>It’s all about Wellness</h3>
                        <p>BariLifestyle as it should be – whether you're on vacation, on business or even at home. You
                            can easily access your information on your smartphone, where and when you need it. You can
                            easily switch between weight, training schedule, social activities and health calculators.
                        </p>
                    </div>
                    <div class="pointer left"></div>
                </div>
            </div>
            <img src="<?php bloginfo('template_directory');?>/images/newss3.png" id="option_img" alt="">
            <div class="options">
                <div class="option flex_row">
                    <div class="pointer"></div>
                    <div class="content">
                        <h3>Exercise for your health</h3>
                        <p>No training equipment necessary. Whether you are on holiday, on a business trip or even at
                            home, you can maintain your fitness activities. Your health data is presented clearly and in
                            full using progress graphs, tables with measured values and the practical log function.</p>
                    </div>
                </div>
                <div class="option flex_row">
                    <div class="pointer"></div>
                    <div class="content">
                        <h3>Enjoy your freedom</h3>
                        <p>Enjoy the best experience in settings wellness and healthy behavior using BariLifestyle app
                            to connect with the bariatric community and share your updates, progress and experience for
                            the benefit of all. Your activities, achievements and your results will be automatically
                            tracked on your application.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery">
        <div class="container">
            <h3 id="gallery_title">Some Screenshots</h3>
            <div class="gal_img_holder">
				<img src="<?php echo $screenshot1; ?>" class="gal_img" alt="">
				<img src="<?php echo $screenshot2; ?>" class="gal_img" alt="">
				<img src="<?php echo $screenshot3; ?>" class="gal_img" alt="">
            </div>
        </div>
    </section>

<?php get_footer(); ?>