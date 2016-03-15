function freqLettres() {
  var ciphered = document.getElementById('ciphered').value.toUpperCase();
  var wordCount = ciphered.split(" ").length;
  ciphered = ciphered.replace(/\W+/g, '');
  ciphered = ciphered.replace(/\s+/g, '');
  var cipheredArray = ciphered.split("");
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var i;
  var j;
  var k;
  var l;
  var m;
  var n;
  var o;
  var p;
  var q;
  var r;
  var s;
  var t;
  var u;
  var v;
  var w;
  var x;
  var y;
  var z;
  console.log();
  debugger;
  for (var counter = 0; counter < cipheredArray.length; counter++) {
    var letter = ciphered.charCodeAt(counter);
    switch (letter) {
      case 65:
        a++;
        break;
      case 66:
        b++;
        break;
      case 67:
        c++
        break;
      case 68:
        d++;
        break;
      case 69:
        e++;
        break;
      case 70:
        f++;
        break;
      case 71:
        g++;
        break;
      case 72:
        h++
        break;
      case 73:
        i++;
        break;
      case 74:
        j++;
        break;
      case 75:
        k++;
        break;
      case 76:
        l++;
        break;
      case 77:
        m++
        break;
      case 78:
        n++;
        break;
      case 79:
        o++;
        break;
      case 80:
        p++;
        break;
      case 81:
        q++;
        break;
      case 82:
        r++
        break;
      case 83:
        s++;
        break;
      case 84:
        t++;
        break;
      case 85:
        u++;
        break;
      case 86:
        v++;
        break;
      case 87:
        w++
        break;
      case 88:
        x++;
        break;
      case 89:
        y++;
        break;
      case 90:
        z++;
        break;
    }
  }
  var aPer = (a*cipheredArray.length)/100;
  var bPer = (b*cipheredArray.length)/100;
  var cPer = (c*cipheredArray.length)/100;
  var dPer = (d*cipheredArray.length)/100;
  var ePer = (e*cipheredArray.length)/100;
  var fPer = (f*cipheredArray.length)/100;
  var gPer = (g*cipheredArray.length)/100;
  var hPer = (h*cipheredArray.length)/100;
  var iPer = (i*cipheredArray.length)/100;
  var jPer = (j*cipheredArray.length)/100;
  var kPer = (k*cipheredArray.length)/100;
  var lPer = (l*cipheredArray.length)/100;
  var mPer = (m*cipheredArray.length)/100;
  var nPer = (n*cipheredArray.length)/100;
  var oPer = (o*cipheredArray.length)/100;
  var pPer = (p*cipheredArray.length)/100;
  var qPer = (q*cipheredArray.length)/100;
  var rPer = (r*cipheredArray.length)/100;
  var sPer = (s*cipheredArray.length)/100;
  var tPer = (t*cipheredArray.length)/100;
  var uPer = (u*cipheredArray.length)/100;
  var vPer = (v*cipheredArray.length)/100;
  var wPer = (w*cipheredArray.length)/100;
  var xPer = (x*cipheredArray.length)/100;
  var yPer = (y*cipheredArray.length)/100;
  var zPer = (z*cipheredArray.length)/100;
  // Affichage des résultats
  document.getElementById('result').innerHTML += "<em>Résultats</em><br/>Analyse de " + ciphered.length + " lettres dans " + wordCount + " mots.";
  document.getElementById('result').innerHTML += "A : " + a + " (" + aPer + "%)<br/>";
  document.getElementById('result').innerHTML += "B : " + b + " (" + bPer + "%)<br/>";
  document.getElementById('result').innerHTML += "C : " + c + " (" + cPer + "%)<br/>";
  document.getElementById('result').innerHTML += "D : " + d + " (" + dPer + "%)<br/>";
  document.getElementById('result').innerHTML += "E : " + e + " (" + ePer + "%)<br/>";
  document.getElementById('result').innerHTML += "F : " + f + " (" + fPer + "%)<br/>";
  document.getElementById('result').innerHTML += "G : " + g + " (" + gPer + "%)<br/>";
  document.getElementById('result').innerHTML += "H : " + h + " (" + hPer + "%)<br/>";
  document.getElementById('result').innerHTML += "I : " + i + " (" + iPer + "%)<br/>";
  document.getElementById('result').innerHTML += "J : " + j + " (" + jPer + "%)<br/>";
  document.getElementById('result').innerHTML += "K : " + k + " (" + kPer + "%)<br/>";
  document.getElementById('result').innerHTML += "L : " + l + " (" + lPer + "%)<br/>";
  document.getElementById('result').innerHTML += "M : " + m + " (" + mPer + "%)<br/>";
  document.getElementById('result').innerHTML += "N : " + n + " (" + nPer + "%)<br/>";
  document.getElementById('result').innerHTML += "O : " + o + " (" + oPer + "%)<br/>";
  document.getElementById('result').innerHTML += "P : " + p + " (" + pPer + "%)<br/>";
  document.getElementById('result').innerHTML += "Q : " + q + " (" + qPer + "%)<br/>";
  document.getElementById('result').innerHTML += "R : " + r + " (" + rPer + "%)<br/>";
  document.getElementById('result').innerHTML += "S : " + s + " (" + sPer + "%)<br/>";
  document.getElementById('result').innerHTML += "T : " + t + " (" + tPer + "%)<br/>";
  document.getElementById('result').innerHTML += "U : " + u + " (" + uPer + "%)<br/>";
  document.getElementById('result').innerHTML += "V : " + v + " (" + vPer + "%)<br/>";
  document.getElementById('result').innerHTML += "W : " + w + " (" + wPer + "%)<br/>";
  document.getElementById('result').innerHTML += "X : " + x + " (" + xPer + "%)<br/>";
  document.getElementById('result').innerHTML += "Y : " + y + " (" + yPer + "%)<br/>";
  document.getElementById('result').innerHTML += "Z : " + z + " (" + zPer + "%)<br/>";
}
