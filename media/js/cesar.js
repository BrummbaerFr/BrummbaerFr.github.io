function load(){
	//Je défini chaque champs en majuscule
	document.getElementById("plain").style.textTransform = "uppercase";
	document.getElementById("hash").style.textTransform = "uppercase";
}

function getCesarHash(){
	//On récupère le texte auquel on retire les accent à l'aide d'une fonction et que l'on met en majuscule
	var plain = RemoveAccents(document.getElementById("plain").value.toUpperCase());
	//Nous retirons tout les caractère qui ne font pas partie de l'alphabet grâce à du REGEX
	plain = plain.replace(/[^A-Z ]+/g, "");
	//Nous mettons a jour l'affichage du texte sans les caractères interdits
	document.getElementById("plain").value = plain;
	//Nous récupérons la valeur du décallage choisie par l'utilisateur
	var decale_crypter = document.getElementById("decale_crypter").value;
	//Mettre chaque lettre dans un tableau
	var tableau = plain.split("");
	//Nous initialisons la variable hash
	var hash = "";
	//Ce tableau va traiter chaque lettre du texte
	for (var i = 0; i < tableau.length; i++) {
		//Si nous avons affaire à un espace nous ne le traitons pas
		if (tableau[i] != ' '){
			//Parcourir le tableau en convertissant chaque lettre en ASCII et y ajouter le décalage
			var charCode = tableau[i].charCodeAt(0);
			for (var ii = 0; ii < Number(decale_crypter); ii++) {
				//Dès que l'on arrive a 90 ( fin de l'alphabet ), nous revenons à 65
				if(charCode == 90)charCode = 65;
				else charCode = Number(charCode) + 1;
			}
			//Remplacement du charCode par la nouvelle lettre
			tableau[i] = String.fromCharCode(charCode);
		}
		//Assemblement du tableau
		hash += tableau[i];
	}
	//On affiche le texte codé dans le champs hash
	document.getElementById("hash").value = hash;
}

function getCesarPlain(){
	//Nous récupérons le texte codé auquel nous retirons les accents et le mettons en majuscule
	var hash = RemoveAccents(document.getElementById("hash").value.toUpperCase());
	//Nous retirons tout les caractère qui ne font pas partie de l'alphabet grâce à du REGEX
	hash = hash.replace(/[^A-Z ]+/g, "");
	//Mettre chaque lettre dans un tableau
	var tableau = hash.split("");
	//Nous initialisons la variable plain
	var plain = "";
	//Si l'utilisateur connais le décalage nous rentrons dans cette condition
	if (document.getElementById("decale_decrypter") != null) {
		//Nous récupérons la valeur de décalage
		var decale_decrypter = document.getElementById("decale_decrypter").value;
		//Nous rentrons dans letableau qui va traiter toute les lettres une par une
		for (var i = 0; i < tableau.length; i++) {
			//Nous récupérons le code ASCII du caractère traité
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
	//Si l'utilisateur ne connais pas le décalage nous allons lui montrer chaque possibilité de texte
	else{
		//Nous allons afficher toute les combinaisons possible avec un décallage de 1 à 25
		for (var decale_decrypter = 1; decale_decrypter < 26; decale_decrypter++) {
		plain += 'Décalage de '+decale_decrypter+': ';
		//Nous traitons chaque lettre du texte une par une
		for (var i = 0; i < tableau.length; i++) {
			//Nous récupérons l'ASCII de la lettre
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
		//Nous ajoutons un retour à la ligne
		plain += "\n";
	}
	}
	//On a notre list de TEXT celon le décalage
	//On met le resultat dans le Champ plain
	document.getElementById("plain").value = plain;
}

function hasKey(){
	//Cette fonction affiche un champs pour rentrer un décallage si nous le connaissons.
	document.getElementById("choix").innerHTML = 'décalage:<input name="decale" id="decale_decrypter" type="number">';
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
