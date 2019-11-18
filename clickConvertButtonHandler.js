function main(){
	// Fonction executée après que la page web a été totalement chargée.
	// Si on l'executait avant le chargement de l'élément
	//html convertButton, l'événement de click de pourrait y êre associé.
	convertButton.onclick = convertionHandler
}

function displayHexToBin(binWord){
	// Affiche la chaîne de caractère myText donnée en paramètre dans le
	//paragraphe HTML d'identifiant display.
	hexToBinPlaceHolder.textContent = binWord
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
