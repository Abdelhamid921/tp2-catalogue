const produits = [
  { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
  { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
  { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
  { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }
];
console.log(produits);

function estValide(produit) {
  return Number.isFinite(produit.prix) && Number.isFinite(produit.stock) &&
    produit.prix >= 0 && produit.stock >= 0;
}
console.log("Données valides :", produits.every(estValide));

produits.forEach((p) => console.log(`${p.nom} : ${p.prix} MAD`));

function disponibles(liste) {
  return liste.filter((p) => p.stock > 0);
}
const dispo = disponibles(produits);
console.log("Produits disponibles :", dispo.length);

function valeurStock(liste) {
  return liste.reduce((total, p) => total + p.prix * p.stock, 0);
}
console.log("Valeur du stock :", valeurStock(produits), "MAD");

function moinsCher(liste) {
  if (liste.length === 0) return null;
  return liste.reduce((min, p) => (p.prix < min.prix ? p : min));
}
const mc = moinsCher(dispo);
if (mc === null) {
  console.log("Aucun produit disponible");
} else {
  const { nom, prix } = mc;
  console.log("Produit le moins cher est la", nom, ":", prix, "MAD");
}

const resume = produits.map((p) => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
resume.forEach((l) => console.log(l));

console.log("Écran dans disponibles", dispo.some((p) => p.nom === "Écran"));
const stocksZero = produits.map((p) => ({ ...p, stock: 0 }));
console.log("Tous stocks à 0 -> disponibles :", disponibles(stocksZero).length);
const m0 = moinsCher(disponibles(stocksZero));
console.log(m0 === null ? "Aucun produit disponible" : m0.nom);
console.log("Catalogue vide -> valeur :", valeurStock([]));