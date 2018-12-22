var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};
var biggestSalaries = 0, name = '';
for (var key in salaries) {
  if (salaries[key] > biggestSalaries) {
    biggestSalaries = salaries[key];
    name = key;
  }
}
if (biggestSalaries === 0) {
  name = 'нет сотрудников';
}
alert(name);
