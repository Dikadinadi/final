$(document).ready(function(){
    $("#startButton").click(function(){
        $("#animatedDiv").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });

        $("#hiddenText").removeClass("hidden").css("opacity", "1"); /* Показываем текст */
    });
});

var element = document.getElementById('animatedElement');
var animationId;

element.style.left = '0';

function animate() {
    var currentPosition = parseInt(element.style.left) || 0;

    element.style.left = currentPosition + 1 + 'px';

    animationId = requestAnimationFrame(animate);
}
element.addEventListener('animationend', function() {
    element.remove();
});
animate();

setTimeout(function() {
    cancelAnimationFrame(animationId);
}, 11000);



document.addEventListener('DOMContentLoaded', function () {
    var audioElement = document.getElementById('myAudio');
    audioElement.setAttribute('loop', 'true'); // Зацикливание воспроизведения
});
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}


var audio1 = document.getElementById('audio1');
var audio2 = document.getElementById('audio2');
var audio3 = document.getElementById('audio3');

// Play function
function playAudio(audio) {
    audio.play();
}

// Pause function
function pauseAudio(audio) {
    audio.pause();
}


    document.getElementById('text-overlay').innerHTML = '<h1>\n' +
        '        Cheeze  </h1>\n' +
        '        <p> Im Hye-kyung (Korean: 임혜경, born August 19, 1991)</p>';



