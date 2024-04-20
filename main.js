#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: `from`,
        message: "Select Currency to Convert From",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: `to`,
        message: "Select Currency to Convert To",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: `amount`,
        message: "Enter Your Amount",
        type: "number",
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// Round convertedAmount to 2 decimal places
convertedAmount = Number(convertedAmount.toFixed(2));
console.log(`All Set! Your Exchange Amount is ${convertedAmount}`);
