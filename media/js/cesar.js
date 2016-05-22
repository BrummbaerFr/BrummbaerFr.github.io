function load(){
	document.getElementById("plain").style.textTransform = "uppercase";
	document.getElementById("hash").style.textTransform = "uppercase";
}

function getCesarHash(){
	//Get le Plain
	var plain = RemoveAccents(document.getElementById("plain").value.toUpperCase());
	plain = plain.replace(/[^A-Z ]+/g, "");
	var decale_crypter = document.getElementById("decale_crypter").value;			//2 vars différentes sinon quand l'utilisateur décrypte le JS peut prendre la valeur qui a servi au cryptage
	//Mettre chaque lettre dans un tableau
	var tableau = plain.split("");
	var hash = "";
	for (var i = 0; i < tableau.length; i++) {
		//Si nous avons affaire à un espace nous ne le traitons pas
		if (tableau[i] != ' '){
			//Parcourir le tableau en convertissant chaque lettre en ASCII et y ajouter le décalage
			var charCode = tableau[i].charCodeAt(0);
			for (var ii = 0; ii < Number(decale_crypter); ii++) {
				if(charCode == 90)charCode = 65;
				else charCode = Number(charCode) + 1;
			}
			//Remplacement du charCode par la nouvelle lettre
			tableau[i] = String.fromCharCode(charCode);
		}
		//Assemblement du tableau
		hash += tableau[i];
	}
	//On a notre HASH
	//Set le Hash dans le Champ Hash
	document.getElementById("hash").value = hash;
}

function getCesarPlain(){
	//Get le hash
	var hash = RemoveAccents(document.getElementById("hash").value.toUpperCase());
	hash = hash.replace(/[^A-Z ]+/g, "");
	//Mettre chaque lettre dans un tableau
	var tableau = hash.split("");
	var plain = "";
	if (document.getElementById("decale_decrypter") != null) {
		var decale_decrypter = document.getElementById("decale_decrypter").value;
		for (var i = 0; i < tableau.length; i++) {
			var charCode = tableau[i].charCodeAt(0);
			//Si nous avons à faire à un espace nous ne le traitons pas
			if (tableau[i] != ' '){
				for (var ii = 0; ii < Number(decale_decrypter); ii++) {
					//Parcourir le tableau en convertissant chaque lettre en ASCII et y retirer le décalage
					if(charCode == 65)charCode = 90;
					else charCode = Number(charCode) - 1;
				}
			}
			//Assemblement du tableau et Remplacement du charCode par la nouvelle lettre
			plain += String.fromCharCode(charCode);
		}
	}
	else{
		for (var decale_decrypter = 1; decale_decrypter < 26; decale_decrypter++) {
		plain += 'Décalage de '+decale_decrypter+': ';
		for (var i = 0; i < tableau.length; i++) {
			var charCode = tableau[i].charCodeAt(0);
			//Si nous avons à faire à un espace nous ne le traitons pas
			if (tableau[i] != ' '){
				for (var ii = 0; ii < Number(decale_decrypter); ii++) {
					//Parcourir le tableau en convertissant chaque lettre en ASCII et y retirer le décalage
					if(charCode == 65)charCode = 90;
					else charCode = Number(charCode) - 1;
				}
			}
			//Assemblement du tableau et Remplacement du charCode par la nouvelle lettre
			plain += String.fromCharCode(charCode);
		}
		plain += "\n";
	}
	}
	//On a notre list de TEXT celon le décalage
	//Set le resultat dans le Champ plain
	document.getElementById("plain").value = plain;
}

function hasKey(){
	document.getElementById("choix").innerHTML = '<input name="decale" id="decale_decrypter" type="number"> décalage';
}

function RemoveAccents(strAccents) {
	//MERCI A alisterlf POUR AVOIR FAIT CE SCRIPT ENUMERANT TOUT LES CARACTERES AVEC ACCENTS
	var strAccents = strAccents.split('');
	var strAccentsOut = new Array();
	var strAccentsLen = strAccents.length;
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
	var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
	for (var y = 0; y < strAccentsLen; y++) {
		if (accents.indexOf(strAccents[y]) != -1) {
			strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
		} else
			strAccentsOut[y] = strAccents[y];
	}
	strAccentsOut = strAccentsOut.join('');
	return strAccentsOut;
}
