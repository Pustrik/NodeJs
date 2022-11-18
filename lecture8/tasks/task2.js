const readline = require('readline-sync');

let customers = [
    {
        id: 1,
        login: "first",
        password: "1111"
    },
    {
        id: 2,
        login: "second",
        password: "2222"
    }
];

let goods = [
    {
        id: 1,
        title: "apple",
        price: 20
    },
    {
        id: 2,
        title: "banana",
        price: 35
    },
    {
        id: 3,
        title: "dog",
        price: 300
    },
    {
        id: 4,
        title: "orange",
        price: 30
    }
];
function isCustomerExist(login) {
    if(customers.findIndex(item => item.login == login) != -1)
        return customers.findIndex(item => item.login == login);
    return false;
}

function isGoodExist(id) {
    if(goods.findIndex(item => item.id == id) != -1)
        return goods.findIndex(item => item.id == id);
    return -1;
}

async function registration(login, password) {
    if(isCustomerExist(login))
        return new Error("Such customer exists!");
    customers.push({
        id: customers.length + 1,
        login: login,
        password: password
    });
    return customers[customers.length - 1];
}
async function login(login, password) {
    if(!isCustomerExist(login))
        throw new Error("Wrong login or password!");
    if(customers[isCustomerExist(login)].password == password)
        return customers[customers.findIndex(item => item.login == login)];

}


async function inShop(customerEnter, callback) {
    let customer;
    try{
        customer = await customerEnter(readline.question("Enter login: \n"), readline.question("Enter password: \n"));
        console.clear();
        callback(customer);
    } catch (err) {
        console.log(err);
    }
    return customer;
}

function assortment() {
    for(let good of goods) {
        console.log(good.id + ": " + good.title + " - " + good.price + "$");
    }
    console.log("\ns: show basket");
}

function addGood(id, amount, basket) {
    if(isGoodExist(id) == -1)
        throw new Error("Wrong id!");
    if(id in basket)
        basket[id] += Number(amount);
    else
        basket[id] = Number(amount);
    return basket;
}

function showBasket(basket) {
    let total = 0;
    for(let good in basket) {
        console.log(goods[goods.findIndex(item => item.id == good)].title + " x " + basket[good] );
        total += goods[goods.findIndex(item => item.id == good)].price * Number(basket[good]);
    }
    console.log("Total: " + total + "$")
    return total;
}

function menu(basket, callback) {
    console.clear();
    let total = showBasket(basket);
    console.log("\nb: buy");
    console.log("c: clear");
    console.log("q: quite");
    let choice = readline.question("Youre choice: ");
    switch (choice) {
        case "b":
            callback(total);
            console.log("Success! Goodbye!");
            return false;
        case "c":
            for(let item in basket)
                delete basket[item];
            console.log("Cleared!");
            break;
        case "q":
            break;
        default:
            throw new Error("Wrong value!");
    }
    return true;
}

async function session() {
    let choice;
    let customer_data;
    let basket = new Object();
    while(typeof customer_data == "undefined") {
        choice = readline.question("1 - Registration\n2 - LogIn\nYoure choice: \n");
        console.clear();
        switch (choice) {
            case "1":
                customer_data = await inShop(registration, user => console.log("Success registration, " + user.login + "\n"));
                break;
            case "2":
                customer_data = await inShop(login, user => console.log("Success login, " + user.login + "\n"));
                break;
            default:
                console.log("Wrong value!");
        }
    }

    while(1){
        try {
            console.log("Hello, " + customer_data.login + "!");
            assortment();
            choice = readline.question("Youre choice: ");
            if(choice == "s") {
                if(!menu(basket, total => console.log("Youre check for " + total + "& has been sent on ur Email!")))
                    break;
            }
            else
                basket = addGood(choice, readline.question("How many?: \n"), basket);
            console.clear();
        } catch (err) {
            console.log(err);
        }
    }
}

session();