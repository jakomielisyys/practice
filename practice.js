//Задание 1

let str = "Сайт";
    str.test = 5; // (*)
        alert(str.test);

//Задание 2

let message = (login == 'Ученик') ? 'Привет' :
  (login == 'Учитель') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

  //Задание 3

  function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 10) );
alert( random(1, 10) );
alert( random(1, 10) );

//Задание 4

let user = {
  name: "Екатерина Михайловна",
  age: 20
};

let user2 = JSON.parse(JSON.stringify(user));

//Задание 5

function makeObservable(target) {
  /* ваш код */
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John

//Задание 6

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

//Задание 7

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

//Задание 8

let salaries = {
  John: 10,
  Ann: 16,
  Pete: 13
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 39

//Задание 9

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Задание 10

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1

//Задание 11

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}

//Задание 12

let styles = ["Рок", "Рэп"];
styles.push("Диско");
styles[Math.floor((styles.length - 1) / 2)] = "Фонк";
alert( styles.shift() );
styles.unshift("Хип-Хоп", "Метал");

//Задание 13

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("аркаша") ); // аркаша

//Задание 14

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more




