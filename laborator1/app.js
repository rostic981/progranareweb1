let sir;

function summ(sir) {
    let suma = 0;
    for (let i = 0; i < sir.length; i++) {
        suma = suma + sir[i]
    }
    return suma
}

function addElement(element) {
    var span = document.createElement("span");
    span.innerHTML = element + ' ';

    if (element % 2 == 0) {
        span.setAttribute("style", "color:green;");
    } else {
        span.setAttribute("style", "color:red;");
    }

    my_div = document.getElementById("list");
    document.body.insertBefore(span, my_div);
}


document.getElementById("init").addEventListener("click", () => {
    this.sir = []
    document.getElementById("result").value = this.sir.length;
});

document.getElementById("fill").addEventListener("click", () => {
    for (let i = 1; i <= 50; i++) {
        let num = Math.round(Math.random() * 102)
        addElement(num)
        this.sir.push(num);
    }
});

document.getElementById("min").addEventListener("click", () => {
    document.getElementById("result").value = Math.min(...this.sir);
});

document.getElementById("max").addEventListener("click", () => {
    document.getElementById("result").value = Math.max(...this.sir);
});

document.getElementById("sum").addEventListener("click", () => {
    document.getElementById("result").value = summ(this.sir)
});

document.getElementById("media").addEventListener("click", () => {
    document.getElementById("result").value = summ(this.sir) / this.sir.length
});

