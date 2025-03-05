for (let i = 0; i < 10; i++) {
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    console.log(`%cMàu sắc đã được thay đổi`, `color: ${color}; font-weight: bold; font-size: 16px;`);
}
