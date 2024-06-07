const reponse = await fetch("pieces-autos.json");
//Bonjour la france
//await permet d'attendre la fin de l'exécution de la fonction fetch avant de continuer le code.	
//fetch est une fonction qui permet de récupérer des données depuis une URL.		
//reponse.json() permet de transformer les données reçues en JSON.
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

	const article = pieces[i];

	const sectionFiches = document.querySelector(".fiches");
	const articleElement = document.createElement("article");

	const imageElement = document.createElement("img");
	imageElement.src = article.images;

	const nomElement = document.createElement("h2");
	nomElement.innerText = article.nom;

	const prixElement = document.createElement("p");
	prixElement.innerText = `Prix: ${article.prix} € (${article.prix == 35 ? "€" : "€€€"})`;

	const categorieElement = document.createElement("p");
	categorieElement.innerText = article.categorie ?? "aucune catégorie";

	const descriptionElement = document.createElement("p");
	descriptionElement.innerText = article.description ?? "Pas de description pour le moment" ;

	const disponibiliteElement = document.createElement("p");
	disponibiliteElement.innerText = `Disponible: ${article.disponibilite ? "En stock" : "Rupture de stock"}`;

	sectionFiches.appendChild(articleElement);
	articleElement.appendChild(imageElement);
	articleElement.appendChild(nomElement);
	articleElement.appendChild(prixElement);
	articleElement.appendChild(categorieElement);
	articleElement.appendChild(descriptionElement);
	articleElement.appendChild(disponibiliteElement);
}

// trier les pieces par prix
// sort permet quoi ?
// sort permet de trier les éléments d'un tableau en fonction d'une condition donnée.
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
	const piecesOrdonnees = Array.from(pieces);
	piecesOrdonnees.sort(function (a, b) {
		return a.prix - b.prix;
	});
	console.log(piecesOrdonnees);
});

// affichier pieces dont le prix est inférieur à 35
// fitter permet quoi ?
// filter permet de filtrer les éléments d'un tableau en fonction d'une condition donnée.
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
	const piecesFiltrees = pieces.filter(function (piece) {
		return piece.prix < 35;
	});
	console.log(piecesFiltrees);
});

//quelle est la différence entre sort et filter ?
//sort permet de trier les éléments d'un tableau en fonction d'une condition donnée.
//filter permet de filtrer les éléments d'un tableau en fonction d'une condition donnée.
//signifie quoi filtrer ?
//Filtrer signifie sélectionner les éléments d'un tableau en fonction d'une condition donnée.

const boutonDecroissant = document.querySelector(".btn-decroissant");;
boutonDecroissant.addEventListener("click", function(){
	const piecesOrdonnees = Array.from(pieces);
	piecesOrdonnees.sort(function(a, b){
		return b.prix - a.prix;
	});
	console.log(piecesOrdonnees);	
})

const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function(){
	const piecesFiltrees = pieces.filter(function(piece){
		return piece.description
	});
	console.log(piecesFiltrees);
})