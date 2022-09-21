let n = 7;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j < i; j++) {
        str = str + " ";
    }
    for (let k = i; k <= n; k++) {
        str = str + k + " ";
    }
    console.log(str);
}
let counter = n;
for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = i; j < n; j++) {
        if (i > 1) {
            str = str + " ";
        }
    }
    for (let k = counter; k <= n; k++) {
        if (i > 1) {
            str = str + k + " ";
        }
    }
    counter--;
    if (i > 1) {
        console.log(str);
    }
}