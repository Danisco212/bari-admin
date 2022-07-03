anime({
    targets: '.img_holder',
    translateX: [500, 0],
    rotate: [50, 0],
    easing: 'linear',
    duration: 500
})

anime({
    targets: '.text_details',
    translateX: [-500, 0],
    rotate: [-50, 0],
    easing: 'linear',
    duration: 500
})

anime({
    targets: '.floaties',
    opacity: [0, 1],
    scale: [0, 1],
    rotate: [0, 10],
    easing: 'linear',
    duration: 500
})

setTimeout(() => {
    anime({
        targets: '.floaties',
        scale: [1, 1.05],
        loop: true,
        easing: 'linear',
        duration: 2000,
        direction: 'alternate'
    })
}, 500)

// about animations

try {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.backgroundImage = `url(${document.getElementById('hero-image-holder').innerText.toString()})`

    const sideImage = document.getElementsByClassName('side_image')[0];
    sideImage.style.backgroundImage = `url(${document.getElementById('about-image-holder').innerText.toString()})`
} catch (error) {
    console.log(error)
}



// checking intersections
var loadedAbout = false
var loadedLady = false
var loadedFeat1 = false
var loadedFeat2 = false
var loadedFeat3 = false
var loadedFeat4 = false
var loadedFeat5 = false
var loadedFeat6 = false
var loadedNumbers = false
function callbackFunc(entries, observer) {

    entries.forEach(entry => {
        // animate the view in
        if (entry.target.id == 'about' && entry.isIntersecting && !loadedAbout) {
            loadedAbout = true
            anime({
                targets: '#about',
                translateX: [-1000, 0],
                easing: 'easeInOutQuad',
                duration: 1000
            })
        } else if (entry.target.className == 'side_image' && entry.isIntersecting && !loadedLady) {
            anime({
                targets: '.side_image',
                translateY: [500, 0],
                rotate: ['15deg', '0deg'],
                borderTopLeftRadius: ['0px', '650px'],
                borderTopRightRadius: ['0px', '500px'],
                borderBottomRightRadius: ['0px', '650px'],
                borderBottomLeftRadius: ['0px', '500px'],
                easing: 'linear',
                duration: 600
            })

            anime({
                targets: '.cloud',
                translateX: [-500, 0],
                easing: 'easeInOutQuad',
                duration: 1200
            })
            loadedLady = true
        } else if (entry.target.id == 'feat1' && entry.isIntersecting && !loadedFeat1) {
            anime({
                targets: '#feat1',
                rotate: ['35deg', '0deg'],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            loadedFeat1 = true
        } else if (entry.target.id == 'feat2' && entry.isIntersecting && !loadedFeat2) {
            anime({
                targets: '#feat2',
                rotate: ['35deg', '0deg'],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            loadedFeat2 = true
        } else if (entry.target.id == 'feat3' && entry.isIntersecting && !loadedFeat3) {
            anime({
                targets: '#feat3',
                rotate: ['35deg', '0deg'],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            loadedFeat3 = true
        } else if (entry.target.id == 'feat4' && entry.isIntersecting && !loadedFeat4) {
            anime({
                targets: '#feat4',
                rotate: ['35deg', '0deg'],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            loadedFeat4 = true
        } else if (entry.target.id == 'feat5' && entry.isIntersecting && !loadedFeat5) {
            anime({
                targets: '#feat5',
                rotate: ['35deg', '0deg'],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            loadedFeat5 = true
        } else if (entry.target.id == 'feat6' && entry.isIntersecting && !loadedFeat6) {
            anime({
                targets: '#feat6',
                rotate: ['35deg', '0deg'],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 500
            })
            loadedFeat6 = true
        } else if (entry.target.id == 'screens' && entry.isIntersecting && !loadedNumbers) {

            try {
                var clients = document.getElementById('clients')
                var screens = document.getElementById('screens')
                var downloads = document.getElementById('downloads')
                var calories = document.getElementById('calories')
                numberAnimation(clients, parseInt(clients.innerHTML.toString(), 10), 1, 2000);
                numberAnimation(screens, parseInt(screens.innerHTML.toString(), 10), 1, 2000);
                numberAnimation(downloads, parseInt(downloads.innerHTML.toString(), 10), 1, 2000);
                numberAnimation(calories, parseInt(calories.innerHTML.toString(), 10), 1, 2000);
                loadedNumbers = false
            } catch (error) {
                console.log(error);
            }
        }
    });

}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
};

try {
    let observer = new IntersectionObserver(callbackFunc, options);

    observer.observe(document.getElementById('about'));
    observer.observe(document.getElementById('feat1'));
    observer.observe(document.getElementById('feat2'));
    observer.observe(document.getElementById('feat3'));
    observer.observe(document.getElementById('feat4'));
    observer.observe(document.getElementById('feat5'));
    observer.observe(document.getElementById('feat6'));
    observer.observe(document.getElementById('screens'));
    observer.observe(document.getElementById('calories'));
    observer.observe(document.getElementById('downloads'));
    observer.observe(document.getElementById('clients'));
    observer.observe(document.getElementsByClassName('side_image')[0]);
    // observer.observe(document.getElementById('stats'));
    // observer.observe(document.getElementById('landing'));
} catch (err) {
    console.log(err)
}



function numberAnimation(el, endValue, incrementor, duration) {
    anime({
        targets: el,
        textContent: endValue,
        round: incrementor ? 1 / incrementor : 1 / 5,
        easing: 'easeInOutQuad',
        duration: duration ? duration : 4000,
    });
}

// header scroll
const header = document.getElementsByTagName('header')[0]
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('white')
    } else {
        header.classList.remove('white')
    }
})


document.getElementsByClassName("go_up")[0].addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
