function getCesarHash(){
	//UPPERCASE l'input dans le Plain
	document.getElementById("plain").innerHTML = document.getElementById("plain").value.toUpperCase();

	//Get le Plain
	var plain = document.getElementById("plain").value;
	var decale_crypter = document.getElementById("decale_crypter").value;			//2 vars différentes sinon quand l'utilisateur décrypte le JS peut prendre la valeur qui a servi au cryptage
	//Mettre chaque lettre dans un tableau
	var tableau = plain.split("");
	var hash = "";
	for (var i = 0; i < tableau.length; i++) {
		//Si nous avons affaire à un espace nous ne le traitons pas
		if (tableau[i] != ' '){
			//Parcourir le tableau en convertissant chaque lettre en ASCII et y ajouter le décalage
			var charCode = tableau[i].charCodeAt(0);
			var charCodeGood = Number(charCode) + Number(decale_crypter);
			//Remplacement du charCode par la nouvelle lettre
			tableau[i] = String.fromCharCode(charCodeGood);
		}
		//Assemblement du tableau
		hash += tableau[i];
	}
	//On a notre HASH
	//Set le Hash dans le Champ Hash
	document.getElementById("hash").innerHTML = hash;
}

function getCesarPlain(){
	//UPPERCASE l'input dans le hash
	document.getElementById("hash").innerHTML = document.getElementById("hash").value.toUpperCase();

	//Get le Plain
	var hash = document.getElementById("hash").value;
	//Mettre chaque lettre dans un tableau
	var tableau = hash.split("");
	var plain = "";
	var decale_decrypter = document.getElementById("decale_decrypter").value;
	for (var decale_decrypter = 1; i < tableau.length; i++) {
		plain += 'Décalage de '+decale_decrypter+': ';
		for (var i = 0; i < tableau.length; i++) {
			//Si nous avons à faire à un espace nous ne le traitons pas
			if (tableau[i] != ' '){
				//Parcourir le tableau en convertissant chaque lettre en ASCII et y retirer le décalage
				var charCode = tableau[i].charCodeAt(0);
				var charCodeGood = Number(charCode) - Number(decale_decrypter);
				//Remplacement du charCode par la nouvelle lettre
				tableau[i] = String.fromCharCode(charCodeGood);
			}
			//Assemblement du tableau
			plain += tableau[i];
		}
		plain += "<br />";
	}
	//On a notre list de TEXT celon le décalage
	//Set le resultat dans le Champ plain
	document.getElementById("plain").innerHTML = plain;
}
