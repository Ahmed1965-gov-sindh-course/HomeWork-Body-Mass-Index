import inquirer from "inquirer";

console.log("\t\n\t******************** Welcome to BMI Calculator ****************\n\t")

let bodyMass = await inquirer.prompt(
    {
        type: "number",
        name: "body_mass",
        message: "Enter your weight in kgs.....",
    }  
)
let height = await inquirer.prompt(
    {
        type: "number",
        name: "body_height",
        message: "Enter your height in meters.....",
    }   
)
 console.log("\n\tYour Body Mass Index =" + " " + (bodyMass.body_mass)/(height.body_height*height.body_height))

