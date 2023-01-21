Array.prototype.myReduce = function(fn, init) {
    let curr = init ? fn(init, this[0]) : this[0];
    for (let i=1; i<this.length; i++) {
        curr = fn(curr, this[i]);
    }
    return curr;
}

function run() {
    let arr = document.getElementById("arr").value;
    arr = (typeof(arr) === typeof("") && arr.length > 0) ? arr : "0";
    arr = arr.split(",").map(n => parseInt(n));
    let reduce = document.getElementById("fn").value;
    let fn = (n1, n2) => n1 + n2;
    if (reduce === "subtract") {
        fn = (n1, n2) => n1 - n2;
    } else if (reduce === "multiply") {
        fn = (n1, n2) => n1 * n2;
    }
    alert( arr.myReduce(fn) );
}

function init() {
    let btn = document.getElementById("btn");
    btn.onclick = run;
}

init();