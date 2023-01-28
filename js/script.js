// First task
const greeting = new Promise((resolve, reject) =>
  setTimeout(() => {
    console.log('Hello');
  }, 3000)
);

// Second task
async function deleay() {
  console.log('first call');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 4000);
  });
  let result = await promise;
  result;
  console.log('second call');
}
deleay();

// Third task

/* function createDice() {
  let arrNew = [];
  for (let i = 0; i < 3; i++) {
    arrNew.push(
      new Promise((resolve, reject) => {
        let num = Math.round(Math.random() * 10);

        if (num >= 6) {
          resolve('Успех');
          console.log(`Успех = ${num}`);
        } else {
          reject('Провал');
          console.log(`Провал = ${num}`);
        }
      })
    );
  }
  Promise.all(arrNew)
    .then(() => {
      console.log('You are lucky!');
    })
    .catch(() => {
      console.log('Not today(');
    });
}
createDice(); */

///
function createDice() {
  return new Promise((resolve, reject) => {
    let num = Math.round(Math.random() * 10);
    if (num >= 6) {
      resolve();
      console.log(`Успех = ${num}`);
    } else {
      reject();
      console.log(`Провал = ${num}`);
    }
  });
}

function createThreePromises() {
  let num1 = createDice();
  let num2 = createDice();
  let num3 = createDice();
  Promise.all([num1, num2, num3])
    .then(() => {
      console.log('You are lucky!');
    })
    .catch(() => {
      console.log('Not today(');
    });
}
createThreePromises();
