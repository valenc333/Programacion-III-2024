function funA(){
    console.log(1);
    funB();
    console.log(2);
}

function funB(){
    console.log(3);
    funC();
    console.log(4);
}

function funC(){
    console.log(5);
}

// Consola:
// 1, 3, 5, 4, 2