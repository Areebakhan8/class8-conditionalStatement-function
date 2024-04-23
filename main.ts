import chalk from "chalk"
console.log(chalk.magentaBright.bold("CLASS-8"))

console.log(chalk.bgCyan.bold("Conditional Statement"));

let weather:string="sunny"

if (weather == "Cloudy"){
    console.log(chalk.yellow.bold("Going For LongDrive"))
}
else if(weather == "Rainy"){
    console.log(chalk.yellow.bold("GO To Cafe"))
}
else if (weather == "sunny"){
    console.log(chalk.yellowBright.bold("Go To SeaSide"))
}
else
console.log(chalk.yellow.bold("MOOD 0FF"))

console.log(chalk.bgCyan.bold("Function"))

function nizamCooked(){
let cooked:string="Biryani"
console.log(chalk.yellow.bold(cooked))
}
nizamCooked()

console.log(chalk.bgCyan.bold("Function With if-else"))

let age:number = 18
function nadraOffice() {
    if (age >= 18){
        console.log(chalk.yellow.bold("Eligible For I.D Card"))
    }
    else if(age < 18){
        console.log(chalk.yellow.bold("Eligible For I.D Card"))
    }
    else console.log(chalk.yellow.bold("Eligible For Beform"))
}
nadraOffice()

