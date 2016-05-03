function crypterVigenere(){
var texte = RemoveAccents(document.getElementById("plain").value.toUpperCase());
var cle = RemoveAccents(document.getElementById("key").value.toUpperCase());
var texteCrypter ="";
texte = texte.replace(/\s/,"");
cle = cle.replace(/\s/g,"");
for (i=0;i<=texte.length;i++) {
	cle += cle;
}
for (i=0;i<=(texte.length+1);i++) {
	if (texte.charCodeAt(i)==32) {
		texteCrypter += String.fromCharCode(32);
	}
		else {
	
	var texte1 =texte.charCodeAt(i);
	var cle1 =cle.charCodeAt(i%cle.length);
	//var number = ((texte.charCodeAt(i)+cle.charCodeAt(i%cle.length)-6)%26)+65;
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

