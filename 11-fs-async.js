const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/third-async.txt', `Hello 3 = ${first} + ${second}`, (err, result) => {
      if(err) {
        console.log(err);
        return
      }
      console.log('done');
    });
  })
})
console.log('starting next task');