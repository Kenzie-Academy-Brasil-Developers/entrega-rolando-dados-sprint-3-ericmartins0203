const diceRoll = function (){
    let max=7;
    let min=1;
    return Math.floor(Math.random()*(max-min)+min)
}

function rollTwice () {
    let count = []
    for (i=0; i<=10; i ++){
        count.push(0)
    }
    for (j=0; j<1000;j++){
        let Roll = diceRoll() + diceRoll()
        if (Roll == 2){count[0]++}
        if (Roll == 3){count[1]++}
        if (Roll == 4){count[2]++}
        if (Roll == 5){count[3]++}
        if (Roll == 6){count[4]++}
        if (Roll == 7){count[5]++}
        if (Roll == 8){count[6]++}
        if (Roll == 9){count[7]++}
        if (Roll == 10){count[8]++}
        if (Roll == 11){count[9]++}
        if (Roll == 12){count[10]++}
    }
    const estatistica = document.getElementById('estatistica')
    const place = document.getElementById('place')
    for (let m =2; m<=12;m++){
        let text=document.createElement("p")
        text.classList.add("text")
        text.textContent = m + " : " + count[m-2]
        estatistica.appendChild(text);

    
        let blocks = document.createElement("div");
        blocks.style.width= `${count[m-2]}px`;
        blocks.style.height=25 +"px";
        blocks.style.background = "gray";
        blocks.style.margin="1px";
        blocks.style.bottom.margin="30px";

        place.appendChild(blocks); 
    }

    console.log(count)
    return count

}
const rollTheDice = document.getElementById("rollTheDice")
rollTheDice.addEventListener("click",function(){
    rollTwice()
})

function resetAll() {
    const estatistica = document.getElementById('estatistica')
    const place = document.getElementById('place')
    estatistica.innerHTML=""
    place.innerHTML=""
}

const reset = document.getElementById("reset")
reset.addEventListener('click', function(){
    resetAll()
})





// let probabilidadeDois = count[0];
// let probabilidadeTres = count[1];
// let probabilidadeQuatro = count[2];
// let probabilidadeCinco = count[3];
// let probabilidadeSeis = count[4];
// let probabilidadeSete = count[5];
// let probabilidadeOito = count[6];
// let probabilidadeNove = count[7];
// let probabilidadeDez = count[8];
// let probabilidadeOnze = count[9];
// let probabilidadeDoze = count[10];

// const probabilidades = [probabilidadeDois + "%",
//     probabilidadeTres + "%",
//     probabilidadeQuatro + "%",
//     probabilidadeCinco + "%",
//     probabilidadeSeis + "%",
//     probabilidadeSete + "%",
//     probabilidadeOito + "%",
//     probabilidadeNove + "%",
//     probabilidadeDez + "%",
//     probabilidadeOnze + "%",
//     probabilidadeDoze + "%"
// ]
