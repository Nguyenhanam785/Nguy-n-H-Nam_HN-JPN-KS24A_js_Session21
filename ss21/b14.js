let width = Number(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = Number(prompt("Nhập chiều dọc của hình chữ nhật:"));

if (width < 2 || height < 2) {
    document.write("Chiều ngang và chiều dọc phải lớn hơn hoặc bằng 2!");
} else {
    for (let i = 0; i < height; i++) {
        if (i === 0 || i === height - 1) {
            document.write("*".repeat(width) + "<br>");
        } else {
            document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
        }
    }
}