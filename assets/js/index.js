function addOnScreenEvent() {
    const pageHeaderContainer = document.querySelector('.page-header .header-container');
    let headerOffSetTop = pageHeaderContainer.offsetTop;
    const aboutMe = document.querySelector('.about-me');
    let aboutMeOffSetTop = aboutMe.offsetTop;
    let isTransform = true;

    const onScreenEvent = () => {
        if (isTransform && (window.pageYOffset >= headerOffSetTop)) {
            isTransform = false;
            pageHeaderContainer.style.position = 'fixed';
            pageHeaderContainer.style.top = '0';
            pageHeaderContainer.classList.remove('white');
        } else if (!isTransform && (window.pageYOffset < headerOffSetTop)) {
            isTransform = true;
            pageHeaderContainer.style.position = 'relative';
            pageHeaderContainer.classList.add('white');
        }

        if (!isTransform && (window.pageYOffset + 50 >= aboutMeOffSetTop)) {
            pageHeaderContainer.style.top = '';
            pageHeaderContainer.style.bottom = '0';
            pageHeaderContainer.classList.add('white');
        } else if (!isTransform) {
            pageHeaderContainer.style.top = '0';
            pageHeaderContainer.style.bottom = '';
            pageHeaderContainer.classList.remove('white');
        }
    }

    document.addEventListener('scroll', onScreenEvent);
}

function addParallax() {
    const parallax1 = document.querySelector('.portfolio-parallax .parallax-1');
    const parallax2 = document.querySelector('.portfolio-parallax .parallax-2');

    let middleX = document.body.clientWidth / 2;
    let middleY = document.body.clientHeight / 2;

    const resizeEvent = () => {
        middleX = document.body.clientWidth / 2;
        middleY = document.body.clientHeight / 2;
    }

    const parallaxEvent = (e) => {
        const ev = e.changedTouches ? e.changedTouches[0] : e;
        parallax1.style.animationDuration = '0s';
        parallax1.style.backgroundPositionX = `calc(50% + ${(middleX - ev.clientX) / 10}px)`;
        parallax1.style.backgroundPositionY = `calc(50% + ${(middleY - ev.clientY) / 10}px)`;


        parallax2.style.backgroundPositionX = `calc(50% + ${(middleX - ev.clientX) / 25}px)`;
        parallax2.style.backgroundPositionY = `calc(50% + ${(middleY - ev.clientY) / 25}px)`;
    }

    document.addEventListener('resize', resizeEvent);
    document.addEventListener('mousemove', parallaxEvent);
    document.addEventListener('touchmove', parallaxEvent);
}

function main() {
    addOnScreenEvent();
    addParallax();

    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500
    });
}

main();