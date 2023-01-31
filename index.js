const jumlahArray = 100;
let randomNumbers = [];

for (let i = 0; i < jumlahArray; i++) {
  randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}
console.log(randomNumbers);

let ganjil = [];
let genap = [];

for (let i = 0; i < randomNumbers.length; i++) {
  if (i % 2 == 0) {
    genap.push(randomNumbers[i]);
  } else {
    ganjil.push(randomNumbers[i]);
  }
}

console.log(genap);
console.log(ganjil);

function findMinimum(inputArray) {
  let result = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    if (result > inputArray[i]) {
      result = inputArray[i];
    }
  }
  return result;
}

function findMaximum(inputArray) {
  let result = inputArray[0];

  for (let i = 0; i < inputArray.length; i++) {
    if (result < inputArray[i]) {
      result = inputArray[i];
    }
  }
  return result;
}

function findTotal(inputArray) {
  let result = 0;
  for (let i = 0; i < inputArray.length; i++) {
    result += inputArray[i];
  }
  return result;
}

function findAvg(inputArray) {
  return findTotal(inputArray) / inputArray.length;
}

function arrayPembanding(ganjil, genap) {
  if (findMinimum(ganjil) > findMinimum(genap)) {
    console.log("Minimum array ganjil lebih besar dari Array Genap");
  } else if (findMinimum(ganjil) < findMinimum(genap)) {
    console.log("Manimum array ganjil lebih kecil dari Array Genap");
  } else {
    console.log("Array memeiliki nilai yang sama");
  }

  if (findMaximum(ganjil) > findMaximum(genap)) {
    console.log("Maximum array ganjil lebih besar dari Array Genap");
  } else if (findMaximum(ganjil) < findMaximum(genap)) {
    console.log("Maximum array ganjil lebih kecil dari Array Genap");
  } else {
    console.log("Array memeiliki nilai yang sama");
  }

  if (findTotal(ganjil) > findTotal(genap)) {
    console.log("Total array ganjil lebih besar dari total array genap");
  } else if (findTotal(ganjil) < findTotal(genap)) {
    console.log("Total array ganjil lebih kecil dari total array genao");
  } else {
    console.log("Array memiliki nilai yang sama");
  }

  if (findAvg(ganjil) > findAvg(genap)) {
    console.log("rata-rata array ganjil lebih besar dari rata-rata array genap");
  } else if (findAvg(ganjil) < findAvg(genap)) {
    console.log("rata-rata array ganjil lebih kecil dari rata-rata array genap");
  } else {
    console.log("Array memilki rata-rata nilai yang sama");
  }
}

console.log("Nilai Minimum dari array Ganjil : ");
console.log(findMinimum(ganjil));

console.log("Nilai Minimum dari array Genap : ");
console.log(findMinimum(genap));

console.log("Nilai Maximum dari array Ganjil : ");
console.log(findMaximum(ganjil));

console.log("Nilai Maximum dari array Genap : ");
console.log(findMaximum(genap));

console.log("Nilai Total dari array ganjil : ");
console.log(findTotal(ganjil));

console.log("Nilai Total dari array genap : ");
console.log(findTotal(genap));

console.log("Nilai rata-rata dari array ganjil : ");
console.log(findAvg(ganjil));

console.log("Nilai rata-rata dari array genap : ");
console.log(findAvg(genap));

arrayPembanding(ganjil, genap);
