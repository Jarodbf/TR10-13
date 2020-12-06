"use strict";
let roulette = [];
let compteurEl = 0;

/**
 * ajoute une tache dans l'objet roul par un tableau intermédiaire
 * @param formulaire//passe le formulaire qu'il va modifier
 * @returns {boolean}//pour bien jouer la fonction
 */
function ajouterEl(formulaire)
{
    let roul = {
        pos:"",
        name:"",
        value: false,
    };
    roul.pos = compteurEl;
    roul.name = (formulaire.nom.value);
    roul.value = true;
    /*tache.push(formulaire.limite.value);
    tache.push(formulaire.importance.value);
    tache.push(Number(formulaire.duree.value));
    tache.push(formulaire.description.value);
    tache.push(true);
    taches.push(tache);*/
    roulette.push(roul);
    document.getElementById("elAffichage").innerText = ("L'élément " + roulette[compteurEl].name + " a bien été ajoutée avec la position " + roulette[compteurEl].pos + ".")
    compteurEl++;
    return false;
}

function affiche()
{
    if(roulette.length === 0)
    {
        document.getElementById("elAffichage").innerText = "\nAucun élément actuellement.";
    }
    else {
        for(let i in roulette)
        {
            if(roulette[i].value) {
                document.getElementById("elAffichage").innerText += ("\nCode: " + roulette[i].pos + " Nom: " + roulette[i].name);
            }
        }
    }
}
function supp(formulaire)
{
    if(roulette.length === 0)
    {
        document.getElementById("elAffichage").innerText = "\nAucun élément actuellement.";
    }
    else {
        let suppTemp = (formulaire.suppV.value);
        if((roulette[suppTemp].value) || (roulette[suppTemp].value !== undefined)) {
            roulette[suppTemp].value = false;
            document.getElementById("elAffichage").innerText = ("L'élément " + roulette[suppTemp].name + " a bien été supprimé à la position " + roulette[suppTemp].pos + ".")
            return false;
        }
        else{
            document.getElementById("elAffichage").innerText = "\nAucun élément actuellement.";
        }
    }

}
