function convertionHandler(){
	// La fonction proceed réalise la conversion de la chaîne entrée dans
	//hexInput et affiche le résultat dans display.

	// Version utilisant des variables intermediaires
	//hexString = getHexString();
	//binWord = hexWordToBin(hexString);
	//displayHexToBin(binWord);

	//version utilisant la composition de fonction
	displayHexToBin(hexWordToBin(getHexString(hexToBinMapping)))
}

function getHexString(){
	//getHexString récupère la chaine de caractère entrée dans le champ
	//hexInput
	return hexInput.value;
}

function hexWordToBin(hexWord){
	//Ecrire une fonction de conversion d'un mot hexadécimal vers le mot binaire
	// correspondant

	let binWord = "";
	//Mettre à jour binWord à l'aide d'une boucle
	for (i = 0; i < hexWord.length; i++) {
		binWord += hexToBinMapping(hexWord.substr(i,1));
	}
	return binWord;
}

function hexToBinMapping(HexValue){
	//Compléter cette fonction construisant un objet de mapping
	//qui fait correspondre aux chiffres hexadécimaux les mots
	//binaires correspondants.
	const result = {
	"0":"0000",
	"1":"0001",
	"2":"0010",
	"3":"0011",
	"4":"0100",
	"5":"0101",
	"6":"0110",
	"7":"0111",
	"8":"1000",
	"9":"1001",
	"A":"1010",
	"B":"1011",
	"C":"1100",
	"D":"1101",
	"E":"1110",
	"F":"1111"
	}
	return result[HexValue]
}


function hexDigitToBin(hexDigit){
	//Compléter cette fonction de conversion d'un caractère représentant un chiffre hexadécimal
	//retournant le mot binaire correspondant.
	upperCaseHexDigit = hexDigit.toUpperCase()
	return ;
}
