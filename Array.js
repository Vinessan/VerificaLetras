//ATIVIDADE 1//feito 
var arr = [5, 9, 3];
var arr2 = [];
arr.forEach(function (elemento) {
    arr2.push(elemento * elemento)
    for (let prop in elemento) {
        if (typeof (elemento[prop]) != 'number') {
            alert("ERRO! Letra encontrada!")
        }

    }

});

console.log(arr2);





//ATIVIDADE 2//feito 
var arr = [1, 2, 3, 4, 5];
var arr2 = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        arr2.push(arr[i])
        if (typeof (arr[i]) != 'number') {
            alert("ERRO! Letra encontrada!")
        }
    }
}
console.log(arr2);





//ATIVIDADE 3 //feito
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [];
arr.reverse(function (elemento) {
    arr2.push(elemento)
});

console.log(arr);





//ATIVIDADE 4//feito
var arr = [4, 2, 5, 1, 3, 10, 15, 20];
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);





//ATIVIDADE 5//feito
var arr = [4, 2, 5, 1, 3, 10, 15, 20];
arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);