function wrap(str, num) {
  let wrappedString = '';
  // return str
  //   .split('')
  //   .map((letter, index) => {
  //     if (index % num > 0) {
  //       return letter;
  //     } else {
  //       return letter + '\n';
  //     }
  //   })
  //   .join('');

  // let times = Math.floor(str.length / num);

  //   for (let j = 0; j < str.length; j++) {
  //     let counter = 0;

  //     if ((j = num)) {
  //       wrappedString += `${str[j]}\n`;
  //       counter = 0;
  //     } else {
  //       wrappedString += `${str[j]}`;
  //       counter++;
  //     }
  //   }
  //   return wrappedString;
  // }

  for (let i = 0; i < str.length; i++) {
    if (i === num % 2) {
      wrappedString += `${str[i]}\n`;
    } else if (i % (num - 1) === 0) {
      wrappedString += `${str[i]}\n`;
    } else {
      wrappedString += str[i];
    }
  }
  console.log('TCL: wrap -> wrappedString', wrappedString);
}

wrap('hello from the outside');

module.exports = wrap;
