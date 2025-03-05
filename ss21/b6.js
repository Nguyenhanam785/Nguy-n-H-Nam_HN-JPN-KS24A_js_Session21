let number = Number(prompt("Nhập vào một số nguyên bất kỳ:"));
for (let i = 1; i <=number; i++) {
    if (number % i === 0) {
        console.log(`Ước của số là: ${i}`);
        console.log(`Ước của số là: ${-i}`);
    }
}