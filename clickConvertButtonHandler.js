function main(){
	// Fonction executée après que la page web a été totalement chargée.
	// Si on l'executait avant le chargement de l'élément
	//html convertButton, l'événement de click de pourrait y êre associé.
	convertButton.onclick = convertionHandler
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


function displayHexToBin(binWord){
	// Affiche la chaîne de caractère myText donnée en paramètre dans le
	//paragraphe HTML d'identifiant display.
	hexToBinPlaceHolder.textContent = binWord
}
