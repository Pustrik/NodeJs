"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let readlineSync = require('readline-sync');
var status;
(function (status) {
    status[status["ToDo"] = 1] = "ToDo";
    status[status["InProgress"] = 2] = "InProgress";
    status[status["QA"] = 3] = "QA";
    status[status["DONE"] = 4] = "DONE";
})(status || (status = {}));
class Project {
    constructor(project_name, start_date, end_date) {
        this.project_name = project_name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.developers = new Developers(project_name);
        this.pm = new PM(project_name);
        this.qa = new QA(project_name);
        this.business_analytics = new BusinessAnalytics(project_name);
    }
    addTask() {
        let i = readlineSync.question("1 - DevOps\n2 - QA\n3 - PM\n4 - Business Analytics\n");
        switch (i) {
            case "1":
                if (this.developers.dev_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.developers.dev_task.task = readlineSync.question("Введите таск: ");
                    this.developers.dev_task.status = status.ToDo;
                }
                break;
            case "2":
                if (this.qa.qa_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.qa.qa_task.task = readlineSync.question("Введите таск: ");
                    this.qa.qa_task.status = status.ToDo;
                }
                break;
            case "3":
                if (this.pm.pm_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.pm.pm_task.task = readlineSync.question("Введите таск: ");
                    this.pm.pm_task.status = status.ToDo;
                }
                break;
            case "4":
                if (this.business_analytics.business_analytics_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.business_analytics.business_analytics_task.task = readlineSync.question("Введите таск: ");
                    this.business_analytics.business_analytics_task.status = status.ToDo;
                }
                break;
            default:
                console.log("Ошибка");
        }
    }
    get info() {
        return this.project_name + " from " + this.start_date + " to " + this.end_date;
    }
}
class Developers {
    constructor(project_name) {
        this.frontend = new Array();
        this.backend = new Array();
        this.devops = new Array();
        this.working_on = project_name;
        this.dev_task = { task: "empty", status: status.DONE };
    }
    getProjName() {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("FrontEnd: ");
        for (let person of this.frontend)
            console.log(person.name + " " + person.suriname);
        console.log("BackEnd: ");
        for (let person of this.backend)
            console.log(person.name + " " + person.suriname);
        console.log("DevOps: ");
        for (let person of this.devops)
            console.log(person.name + " " + person.suriname);
    }
    addFrontend(name, suriname) {
        for (let person of this.frontend)
            if (person.name == name && person.suriname == suriname)
                return false;
        this.frontend.push({ name: name, suriname: suriname });
        return true;
    }
    addBackend(name, suriname) {
        for (let person of this.backend)
            if (person.name == name && person.suriname == suriname)
                return false;
        this.backend.push({ name: name, suriname: suriname });
        return true;
    }
    addDevops(name, suriname) {
        for (let person of this.devops)
            if (person.name == name && person.suriname == suriname)
                return false;
        this.devops.push({ name: name, suriname: suriname });
        return true;
    }
    addToState(name, suriname) {
        switch (readlineSync.question("1 - FrontEnd\n2 - BackEnd\n3 - DevOps")) {
            case (1):
                return this.addFrontend(name, suriname);
            case (2):
                return this.addBackend(name, suriname);
            case (3):
                return this.addDevops(name, suriname);
            default:
                return false;
        }
    }
    changeStatus() {
        let status = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if (status > 0 && status < 5)
            this.dev_task.status = status;
    }
    checkTask() {
        console.log("DevOps task:\n" + this.dev_task.task + "\n" + status[this.dev_task.status]);
    }
}
class PM {
    constructor(project_name) {
        this.working_on = project_name;
        this.pm_task = { task: "empty", status: status.DONE };
    }
    getProjName() {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("Project Managers: ");
        for (let person of this.pm)
            console.log(person.name + " " + person.suriname);
    }
    addToState(name, suriname) {
        for (let person of this.pm)
            if (person.name == name && person.suriname == suriname)
                return false;
        this.pm.push({ name: name, suriname: suriname });
        return true;
    }
    changeStatus() {
        let status = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if (status > 0 && status < 5)
            this.pm_task.status = status;
    }
    checkTask() {
        console.log("PM task:\n" + this.pm_task.task + "\n" + status[this.pm_task.status]);
    }
}
class QA {
    constructor(project_name) {
        this.qa = new Array();
        this.working_on = project_name;
        this.qa_task = { task: "empty", status: status.DONE };
    }
    getProjName() {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("QA: ");
        for (let person of this.qa)
            console.log(person.name + " " + person.suriname);
    }
    addToState(name, suriname) {
        for (let person of this.qa)
            if (person.name == name && person.suriname == suriname)
                return false;
        this.qa.push({ name: name, suriname: suriname });
        return true;
    }
    changeStatus() {
        let status = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if (status > 0 && status < 5)
            this.qa_task.status = status;
    }
    checkTask() {
        console.log("QA task:\n" + this.qa_task.task + "\n" + status[this.qa_task.status]);
    }
}
class BusinessAnalytics {
    constructor(project_name) {
        this.working_on = project_name;
        this.business_analytics_task = { task: "empty", status: status.DONE };
    }
    getProjName() {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("Business analytics: ");
        for (let person of this.business_analytics)
            console.log(person.name + " " + person.suriname);
    }
    addToState(name, suriname) {
        for (let person of this.business_analytics)
            if (person.name == name && person.suriname == suriname)
                return false;
        this.business_analytics.push({ name: name, suriname: suriname });
        return true;
    }
    changeStatus() {
        let status = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if (status > 0 && status < 5)
            this.business_analytics_task.status = status;
    }
    checkTask() {
        console.log("DevOps task:\n" + this.business_analytics_task.task + "\n" + status[this.business_analytics_task.status]);
    }
}
let firstProj = new Project("firstProject", "13.09.22", "22.09.22");
console.log(firstProj.info);
firstProj.qa.addToState("1q", "1q");
firstProj.developers.addDevops("1d", "1d");
firstProj.developers.addDevops("1d", "1d");
firstProj.developers.addDevops("2d", "2d");
firstProj.developers.getState();
firstProj.developers.checkTask();
firstProj.addTask();
firstProj.developers.checkTask();
firstProj.developers.changeStatus();
firstProj.developers.checkTask();
//# sourceMappingURL=task1.js.map