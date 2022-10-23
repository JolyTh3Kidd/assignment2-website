const firstnews = "Trump, Reacting to Pending Jan. 6<br>Subpoena, Repeats Election Lies in Letter";
const secondnews = "Nvidia RTX 4090 Founders Edition";
const thirdnews = "Children’s and teens roundup<br>the best new picture books and novels";
document.getElementById("firstnews").innerHTML = firstnews.toUpperCase().slice(37);
document.getElementById("secondnews").innerHTML = secondnews.toUpperCase();
document.getElementById("thirdnews").innerHTML = thirdnews.toUpperCase();

arr = ["POLITICS", "TECH", "BOOKS"];
document.getElementById("politics").innerHTML = arr[0].toLowerCase();
document.getElementById("tech").innerHTML = arr[1].toLowerCase();
document.getElementById("books").innerHTML = arr[2].toLowerCase();

let f = '';
for (let i = 1; i < 4; i++) {
    f = f + i;
}
console.log("Count of news "+f);

function whilealert() {
    var b = 0;
    while (b < 3) {
        b++;
    }
    alert(b);
}

let length1 = firstnews.length;
let length2 = secondnews.length;
let length3 = thirdnews.length;
document.getElementById("length1").innerHTML = length1;
document.getElementById("length2").innerHTML = length2;
document.getElementById("length3").innerHTML = length3;