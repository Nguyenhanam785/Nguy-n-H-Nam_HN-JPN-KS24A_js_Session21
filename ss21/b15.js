const giatien = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
const sotien = prompt("Nhập số tiền bạn muốn rút:");
let result = {};
let remaining = sotien;

if (remaining % 1000 !== 0) {
    console.log("Số tiền quá thấp không thể rút.");
} else {
    for (let i = 0; i < giatien.length; i++) {
        if (remaining >= giatien[i]) {
            let count = Math.floor(remaining / giatien[i]);
            result[giatien[i]] = count;
            remaining -= count * giatien[i];
        }
    }

    for (let denom in result) {
        console.log(`${parseInt(denom).toLocaleString()} - ${result[denom]} tờ`);
    }
}
