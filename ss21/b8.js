for (let number = 100; number <= 999; number++) {
    let tram = Math.floor(number / 100);
    let chuc = Math.floor((number % 100) / 10);
    let donVi = number % 10;
    let tongLapPhuong = Math.pow(tram, 3) + Math.pow(chuc, 3) + Math.pow(donVi, 3);
    if (tongLapPhuong === number) {
        console.log(number);
    }
}