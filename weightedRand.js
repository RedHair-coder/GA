function weightedRand(spec) {
    var i, j, table = [];
    for (i in spec) {
        // The constant 10 below should be computed based on the
        // weights in the spec for a correct and optimal table size.
        // E.g. the spec {0:0.999, 1:0.001} will break this impl.
        for (j = 0; j < spec[i] * 10; j++) {
            table.push(i);
        }
    }
    return function () {
        return table[Math.floor(Math.random() * table.length)];
    }
}

const coef = 100;
a = {};
for (let i = 0; i < coef; i++) {
    a[i] = 3 ** i
}
calc = weightedRand(a);
x = new Array(100).fill(null).map(() => {
    const val = calc();
    return {
        original: val,
        reverse: coef - val,
    }
}).sort((a, b) => (a.reverse - b.reverse));
console.log("x::", x);