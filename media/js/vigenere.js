function crypterVigenere() {
	var texte = RemoveAccents(document.getElementById("plain").value.toUpperCase());//utilise la fonction remove accent
	var cle = RemoveAccents(document.getElementById("key").value.toUpperCase());//afin d'enlever les accents au lettre, de plus mets le texte en majuscule
	var cle1 ="";
	var texteCrypter =""; // crée une variable vide pour mettre notre texte crypté ensuite
	for (i=0;i<=cle.length;i++) { //on enlève les caractère spéciaux/espaces de la clé
		if (cle.charCodeAt(i)>=32 && cle.charCodeAt(i)<=64 || cle.charCodeAt(i)>=91 && cle.charCodeAt(i)<=127 ) { // charcode(i) sert a voir le nombre ascii du caractère 
			cle1 +="";                                                                                             //et ainsi savoir si son nombre correspond à une lettre ou non
	   }	   // si ce n'est pas une lettre on ne rajoute rien dans la clé
			else {
				cle1 += String.fromCharCode(cle.charCodeAt(i)); //si c'est une lettre on l'ajoute dans une nouvelle variable vide
			}
	}
	var cle2 =""; //cette voucle supprime des caractères invisible se trouvant à la fin présent dans la clé pour je ne sais quelle raison
	for (i=0;i<=cle1.length-2;i++) {
		var number1 = cle1.charCodeAt(i);
		cle2 += String.fromCharCode(number1);
		}
		
	var z = 0; // c'est une variable qui augmente que si il y a traitement du texte et non d'un espace, cela permet d'aligner la clé avec le texte
	for (i=0;i<=texte.length;i++) { // c'est la boucle de cryptage véritable
				var number = texte.charCodeAt(i)-65;   // on ramène la clé et le texte de la position i et z 
				var cle3 = cle2.charCodeAt(z%cle2.length)-65;
				if (number<0 || number>=26) {               //cela permet de savoir si le texte a le caractère à la position i est
					texteCrypter += String.fromCharCode(32); // une lettre ou un caractère spéciale
				} 
					else {
						var number1 = ((cle3+number)%26)+65; // on applique la formule pour crypter le texte 
						texteCrypter += String.fromCharCode(number1); //on ajoute le caractère à la nouvelle variable et au passage on le retransforme le nombre en caractère
						z++;
					}
	}
document.getElementById("hash").value= texteCrypter;
}

function RemoveAccents(strAccents) { //fonction qui permet d'enlever les accents
	var strAccents = strAccents.split(''); // on coupe la chaine strAccents tout les caractère et on les mets dans un tableau
	var strAccentsOut = new Array(); // on définit la variable comme un tableau
	var strAccentsLen = strAccents.length;
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
	var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
	for (var y = 0; y < strAccentsLen; y++) {
		if (accents.indexOf(strAccents[y]) != -1) { //on cherche a savoir si la variable du tableau est une lettre avec un accent ce qui nous donneras -1 si telle est le cas
			strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);//on remplace le lettre accentué par la même lettre sans accents qu'on ajoute dans la nouvelle variable
		} else
				strAccentsOut[y] = strAccents[y];
	}
	strAccentsOut = strAccentsOut.join('');  //on retransforme le tableau en chaine
	return strAccentsOut;  // met fin à la fonction et ressort la variable strAccentsOut
}

function decrypterVigenere() { //les fonctions sont les mêmes que pour le cryptage globalement
	var texteCrypter = document.getElementById("hash").value.toUpperCase();
	var cle = RemoveAccents(document.getElementById("key").value.toUpperCase());
	var texteDecrypter ="";
	var cle1 ="";	
	for (i=0;i<=cle.length;i++) {
		if (cle.charCodeAt(i)>=32 && cle.charCodeAt(i)<=64 || cle.charCodeAt(i)>=91 && cle.charCodeAt(i)<=127 ) {
			cle1 +="";
	   }	
			else {
				cle1 += String.fromCharCode(cle.charCodeAt(i));
			}
	}
	var cle2 ="";
	for (i=0;i<=cle1.length-2;i++) {
		var number1 = cle1.charCodeAt(i);
		cle2 += String.fromCharCode(number1);
		}	
	var y = 0 ;
	for (i=0;i<=texteCrypter.length+1;i++) {
		var texteCrypter1 = texteCrypter.charCodeAt(i)-65;		
		var cle3 = cle2.charCodeAt(y%cle2.length)-65;
		if (texteCrypter1 <0 || texteCrypter1>=26) {
			texteDecrypter += String.fromCharCode(32);
		}
			else { // il y deux boucles par rapport à la fonction crypter car parfois la soustraction de la formule est négative et demande des ajustements
				if (texteCrypter1-cle3<0) {
					var texteCrypter2 = (texteCrypter1-cle3)+91;
					texteDecrypter += String.fromCharCode(texteCrypter2);
					y++;
				}
					else {
						var texteCrypter2 =(texteCrypter1-cle3)+65;
						texteDecrypter += String.fromCharCode(texteCrypter2);
						y++;
			}

}
document.getElementById("plain").value= texteDecrypter;
}
}
	





	
	
	

























