let so = Number(prompt("Nhập vào một số nguyên bất kỳ:"));
let laSoNguyenTo = so > 1;

for (let i = 2; i <= Math.sqrt(so); i++) {
    if (so % i === 0) {
        laSoNguyenTo = false;
        break;
    }
}

if (laSoNguyenTo) {
    console.log(`${so} là số nguyên tố.`);
} else {
    console.log(`${so} không phải là số nguyên tố.`);
}