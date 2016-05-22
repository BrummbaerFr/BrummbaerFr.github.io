function load(){
	document.getElementById("plain").style.textTransform = "uppercase"; //Je transforme l'affichage du texte du champs en majuscule
	document.getElementById("affine").style.textTransform = "uppercase";
}

function getAffineHash(){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var plain = RemoveAccents(document.getElementById("plain").value.toLowerCase());
	plain = plain.replace(/[^a-zA-Z ]+/g, "");
	document.getElementById("plain").value = plain;
	var fonction = document.getElementById("fonction").value;
	var tableau = plain.split("");
	var hash = "";
	for (var i = 0; i < tableau.length; i++) {
		if(tableau[i] != " "){
			//Nous regardons a quel position est la lettre dans l'alphabet
			var emplacement = alphabet.indexOf(tableau[i]) + 1;
			//Nous remplaçons le x par l'emplacement
			var fonction_temps = fonction.replace("x", emplacement);
			//Nous faisons le cancul
			var resultat = eval(fonction_temps) % 26;
			//Nous regardons a quel lettre correspond l'emplacement
			if(resultat == 0)hash += "A";
			else hash += alphabet.charAt(resultat - 1);
		}
		else{
			hash += " ";
		}
	}
	document.getElementById("affine").value = hash;
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
