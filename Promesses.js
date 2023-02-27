// promesses

// declaration
const calcul = new Promise((resolve, reject) => {
  //...
  const result = 202 * 200;
  if (result === true) {
    resolve();
  } else {
    reject();
  }
});

// utilisation
calcul
  .then(() => {
    console.log("resultat de" + result);
  })
  .catch(() => {
    console.log("oups, une erreur");
  });
