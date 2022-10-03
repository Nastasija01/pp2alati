module.exports = {
    arrayToString(a) {
        return a.join(" ");
    },

    arrayLog(a) {
        process.stdout.write(a);
        process.stdout.write("\n");
    },

    intToBin(n, p = 8) {
        if (n < 0) {
            n = Math.pow(2, p) + n;
        }

        return Math.abs(n).toString(2).padStart(p, "0");
    },

    binLog(n) {
        process.stdout.write(n);
        process.stdout.write("\n");
    }
};

