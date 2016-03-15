function getAffineHash(){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var plain = document.getElementById("plain").toLowerCase();
	var fonction = document.getElementById("fonction");
	var tableau = plain.split("");
	var hash = "";
	for (var i = 0; i <= tableau.length; i++) {
		var emplacement += alphabet.indexOf(tableau[i]);
		fonction.replace("x", emplacement);
		var resultat = eval(fonction) % 26;
		hash += alphabet.charAt(resultat);
	}
	document.getElementById("hash").innerHTML = hash;
}
