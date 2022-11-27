let readlineSync = require('readline-sync');

enum status {
    ToDo= 1,
    InProgress,
    QA,
    DONE
}

class Project {
    protected project_name: string;
    protected start_date: string;
    protected end_date: string;
    declare developers: Developers;
    declare pm: PM;
    declare qa: QA;
    declare business_analytics: BusinessAnalytics;
    constructor(project_name: string, start_date: string, end_date: string) {
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
                if(this.developers.dev_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.developers.dev_task.task = readlineSync.question("Введите таск: ");
                    this.developers.dev_task.status = status.ToDo;
                }
                break;
            case "2":
                if(this.qa.qa_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.qa.qa_task.task = readlineSync.question("Введите таск: ");
                    this.qa.qa_task.status = status.ToDo;
                }
                break;
            case "3":
                if(this.pm.pm_task.status != status.DONE)
                    console.log("Таск не завершен");
                else {
                    this.pm.pm_task.task = readlineSync.question("Введите таск: ");
                    this.pm.pm_task.status = status.ToDo;
                }
                break;
            case "4":
                if(this.business_analytics.business_analytics_task.status != status.DONE)
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

interface Employee {
    name: string;
    suriname: string;
}

interface State {
    working_on: string;
    getProjName(): string;
    getState(): void;
    addToState(name: string, suriname: string): boolean;
    changeStatus(): void;
    checkTask(): void;
}

interface Task {
    task: string;
    status: status;
}

class Developers implements State{
    working_on: string;
    dev_task: Task;
    frontend: Array<Employee> = new Array<Employee>();
    backend: Array<Employee> = new Array<Employee>();
    devops: Array<Employee> = new Array<Employee>();
    constructor(project_name: string) {
        this.working_on = project_name;
        this.dev_task = {task: "empty", status: status.DONE};
    }
    getProjName(): string {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("FrontEnd: ");
        for(let person of this.frontend)
            console.log(person.name + " " + person.suriname);
        console.log("BackEnd: ");
        for(let person of this.backend)
            console.log(person.name + " " + person.suriname);
        console.log("DevOps: ");
        for(let person of this.devops)
            console.log(person.name + " " + person.suriname);
    }
    addFrontend(name: string, suriname: string): boolean {
        for(let person of this.frontend)
            if(person.name == name && person.suriname == suriname)
                return false;
        this.frontend.push({name: name, suriname: suriname});
        return true;
    }
    addBackend(name: string, suriname: string): boolean {
        for(let person of this.backend)
            if(person.name == name && person.suriname == suriname)
                return false;
        this.backend.push({name: name, suriname: suriname});
        return true;
    }
    addDevops(name: string, suriname: string): boolean {
        for(let person of this.devops)
            if(person.name == name && person.suriname == suriname)
                return false;
        this.devops.push({name: name, suriname: suriname});
        return true;
    }
    addToState(name: string, suriname: string): boolean {
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
        let status: number = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if(status > 0 && status < 5)
            this.dev_task.status = status;
    }
    checkTask() {
        console.log("DevOps task:\n" + this.dev_task.task + "\n" + status[this.dev_task.status]);
    }
}

class PM implements State{
    working_on: string;
    pm_task: Task;
    declare pm: Array<Employee>;
    constructor(project_name: string) {
        this.working_on = project_name;
        this.pm_task = {task: "empty", status: status.DONE};

    }
    getProjName(): string {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("Project Managers: ");
        for(let person of this.pm)
            console.log(person.name + " " + person.suriname);
    }
    addToState(name: string, suriname: string): boolean {
        for(let person of this.pm)
            if(person.name == name && person.suriname == suriname)
                return false;
        this.pm.push({name: name, suriname: suriname});
        return true;
    }
    changeStatus() {
        let status: number = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if(status > 0 && status < 5)
            this.pm_task.status = status;
    }
    checkTask() {
        console.log("PM task:\n" + this.pm_task.task + "\n" + status[this.pm_task.status]);
    }
}

class QA implements State{
    working_on: string;
    qa_task: Task;
    qa: Array<Employee> = new Array<Employee>();
    constructor(project_name: string) {
        this.working_on = project_name;
        this.qa_task = {task: "empty", status: status.DONE};
    }
    getProjName(): string {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("QA: ");
        for(let person of this.qa)
            console.log(person.name + " " + person.suriname);
    }
    addToState(name: string, suriname: string): boolean {
        for(let person of this.qa)
            if(person.name == name && person.suriname == suriname)
                return false;
        this.qa.push({name: name, suriname: suriname});
        return true;
    }
    changeStatus() {
        let status: number = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if(status > 0 && status < 5)
            this.qa_task.status = status;
    }
    checkTask() {
        console.log("QA task:\n" + this.qa_task.task + "\n" + status[this.qa_task.status]);
    }
}

class BusinessAnalytics implements State{
    working_on: string;
    business_analytics_task: Task;
    declare business_analytics: Array<Employee>;
    constructor(project_name: string) {
        this.working_on = project_name;
        this.business_analytics_task = {task: "empty", status: status.DONE};
    }
    getProjName(): string {
        return this.working_on;
    }
    getState() {
        console.log(this.getProjName());
        console.log("Business analytics: ");
        for(let person of this.business_analytics)
            console.log(person.name + " " + person.suriname);
    }
    addToState(name: string, suriname: string): boolean {
        for(let person of this.business_analytics)
            if(person.name == name && person.suriname == suriname)
                return false;
        this.business_analytics.push({name: name, suriname: suriname});
        return true;
    }
    changeStatus() {
        let status: number = readlineSync.question("1 - To Do\n2 - In Progress\n3 - QA\n4 - DONE");
        if(status > 0 && status < 5)
            this.business_analytics_task.status = status;
    }
    checkTask() {
        console.log("DevOps task:\n" + this.business_analytics_task.task + "\n" + status[this.business_analytics_task.status]);
    }
}
let firstProj: Project = new Project("firstProject", "13.09.22", "22.09.22");
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
