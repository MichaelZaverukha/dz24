let money= +prompt('Ваша сума грошей в гаманці (грн)?');
let chocolate= +prompt('Ціна шоколадки (грн)?');
let can=Math.floor (money/chocolate);
let plus = money%chocolate;
alert(`Ви зможете купити ${can} шоколадок`);
alert(`Ваша остача ${plus.toFixed(1)} (грн)`);

let number= prompt('Введіть будь-яке тризначне число');
let massiv= [...number];
massiv.reverse();
alert (massiv.join(''));

let sum= +prompt('Ваша сума для депозиту (грн)');
let desc = Math.round(((sum*5*61)/365)/100);
alert(`Ви отримаєте ${desc} (грн)`);
alert(`Тобто ви будете мати ${sum+desc} (грн)`);


alert ( 2 && 0 && 3);
alert ( 2 || 0 || 3);
alert (2 && 0 || 3);