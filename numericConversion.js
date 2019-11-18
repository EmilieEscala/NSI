function hexDigitToBin(hexDigit){
	//Compléter cette fonction de conversion d'un caractère représentant un chiffre hexadécimal
	//retournant le mot binaire correspondant.
	upperCaseHexDigit = hexDigit.toUpperCase()
	return ;
}

function convertionHandler(){
	// La fonction proceed réalise la conversion de la chaîne entrée dans
	//hexInput et affiche le résultat dans display.

	// Version utilisant des variables intermediaires
	//hexString = getHexString();
	//binWord = hexWordToBin(hexString);
	//displayHexToBin(binWord);

	//version utilisant la composition de fonction
	displayHexToBin(hexWordToBin(getHexString()))
}

function getHexString(){
	//getHexString récupère la chaine de caractère entrée dans le champ
	//hexInput
	return hexInput.value;
}
