function crypterVigenere(){
var texte = document.getElementById("plain").value.toUpperCase();
var cle = document.getElementById("key").value;
var texteCrypter ="";
texte = texte.replace(" ","");
texte = texte.replace(/[^\w\s]/gi,"");
cle = cle.replace(" ","");
cle = cle.replace(/[^\w\s]/gi,"");
for (i=0;i<=(texte.length+1);i++) {
	var number = ((texte.charCodeAt(i)+cle.charCodeAt(i%cle.length))%26)+65;
	texteCrypter+= String.fromCharCode(number);
	 console.log();
   debugger;
	}
document.getElementById("hash").innerHTML= texteCrypter;
}

