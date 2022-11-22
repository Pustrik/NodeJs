import readline from "readline-sync";

import("./chedule.js").then(module => module.getSchedule(readline.question("Введите номер дня 1-7: \n"))).catch(() => console.log("Не существует расписания, каникулы же"))
