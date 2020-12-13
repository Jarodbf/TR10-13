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
    roulette.push(roul);
    document.getElementById("elAffichage").innerText = ("L'élément " + roulette[compteurEl].name + " a bien été ajoutée avec la position " + roulette[compteurEl].pos + ".")
    compteurEl++;
    return false;
}

/**
 * Permet d'afficher les element true du tableu d'objet roul.
 * Une valeur va être
 */
function affiche()
{
    let temp = "";// valeur de transition pour y prendre tout le text.
    if(roulette.length === 0)
    {
        document.getElementById("elAffichage").innerText = "\nAucun élément actuellement.";
    }
    else {
        for(let i in roulette)
        {
            if(roulette[i].value) {
                //document.getElementById("elAffichage").innerText += ("\nCode: " + roulette[i].pos + " Nom: " + roulette[i].name);
                temp += ("\nCode: " + roulette[i].pos + " Nom: " + roulette[i].name);
            }
        }
        document.getElementById("elAffichage").innerText = temp;
    }
}

/**
 * Remplacement l'élément selectionner avec l'id par false si l'élément existe et qu'il n'est pas déja false.
 * @param formulaire
 * @returns {boolean}
 */
function supp(formulaire)
{
    let poss = roulette.length -1;
    let suppTemp = (formulaire.suppV.value);
    if((poss< formulaire.suppV.value) || (poss > formulaire.suppV.value) || (roulette[suppTemp] === undefined))
    {
        document.getElementById("elAffichage").innerText = "\nAucun élément actuellement.";
        return false;
    }
    else {
            if(roulette[suppTemp].value)
            {
                roulette[suppTemp].value = false;
                document.getElementById("elAffichage").innerText = ("L'élément " + roulette[suppTemp].name + " a bien été supprimé à la position " + roulette[suppTemp].pos + ".");
                return false;
            }
            else
            {
                document.getElementById("elAffichage").innerText = ("L'élément " + roulette[suppTemp].name + " a déjà été supprimé à la position " + roulette[suppTemp].pos + ".");
                return false;
            }
        }
}
