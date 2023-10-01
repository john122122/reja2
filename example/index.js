//                                                                  Module package CORE
// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("*******************");

// fs.writeFileSync("./input.txt", `${data} \n\t\t by Usman`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);

// *************************

// let number = 0;
// setInterval(function () {
//     console.log("hisob", number);
//     number++;
// }, 1000);

// *************************

// setTimeout(function () {
//     console.log("Ishga tushdi");
// }, 5000);

//                                                                  Module package EXTERNAL

// ************************

// const { v4: uuidv4 } = require("uuid");
// const random = uuidv4();
// console.log("random:", random);

// const chalk = require('chalk');
// const log = console.log;

// log(chalk.blue("Hello") + random + chalk.red("!"));

// ************************

// const inquirer = require("inquirer");
// inquirer 
//    .prompt([{ type: "input", name: "raqam", message: "raqam kiriting? " }])
//    .then((answer) => { 
//      console.log("Man kiritgan raqam qiymati: ", answer.raqam);
//    })
//    .catch((err) => console.log(err));

// *******************************

// const moment = require("moment");

// setInterval(() => {
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);


//                                                              Module package FILE
const Account = require("./account")
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("==============");

const myAccount = new Account("Usman", 200000, 975855884843);
myAccount.giveMeDetails();

// Ferrati 400000 USD
myAccount.withdrawMoney(1000000);
myAccount.makeDeposit(200000)
// *****************************

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija", natija);
// console.log("**************");

// const natija2 = calculate.qushish(59, 20);
// console.log("Natija", natija);
// console.log("**************");

// const natija3 = calculate.ayirish(44, 20);
// console.log("Natija", natija);
// console.log("**************");

