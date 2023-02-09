export function calcTotal(spisok) {
    let rezult = 0;
    for (let i = 0; i < spisok.length; i++) {
        rezult += spisok[i].count * spisok[i].price;
}
return rezult;
}

