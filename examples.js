let bool = 5 > 10;
console.log(bool);

let bool2 = 1 === 1;
console.log(bool2);

let bool3 = 1 !== 2;
console.log(bool3);

let bool4 = 'Ania' === 'Ania';
console.log(bool4);

let isBiggerThan10 = (number) =>{
    if (number > 10) {
        console.log('Liczta jest większa od 10');
    }

    else {
        console.log('Liczba nie jest większa niż 10')
    }
};

isBiggerThan10(20);
isBiggerThan10(5);