const reponse = await fetch("pieces-autos.json");
//Bonjour la france
//await permet d'attendre la fin de l'exécution de la fonction fetch avant de continuer le code.	
//fetch est une fonction qui permet de récupérer des données depuis une URL.		
//reponse.json() permet de transformer les données reçues en JSON.
const pieces = await reponse.json();
function genererPieces(pieces) {
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
		descriptionElement.innerText = article.description ?? "Pas de description pour le moment";

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
}
genererPieces(pieces);
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

// affichier des pieces en croissant
const boutonDecroissant = document.querySelector(".btn-decroissant");;
boutonDecroissant.addEventListener("click", function () {
	const piecesOrdonnees = Array.from(pieces);
	piecesOrdonnees.sort(function (a, b) {
		return b.prix - a.prix;
	});
	console.log(piecesOrdonnees);
})

// affichier les description de la pieces
const boutonNoDescription = document.querySelector(".btn-nodesc");
boutonNoDescription.addEventListener("click", function () {
	const piecesFiltrees = pieces.filter(function (piece) {
		return piece.description
	});
	console.log(piecesFiltrees);
})

// affichier seulement les noms des pieces
//Fonction lambda pieces => pieces.nom
//Fonction normal function(pieces) 
//	{return pieces.nom}
//map sert a générer un nouveau tableau à partir d'un tableau existant
const noms = pieces.map(pieces => pieces.nom)
const prixA = pieces.map(pieces => pieces.prix)
//afficher les prix des pieces a cote du nom
//splice permet de supprimer des éléments d'un tableau
for(let i = pieces.length -1; i >= 0; i--){
	if(pieces[i].disponibilite === false){
		noms.splice(i, 1);
		prixA.splice(i, 1);
	}
}

const disponiblesElement = document.createElement('ul');

for (let i = 0; i < noms.length; i++) {
	const nomElement = document.createElement('li');
	nomElement.innerText = noms[i] + " - " + prixA[i] + "€";
	disponiblesElement.appendChild(nomElement);
}
const pElementDispponible = document.createElement('p');
pElementDispponible.innerText = "Pieces disponibles";
document.querySelector('.disponibles').appendChild(pElementDispponible).appendChild(disponiblesElement);




const inputPrixMax = document.querySelector("#prix-max");


inputPrixMax.addEventListener("input", function () {
	const piecesFiltrees = pieces.filter(function (piece) {
		return piece.prix <= inputPrixMax.value;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPieces(piecesFiltrees);
});