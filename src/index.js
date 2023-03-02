import './style.css';
    
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

let array = ['c', 'c', 'c-plus-plus', 'c-plus-plus', 'css', 'css', 'html', 'html', 'java', 'java', 'js', 'js', 'php', 'php', 'python', 'python'];
shuffle(array);

for (let i = 0; i < 16; i++) {
    let img = document.getElementById("img" + i);
    img.src = "../memory/images/" + array[i] + "-logo.png";
    img.alt = array[i];
    let carte = document.getElementById("carte" + i);
    carte.dataset.type = array[i];
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let etat = 0;
let score = 0;
let nbTry = 0;
async function reveler(dataType) {
    switch(etat) {
        case 0 :
            let carte1 = dataType.getAttribute("data-type");
            let id1 = dataType.id;
            let element1 = document.getElementById(id1);
            element1.style.setProperty('--clickTranslate','-100%');
            element1.removeAttribute("onclick");
            etat = 1;
            break;
        case 1 :
            let carte2 = dataType.getAttribute("data-type");
            let id2 = dataType.id;
            let element2 = document.getElementById(id2);
            element2.style.setProperty('--clickTranslate','-100%');
            if (carte1 == carte2) {
                element1.removeAttribute("onclick");
                element2.removeAttribute("onclick");
                score++;
            } else {
                let barriere = document.getElementById('barriere');
                barriere.classList.add("barriere-active");
                await delay(1000);
                element1.setAttribute('onClick','reveler(this)');
                barriere.classList.remove("barriere-active");
                element1.style.setProperty('--clickTranslate','0');
                element2.style.setProperty('--clickTranslate','0');
            }
            nbTry++,
            document.getElementById("nbtry").innerHTML = "Nombre d'essais : " + nbTry;
            etat = 0;
            break;
    }

    if (score == 8) {
        await delay(1500);
        alert("Gagné !");
    }
}