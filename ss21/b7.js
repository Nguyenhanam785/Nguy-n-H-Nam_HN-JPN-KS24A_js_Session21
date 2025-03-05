let principal = Number(prompt("Nhập số tiền gửi ban đầu:"));
let monthlyRate = Number(prompt("Nhập lãi suất tháng (%):")) / 100;
let months = Number(prompt("Nhập số tháng gửi:"));

for (let i = 1; i <= months; i++) {
    principal += principal * monthlyRate;
}
console.log(`Số tiền nhận được sau ${months} tháng: ${principal.toFixed(2)}`);