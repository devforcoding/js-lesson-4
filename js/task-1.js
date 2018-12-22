var summary = 0, salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250
};
for (var variable in salaries) {
  summary += salaries[variable];
}
alert(summary);


