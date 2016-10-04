/**
 * Created by Ruslan on 16.06.16.
 */


function pow(x, n) {
    var result = x;
    const power = n;
    while (n > 1) {
        n = --n;
        result *= x;
    }
    console.log(x + " in power " + power + " = " + result);
    return result;
}
pow(2, 3);


function sumTo1(n) {
    var result = n;
    var i = n;
    while (i > 1) {
        result = result + --i;
        console.log("Cycle step " + result);
    }
    console.log("Arithmetic sum of " + n + " is " + result);
    return result;
}
//sumTo1(5);

function sumTo2(n) {
    var result = n;
    for (var i = 1; i < n; i++) {
        result += i;
        console.log("Cycle step " + result);
    }
    console.log("Arithmetic sum of " + n + " is " + result);
    return result;
}
//sumTo2(5);

function sumTo3(n) {
    var result = 0;
    for (var i = n; i > 0; --i) {
        result = result + i;
        //console.log("Cycle step " + result);
    }
    console.log("Arithmetic sum of " + n + " is " + result);
    return result;
}
sumTo3(5);

function sumTo4(n) {
    if (n != 1) {
        return n + sumTo4(n - 1);
    } else {
        return n;
    }
}
//console.log(sumTo4(6));

function sumTo5(n) {
    return n * (n + 1) / 2;
}
//console.log(sumTo5(5));

function factorial(n) {
    if (n != 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}
//console.log("Factorial " + factorial(5));

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}
//console.log("Fibonachi " + fib(5));


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}


$( document ).ready(function() {
    var array = [];
    for ( var i = 0; i <= 50; i++){
        var randomValue = randomInteger(0, 100);
        array.push(randomValue);
        var arrayLength = array.length;
        console.log( randomValue );
        console.log( array );
        console.log( "Array length: " + arrayLength );
        console.log( "Last value of array:  " + array[arrayLength - 1] );
        $(".graph").append("<div class='point' style='top:" + (randomValue - 1) + "px; left:" + (i * 20 - 1) + "px;'>" + "</div>");
        $(".graph").append("<svg height='100' width='1000'>" +
            "<line x1='" + (i * 20 - 20) + "' y1='" + array[arrayLength - 2] + "' x2='" + (i * 20) + "' y2='" + array[arrayLength - 1] + "' style='stroke:rgb(255,0,0);stroke-width:1' />" +
            "</svg>");
    }
    var result = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    console.log( result/51 );
});