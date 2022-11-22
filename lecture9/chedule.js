let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",  "все"];
let schedule = {
    0: {
        1: "Java",
        2: "C++"
    },
    1: {
        1: "Sleep",
        2: "Sleep"
    },
    2: {
        1: "JavaScript",
        2: "C"
    },
    3: {
        1: "NodeJS",
        2: "Sleep"
    },
    4: {
        1: "Math",
        2: "History"
    },
    5: {
        1: "Free",
        2: "Free"
    },
    6: {
        1: "Free",
        2: "Free"
    }
};
export function getSchedule(day) {
    console.log(days[day-1] + "=>");
    for(let [key1, item1] of Object.entries(schedule[day-1]))
        console.log("- " + item1);
}