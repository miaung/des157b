(function() {
    'use strict';

    const mySection = document.querySelector("#mySection");
    const line1 = document.querySelector("#line1");
    const line2 = document.querySelector("#line2");
    const line3 = document.querySelector("#line3");
    const line4 = document.querySelector("#line4");
    const line5 = document.querySelector("#line5");

    const intervalID = setInterval(checkTime, 1000);

    function checkTime(){
        if (1 < myVideo.currentTime && myVideo.currentTime < 3) {
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }
        if (5 < myVideo.currentTime && myVideo.currentTime < 7) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }
        if (9 < myVideo.currentTime && myVideo.currentTime < 11) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }
        if (13 < myVideo.currentTime && myVideo.currentTime < 15) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }
        if (17 < myVideo.currentTime && myVideo.currentTime < 19) {
            line5.className = "showing";
        } else {
            line5.className = "hidden";
        }
    }

    const fs = document.querySelector('.fa-expand');     

    fs.addEventListener('click', function() {
    // The fullscreenElement attribute returns null if the element is in windowed mode
    if (!document.fullscreenElement) {
        // document.documentElement returns the Element that is a direct child of the document,   which is the <html> element
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
    })
})();