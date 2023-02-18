// Function: hideImage.js
// Description: This function hides the image when the img is clicked

function hideImg1() {
    let img1 = document.getElementById('img1');
    img1.className = "hidden";
}

function hideImg2() {
    let img2 = document.getElementById('img2');
    img2.className = "hidden";
}

function hideImg3() {
    let img3 = document.getElementById('img3');
    img3.className = "hidden";
}

function hideImg4() {
    let img4 = document.getElementById('img4');
    img4.className = "hidden";
}

function hideImg5() {
    let img5 = document.getElementById('img5');
    img5.className = "hidden";
}

function hideAllImages() {
    let imgs = document.getElementsByClassName('imgs');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.visibility = "hidden";
    }
}
