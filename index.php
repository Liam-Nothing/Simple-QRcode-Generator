<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="UTF-8">
		<meta name="Content-Type" content="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<link rel="stylesheet prefetch" href='https://fonts.googleapis.com/css?family=Roboto' type='text/css'>
		<link rel="stylesheet prefetch" href='https://fonts.googleapis.com/css?family=PT+Sans+Narrow' type='text/css'>
		<link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300" type="text/css">
	</head>
	<body>
		<header>
			<img src="https://nothingelse.fr/img/logo_black.png">
			<h1>QRCode generator</h1>
		</header>
		<main>
			<div class="container mb">
				<img id="qrcode_image" src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=https://nothingelse.fr/&choe=UTF-8" />
				<input type="text" id="chl" placeholder="https://nothingelse.fr/"/>
				<div class="same_line">
					<p>Size :</p>
					<select id="chs">
						<option value="150" select>150</option>
						<option value="300">300</option>
						<option value="500">500</option>
					</select>
				</div>
				<div class="same_line">
					<p>Encoding :</p>
					<select id="choe">
						<option value="UTF-8" select>UTF-8</option>
						<option value="Shift_JIS">Shift_JIS</option>
						<option value="ISO-8859-1">ISO-8859-1</option>
					</select>
				</div>
				<div class="same_line">
					<p>Error correction :</p>
					<select id="chld">
						<option value="L" select>L</option>
						<option value="M">M</option>
						<option value="Q">Q</option>
						<option value="H">H</option>
					</select>
				</div>
			</div>
		</main>
		<footer>

		</footer>
		<section>
			<div class="container alert-warning" id="alert">
				<p id="alert-message"></p>
			</div>
		</section>
		<script src="js/func.js"></script>
	</body>
</html>