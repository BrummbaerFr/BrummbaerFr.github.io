function getAffineHash(){
	document.getElementById("plain").style.textTransform = "uppercase";
	
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var plain = RemoveAccents(document.getElementById("plain").value.toLowerCase());
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
			hash += alphabet.charAt(resultat - 1);
		}
		else{
			hash += " ";
		}
	}
	document.getElementById("affine").value = hash;
}

function getPlainByAffine(){
	document.getElementById("affine").style.textTransform = "uppercase";
	
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var affine = RemoveAccents(document.getElementById("affine").value.toLowerCase());
	var fonction = document.getElementById("fonction").value.replace("+", "-").replace("-", "+");
	var tableau = affine.split("");
	var plain = "";
	for (var i = 0; i < tableau.length; i++) {
		if(tableau[i] != " "){
			//Nous regardons a quel position est la lettre dans l'alphabet
			var emplacement = alphabet.indexOf(tableau[i]) + 1;
			//Nous remplaçons le x par l'emplacement
			var fonction_temps = fonction.replace("x", emplacement);
			//Nous faisons le cancul
			var resultat = eval(fonction_temps) % 26;
			//Nous regardons a quel lettre correspond l'emplacement
			plain += alphabet.charAt(resultat - 1);
		}
		else{
			plain += " ";
		}
	}
	document.getElementById("plain").value = plain;
}
function RemoveAccents(strAccents) {
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
