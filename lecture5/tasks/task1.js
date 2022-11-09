function isEmpty(obj) {
    for(let key in obj)
        return false;
    return true;
}

function isEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function crossPoint(obj1, obj2) {
    for(let key1 in obj1) {
        for(let key2 in obj2) {
            if(typeof(obj1[key1]) == "object" && typeof(obj2[key2]) == "object")
                if (isEqual(obj1[key1], obj2[key2]))
                    return key1 + ": " + JSON.stringify(obj1[key1]);
            else if(typeof(obj1[key1]) == "object" || typeof(obj2[key2]) == "object")
                continue;
            if(obj1[key1] === obj2[key2] && key1 === key2)
                return key1 + ": " + obj1[key1];
        }
    }
    return false;
}

function findByKey(obj, my_key) {
    let item;
    for(let [key, val] of Object.entries(obj)) {
        if(key === my_key)
            return val;
        if (typeof val === "object")
            item = findByKey(val, my_key);
    }
    if(typeof item != "undefined")
        return item;
    return false;
}

let user1 = {
    name: "dima",
    age: 20,
    g: {
        p: 1
    }
};

let user2 = {
    name: "dima",
    age: 20,
    g: {
        p: 1,
        u: 0,
        n: {
            m: 2,
            j: {
                l: 6
            }
        }
    },
    t: 11
};


console.log("is empty: " + isEmpty(user2));
console.log("is equal: " + isEqual(user1, user2));
console.log("cross point: " + crossPoint(user1, user2));
console.log("find by key l: " + findByKey(user2, "l"));
