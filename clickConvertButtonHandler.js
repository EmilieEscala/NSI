function main(){
	// Fonction executée après que la page web a été totalement chargée.
	// Si on l'executait avant le chargement de l'élément
	//html convertButton, l'événement de click de pourrait y êre associé.
	convertButton.onclick = numericConversion
}

