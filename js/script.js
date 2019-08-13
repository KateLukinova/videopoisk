$(document).ready(function () {
    const darckBtn = document.querySelector('#toggle-darck');
    const whiteBtn = document.querySelector('#toggle-white');
    const neonBtn = document.querySelector('#toggle-neon');

    whiteBtn.addEventListener('click', (e) => {
        var documentElement = document.documentElement;

        documentElement.style.setProperty('--main-hue', '#ffffff');
        documentElement.style.setProperty('--main-caption', '#000000');
        documentElement.style.setProperty('--fill-logo-icon', '#d73d31');
        documentElement.style.setProperty('--logo-color', '#000000');
        documentElement.style.setProperty('--text-color', '#000000');
        documentElement.style.setProperty('--back-search-color', 'transparent');
        documentElement.style.setProperty('--border-search-color', '#dedede');
        documentElement.style.setProperty('--back-account-color', '#454d5e');
        documentElement.style.setProperty('--text-account-color', '#8c898f');
        documentElement.style.setProperty('--text-span-color', '#8c898f');
        documentElement.style.setProperty('--body-back', '#ffffff');
        documentElement.style.setProperty('--item-back', '#ebeaec');
        documentElement.style.setProperty('--box-back', '#2d2d2d');
        documentElement.style.setProperty('--select-back', '#ebeaec');
        documentElement.style.setProperty('--select-color', '#000000');
    });

    darckBtn.addEventListener('click', (e) => {
        var documentElement = document.documentElement;

        documentElement.style.setProperty('--main-hue', '#323947');
        documentElement.style.setProperty('--main-caption', '#ffffff');
        documentElement.style.setProperty('--fill-logo-icon', '#d73d31');
        documentElement.style.setProperty('--logo-color', '#ffffff');
        documentElement.style.setProperty('--text-color', '#ffffff');
        documentElement.style.setProperty('--back-search-color', '#454d5e');
        documentElement.style.setProperty('--border-search-color', '#454d5e');
        documentElement.style.setProperty('--back-account-color', '#454d5e');
        documentElement.style.setProperty('--text-account-color', '#98a3c2');
        documentElement.style.setProperty('--text-span-color', '#98a3c2');
        documentElement.style.setProperty('--body-back', '#13151c');
        documentElement.style.setProperty('--item-back', '#454d5e');
        documentElement.style.setProperty('--box-back', '#454d5e');
        documentElement.style.setProperty('--select-back', '#454d5e');
        documentElement.style.setProperty('--select-color', '#ffffff');
    });

    neonBtn.addEventListener('click', (e) => {
        var documentElement = document.documentElement;

        documentElement.style.setProperty('--main-hue', '#2b2d5c');
        documentElement.style.setProperty('--main-caption', '#ffffff');
        documentElement.style.setProperty('--fill-logo-icon', '#27b8ff');
        documentElement.style.setProperty('--logo-color', '#ffffff');
        documentElement.style.setProperty('--text-color', '#ffffff');
        documentElement.style.setProperty('--back-search-color', '#4d508d');
        documentElement.style.setProperty('--border-search-color', '#4d508d');
        documentElement.style.setProperty('--back-account-color', '#4d508d');
        documentElement.style.setProperty('--text-account-color', '#98a3c2');
        documentElement.style.setProperty('--text-span-color', '#898ccb');
        documentElement.style.setProperty('--body-back', '#191a43');
        documentElement.style.setProperty('--item-back', '#4d508d');
        documentElement.style.setProperty('--box-back', '#4d508d');
        documentElement.style.setProperty('--select-back', '#454d5e');
        documentElement.style.setProperty('--select-color', '#ffffff');
    });

    var video = document.getElementById('video'),
        controls = document.getElementsByClassName('controls')[0],
        playPause = document.getElementsByClassName('playpause')[0],
        volumeOff = document.getElementsByClassName('volume')[0],
        volume = document.getElementsByClassName('volume-input')[0],
        fullscreen = document.getElementsByClassName('fullscreen')[0];

    playPause.addEventListener('click', function () {
        if (playPause.className === 'playpause pause') {
            playPause.className = 'playpause play';
            video.play();
            console.log('asdfasdf')
        } else {
            playPause.className = 'playpause pause';
            video.pause();
            console.log('23434f')
        }
    });

    volumeOff.addEventListener('click', function () {
        if (volumeOff.className === 'volume v-off') {
            volumeOff.className = 'volume v-on';
            video.volume = 0;
            volume.value = 0;
        } else {
            volumeOff.className = 'volume v-off';
            video.volume = 0.5;
            volume.value = 50;
        }
    });

    fullscreen.addEventListener("click", function () {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            controls.className = 'controls';
            fullscreen.className = 'fullscreen fa fa-expand';
        } else {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            }
            controls.className = 'controls extended';
            fullscreen.className = 'fullscreen fa fa-compress';
        }
    });

    volume.addEventListener('input', function () {
        video.volume = volume.value / 100;
    });
    var progressSlider = document.querySelector('.progress');
    var progressFill = document.querySelector('.progress-filled');

    function neatTime(time) {
        var minutes = Math.floor((time % 3600) / 60);
        var seconds = Math.floor(time % 60);
        seconds = seconds > 1 ? seconds : `0${seconds}`;
        return `${minutes}:${seconds}`;
    }

    function updateProgress(e) {
        progressFill.style.width = `${video.currentTime / video.duration * 100}%`;
    }

    function setProgress(e) {
        const newTime = e.offsetX / progressSlider.offsetWidth / 5;
        progressFill.style.width = `${newTime * 100}%`;
        video.currentTime = newTime * video.duration;
    }

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('canplay', updateProgress);
    progressSlider.addEventListener('click', setProgress);
    var coll = document.getElementsByClassName("expand-button");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle('active');

            if ($(this).hasClass('active')) {
                $(this).text('Скрыть описание')
            } else {
                $(this).text('Читать далее')
            }

            var content = this.nextElementSibling.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    $('#owl-carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class=\"fas fa-chevron-left\"></i>",
            "<i class=\"fas fa-chevron-right\"></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('#owl-carousel2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class=\"fas fa-chevron-left\"></i>",
            "<i class=\"fas fa-chevron-right\"></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    $('#owl-carousel3').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class=\"fas fa-chevron-left\"></i>",
            "<i class=\"fas fa-chevron-right\"></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    })
});

