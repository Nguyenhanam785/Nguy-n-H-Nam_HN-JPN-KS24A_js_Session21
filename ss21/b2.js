let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Nhập số nguyên thứ ${i}:`), 10);
    
    if (!isNaN(num)) {
        if (num % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++; 
        }
    } else {
        alert("Bạn đã nhập không phải số nguyên. Hãy thử lại!");
        i--; 
    }
}
console.log(`Số lượng số chẵn: ${evenCount}`);
console.log(`Số lượng số lẻ: ${oddCount}`);
alert(`Số lượng số chẵn: ${evenCount}\nSố lượng số lẻ: ${oddCount}`);
