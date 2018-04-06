//array"da olan ededlerin hasili
var point = document.querySelector("#MAIN");
var points = [];
var submit = document.querySelector("#Main");

submit.onclick = function () {
    var pointValue = point.value;
    points.push(pointValue);
    console.log(points);
    text = 1;
    var i;
    for (i = 0; i < points.length; i++) {
        text *= points[i]
    }
    document.getElementById("hasil").innerHTML = "Hasil"+" "+"="+" " + text;
    document.querySelector("#ARRAY").innerHTML = "["+" " + points.join(" * ") + " " + "]";
    
}

// SON




//array"da olan ededlerin kvadratinin cemini tapmaq

var eded = document.querySelector("#KVADRAT");
var ededler = [];
var submit = document.querySelector("#Kvadrat");

submit.onclick = function () {
    var ededValue = eded.value;
    ededler.push(ededValue);
    console.log(ededler);

    Sum = 0;
    var i;
    for (i = 0; i < ededler.length; i++) {
        Sum += ededler[i] * ededler[i]
    }
    document.getElementById("cem").innerHTML = "hasil" + " " + "=" + " " + Sum;
    document.querySelector("#kvad").innerHTML = "["+" " + ededler.join(" * ") + " " + "]";
    

}
// SON




//array"da olan cut reqemlerin cemi
var count = document.querySelector("#CUT");
var counts = [];
var submit = document.querySelector("#Cut");
submit.onclick = function () {
    var countValue = count.value;
    counts.push(countValue);
    console.log(counts);
    var tex ;
    var i;
    for (tex = 0,i = 0; i < counts.length; i++) {
        if (counts[i] % 2 == 0) {

            tex += Number(counts[i]);
            document.getElementById("text").innerHTML = "Cem" + " " + "=" + " " + tex;            
        }
    }
    document.querySelector("#cutcem").innerHTML = "["+" " + counts.join(" * ") + " " + "]";
    
};


// document.getElementById("cut").innerHTML = text;

//vurma cedveli

var result = document.querySelector("#cedvel");
var reqem = document.querySelector("#vurma");
var submitButton = document.querySelector("#submit");

submitButton.onclick = function () {
    var reqemValue = reqem.value;
    var yekun;
    for (i = 1; i <= 10; i++) {
        yekun = i + " "+"*"+" " + reqemValue + " " + "=" + " " + i * reqemValue
        document.getElementById("cedvel").innerHTML += "<br>" + yekun;
    }

};


// array.a elave olunacaq reqemler   [reqemlerden boyuyunun yoxlanilmasinda yalnisliq var.]

var digit = document.querySelector("#array");
var digits = [];
var submit = document.querySelector("#click");

submit.onclick = function () {
    var digitValue = digit.value;
    digits.push(digitValue);
    console.log(digits);


    for (var len = digits.length, n = 0; n < len; n++) {
        if (digits[n] < digits[n + 1]) {
            document.querySelector("#biggest").innerHTML = digits[n + 1];
        } else {
            document.querySelector("#Array").innerHTML = "["+" " + digits.join(" * ") + " " + "]";
        }
    }
};

// SON






/*cehd etdim ancaq alinmadi
// for (var len = digits.length; n < len; n++) {
//     if (digits[n] > digits[n + 1]) {
//         document.querySelector("#biggest").innerHTML = digits[n];
//         // console.log(digits[n])
//     } else {
//         // console.log(digits[n+1])
//         document.querySelector("#biggest").innerHTML = digits[n+1];
//         document.querySelector("#Array").innerHTML = digits.join(" * ");
//     }
// };
*/
