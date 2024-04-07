var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector('#player1');
	video.autoplay=false;
	video.loop=false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.addEventListener("DOMContentLoaded", function(){
    var video = document.getElementById("player1");
	var playButton = document.getElementById("play");
	var pauseButton = document.getElementById("pause");
	var volume = document.getElementById('volume');
	var slider = document.getElementById('slider');
	var slowerButton = document.getElementById("slower");
	var fasterButton = document.getElementById("faster");
	var skipButton = document.getElementById("skip");
	var muteButton = document.getElementById("mute");
	var vintageButton = document.getElementById("vintage");
	var origButton = document.getElementById("orig");

	playButton.addEventListener("click", function() {
		video.play();
		volume.textContent = slider.value + "%";
	});
	pauseButton.addEventListener("click", function() {
		video.pause();
	});
	slider.addEventListener('input', function() {
		video.volume = parseFloat(slider.value) / 100;
		volume.textContent = slider.value + "%";
	});
	slowerButton.addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("Slow down video");
        console.log("Speed is " + video.playbackRate);
    });
	fasterButton.addEventListener("click", function() {
		video.playbackRate *= 10/9;
		console.log("Speed up video");
        console.log("Speed is " + video.playbackRate);
    });
	skipButton.addEventListener("click", function() {
        var newTime = video.currentTime + 10;
        if (newTime >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime = newTime;
        }
		console.log("Skip ahead");
        console.log("Video current time is " + video.currentTime);
    });
	muteButton.addEventListener("click", function() {
        video.muted = !video.muted;
        if (video.muted) {
            muteButton.textContent = "Unmute";
			console.log("Mute");
        } else {
            muteButton.textContent = "Mute";
			console.log("Unmute");
        }
    });
	vintageButton.addEventListener("click", function() {
        video.classList.toggle("oldSchool");
    });
    origButton.addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});











// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
