//Filename: fnSettingStyle.js
// Function to increase the font size of the text in the body

function enlargeText() { // I'm going to try and use a for loop and an array for this one
    let pArr = [];

    let p1 = document.getElementById('p1'); 
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');
    let p5 = document.getElementById('p5');
    pArr.push(p1, p2, p3, p4, p5);
    // console.log(pArr);
    let fSize = 1.5;
    for (let i = 0; i < pArr.length; i++) {
        pArr[i].style.fontSize = fSize + "em";
        fSize += .5;
    }



}

function decreaseText() { //this one was a little more tricky
    let pArr = [];

    let p1 = document.getElementById('p1'); 
    let p2 = document.getElementById('p2');
    let p3 = document.getElementById('p3');
    let p4 = document.getElementById('p4');
    let p5 = document.getElementById('p5');
    pArr.push(p1, p2, p3, p4, p5);
    console.log(pArr);
    let fSize = 1;
    console.log(fSize);
    for (let i = pArr.length-1; i >= 0; i--) {
        pArr[i].style.fontSize = fSize + "em";
        console.log(pArr[i].style.fontSize);
        console.log(fSize);
        fSize -= .1;
    }
}

function enlargeHeader() {
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    h1.style.fontSize = "10em";
    h2.style.fontSize = "5em";
}

function decreaseHeader() {
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    h1.style.fontSize = "1em";
    h2.style.fontSize = ".5em";
}




/* I also made this function to revert the text back to the original size
   All it really is is just a refresh page button.
   I can probably just call the reload function in the html file instead of
   calling a function with a new function but I'll leave it like this
*/
function revertBack() { 
    location.reload();
}