function crypterVigenere(){
var texte = document.getElementById("plain");
texte.toUpperCase();
var cle = document.getElementById("key");
var texteCrypter ="";
texte.replace(" ","");
texte.replace(/[^\w\s]/gi,"");
for (i=1;i<texte.length;i++) {
	number = (texte.charCodeAt(i)+cle.charCodeAt(i))%26+65;
	texteCrypter+=fromCharCode(number);
	}
hash=texteCrypter
}
