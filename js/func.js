let url = "https://chart.googleapis.com/chart?";

function UpdateImage(){
	let chl = encodeURI(document.getElementById("chl").value);
	let chs = document.getElementById("chs").value;
	let choe = document.getElementById("choe").value;
	let chld = document.getElementById("chld").value;
	url = `https://chart.googleapis.com/chart?chs=${chs}x${chs}&cht=qr&chl=${chl}&choe=${choe}&chld=${chld}`
	document.getElementById("qrcode_image").src = url;
}

function Default(){
	document.getElementById('chl').addEventListener('keydown', UpdateImage);
	document.getElementById('chs').addEventListener('change', UpdateImage);
	document.getElementById('choe').addEventListener('change', UpdateImage);
	document.getElementById('chld').addEventListener('change', UpdateImage);
}

Default();