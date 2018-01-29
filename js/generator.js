Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

const sayings = [
	"à chaque jour suffit sa peine",
	"à force de forger on devient forgeron",
	"à l'impossible nul n'est tenu",
	"à quelque chose malheur est bon",
	"au royaume des aveugles les borgnes sont rois",
	"aux grands maux les grands remèdes",
	"charité bien ordonnée commence par soi-même",
	"inutile de chercher midi à quatorze heures",
	"l'appétit vient en mangeant",
	"l'eau va toujours à la rivière",
	"l'habit ne fait pas le moine",
	"l'occasion fait le larron",
	"l'union fait la force",
	"la nuit, tous les chats sont gris",
	"le mieux est l'ennemi du bien",
	"le temps ne fait rien à l'affaire",
	"les bons comptes font les bons amis",
	"les paroles s'envolent, les écrits restent",
	"les petits ruisseaux font les grandes rivières",
	"il ne faut pas mettre la charrue avant les boeufs",
	"nul n'est prophète dans son pays",
	"pierre qui roule n'amasse pas mousse",
	"qui se ressemble s'assemble",
	"qui trop embrasse mal étreint",
	"qui s'y frotte s'y pique",
	"tant va la cruche à l'eau qu'à la fin elle se brise",
	"tout ce qui reluit n'est pas or",
	"tout vient à point à qui sait attendre",
	"toutes les vérités ne sont pas bonnes à dire",
	"il faut voir midi à sa porte",
	"il ne faut pas mettre la charrue avant les boeufs",
	"les cordonniers sont toujours les plus mal chaussés",
];

const introductions = [
	"Chères amies, chers amis, ",
	"Françaises, Français, ",
	"Mes chers concitoyennes, mes chers concitoyens, ",
	"Citoyennes, citoyens, ",
	"Chères consoeurs, chers confrères, ",
];

const beginnings = [
	"en vérité je vous le dis : ",
	"sachez le : ",
	"il faut le dire honnêtement : ",
	"il ne faut pas hésiter à le dire : ",
	"regardons la vérité en face : ",
	"comme chacun sait, ",
	"c'est évident : ",
	"il faut avoir le courage de le dire : ",
	"il est temp que quelqu'un le dise haut et fort : ",
];

const links = [
	'. En effet, ',
	'. Ainsi, ',	
	'. De même, ',
	'. Cependant, ',
	'. Toutefois, ',
	'. Néanmoins, ',
	'. Nonobstant, ',
	'. Après tout, ',
	'. Malgré tout, ',
	'. En tout cas, ',
];

const links2 = [
	', car ',
	', et ',
	', or ',
	', donc ',
	', mais ',
	', ergo ',
	', subséquemment, ',
	', conséquement, ',
	', c\'est pourquoi ',
];

const conclusions = [
	'. Et surtout n\'oubliez pas : ',
	'. Pour conclure, je dirai ceci : ',
	'. Enfin, n\'oubliez pas : ',
	'. Je terminerai par ces quelques mots remplis de sagesse : ',
	'. Comme je le dis toujours : ',
];

$(document).ready(function () {
    createSpeech();

    $("#refresh-speech").click(function () {
        createSpeech();
    });
});

const createSpeech = function(gender) {
	const intro = introductions.randomElement();
	const beginning = beginnings.randomElement();

	const link1 = links.randomElement();
	const link2 = links2.randomElement();

	const conclusion = conclusions.randomElement();

	const saying1 = sayings.randomElement();
	const saying2 = sayings.filter((value) => {
		return value != saying1;
	}).randomElement();
	const saying3 = sayings.filter((value) => {
		return value != saying1 && value != saying2;
	}).randomElement();
	const saying4 = sayings.filter((value) => {
		return value != saying1 && value != saying2 && value != saying3;
	}).randomElement();

	const speech = `${intro}${beginning}${saying1}${link1}${saying2}${link2}${saying3}${conclusion}${saying4}`;

	$('#speech').html(speech);
}