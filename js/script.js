
const female_img = document.getElementById("female");
const button_img = document.getElementById("button");
const headline1_img = document.getElementById("headline1");
const headline2_img = document.getElementById("headline2");
const subheadline_img = document.getElementById("subheadline");
const logo_img = document.getElementById("logo");
const replay_img = document.getElementById("replay");

window.onload = animation();

function animation() {
  fadein_female();
	slidein_headline1();
	setTimeout(frame2, 3000);
}

function fadein_female() {
	female_img.classList.toggle("fade-in");
	setTimeout(fadeout_female, 2000);
}

function fadeout_female() {
  female_img.classList.toggle("fade-out");
}

function slidein_headline1() {
	headline1_img.classList.toggle("slide-in");
	setTimeout(slideout_headline1, 2000);
}

function slideout_headline1() {
  headline1_img.classList.toggle("slide-out");
}

function frame2() {
	headline2_img.classList.toggle("slide-in");
	setTimeout(subheadline_fadein, 1000);
	setTimeout(button_fadein, 1500);
	setTimeout(logo_slidein, 2000);
	setTimeout(replay_slidein, 2050);
}

function subheadline_fadein() {
	subheadline_img.classList.toggle('fade-in');
}

function button_fadein() {
	button_img.classList.toggle('fade-in');
}

function logo_slidein() {
	logo_img.classList.toggle('slide-in');
}

function replay_slidein() {
	replay_img.classList.toggle('slide-in');
}

replay_img.addEventListener('click', function() {
	window.location.reload();
})


