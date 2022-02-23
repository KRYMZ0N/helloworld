var hello : string = "Hello, World!";

async: {
    var i : number = 1;
    var msg : string = "I love this call"; // Testing variables with types, and also async await stuff

    while (i < 10) {
        await: {
            console.log(msg);
        }
        i++;
    }
}

console.log(hello);