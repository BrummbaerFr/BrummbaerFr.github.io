function crypterVigenere(){
	var texte = RemoveAccents(document.getElementById("plain").value.toUpperCase());//utilise la fonction remove accent
	var cle = RemoveAccents(document.getElementById("key").value.toUpperCase());//afin d'enlever les accents au lettre, de plus mets le texte en majuscule
	var texteCrypter =""; // crée une variable vide pour mettre notre texte crypté ensuite
	for (i=0;cle.length<=texte.length;i++) { //cette boucle permet de faire une clé aussi longue que le texte à crypter
	cle += cle;//+= permet d'ajouter la chaîne de caractère  à la chaîne de caractère déjà présente
	}
	
	for (i=0;i<=(texte.length+1);i++) { // début de la boucle véritable afin de la crypter
		if (texte.charCodeAt(i)>=32 && texte.charCodeAt(i)<=64 || texte.charCodeAt(i)>=91 && texte.charCodeAt(i)<=127 ) {
			texteCrypter += String.fromCharCode(32);
		}
			else {
			var number = ((texte.charCodeAt(i)+cle.charCodeAt(i)))-65;
				if (number >= 91) {
					number = 65+number-91;
				}
			texteCrypter += String.fromCharCode(number);
			}
	}
document.getElementById("hash").innerHTML= texteCrypter;
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
