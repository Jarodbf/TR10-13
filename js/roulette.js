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
 * Permet d'afficher les elements true du tableu d'objet roul.
 * et affiche dans la DOM le résultat
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
 * Permet d'afficher les elements true du tableu d'objet roul.
 * utilise un tableau intémédiaire pour l'ordre alphabétique.
 * et affiche dans la DOM le résultat.
 */
function afficheAlph()
{
    let temp = "";// valeur de transition pour y prendre tout le text.
    let alph = [];//Tableau qui va contenire le .sort.
    if(roulette.length === 0)
    {
        document.getElementById("elAffichage").innerText = "\nAucun élément actuellement.";
    }
    else {
        for(let i in roulette)
        {
            if(roulette[i].value) {
                alph.push([roulette[i].name,roulette[i].pos]);// créé le tableau de tableau
            }
        }
        alph.sort();//range par ordre alphaétique
        for(let i in alph)
        {
                temp += ("\nCode: " + alph[i][1] + " Nom: " + alph[i][0]);//position 1 tableau nom position 0 tableau de position.
        }
        document.getElementById("elAffichage").innerText = temp;
    }
}
/**
 * Remplacement l'élément selectionner avec l'id par false si l'élément existe et qu'il n'est pas déja false.
 * suppV est la valeur de position donner par l'utilisateur.
 * @param formulaire
 * @returns {boolean}
 */
function supp(formulaire)
{
        let poss = roulette.length -1;
        let suppTemp = (formulaire.suppV.value);
        if(( formulaire.suppV.value < 0) || (poss < formulaire.suppV.value) || (roulette[suppTemp] === undefined))
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
    //}

}

/**
 * prend un nombre aléatoir avec un math floor dans les bornes du .lenght
 * si la valeur a ça value false affiche un message.
 */
function roul()
{
    if(roulette.length === 0)
    {
        document.getElementById("roulAffichage").innerText = "\nAucun élément actuellement.";
    }
    else {
        let aleaRoul = Math.floor(Math.random()*roulette.length);//nombre aléatoire
        if (roulette[aleaRoul].value)//test si value est === true
        {
            document.getElementById("roulAffichage").innerText = ("Code: " + roulette[aleaRoul].pos + "\nNom: " + roulette[aleaRoul].name);
        }
        else//message si false
        {
            document.getElementById("roulAffichage").innerText = "Vous êtes tomber sur un élément suprimer, retentez votre chance !";
        }

    }
}
