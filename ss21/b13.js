let n = 8;
let output = "<pre>";
for (let i = 0; i < n; i++) {
    let a = "*".repeat(n - i).padEnd(n, ' ');

    let b = "*".repeat(i + 1).padEnd(n, ' ');

    let c = " ".repeat(n - i - 1) + "*".repeat(i + 1);

    let d = " ".repeat(i) + "*".repeat(n - i);

    output += `${a}    ${b}    ${c}    ${d}\n`;
}
output += "</pre>";
document.write(output);