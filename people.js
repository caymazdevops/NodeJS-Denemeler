let names = ['ahmet', 'mehmet', 'sinan'];
let ages = [23, 43, 38];

let greeting = (name) => {
  return `Merhaba, ${name}`;
};

//console.log(names);

module.exports = {
  isim: names,
  yas: ages,
  selamla: greeting,
};
