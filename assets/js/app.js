
let numMin = 1
let numMax = 10
let nbAttempt = 3

const choice = 10

const numMystere = Math.floor(Math.random()* numMax + numMin)

for(i=1; i<nbAttempt; i++ ){
    if(choice === numMystere){
        console.log("gagne")
    } else {
        console.log("perdu" + "le numero etait"+numMystere)
    }
}

