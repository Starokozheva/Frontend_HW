// 1) Написать функцию, которая получает в качестве аргумента число и строку, где число обозначает сколько раз должна быть добавлена эта строка в массив. Возвращает массив из этих строк. Например: передаем строку “dog” и цифру 3, в результате мы получаем [“dog”,”dog”,”dog”].

function getReapingStr(str, count) { 
    let arr = [];
  
    for(let i = 0; i < count; i++) {
      arr.push(str);
    }
  
    return arr;
  }
  console.log(getReapingStr("dog", 3));
  




// 2) Написать функцию, которая получает в качестве аргумента массив с числами. Функция нужна для расчета суммы четных чисел в массиве. Так же написать новую функцию для расчета суммы нечетных чисел в массиве.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function getSumEven(arr) { 
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(getSumEven(arr));



function getSumOdd(arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum1 += arr[i];
    }
  }
  return sum1;
}

console.log(getSumOdd(arr));



function evenOrOdd() {
  let even = getSumEven;
  let odd = getSumOdd;
  if (even > odd) {
    console.log(even);
  } else {
    console.log(odd);
  }
}

evenOrOdd();




// 3) Напишите функцию, которая как аргумент принимает строку. Эта функция возвращает это слово в развернутом виде. Пример:  “cat” => “tac”

function create(word) {
  let newWord = "";

  for(let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
console.log(create("cat"));





// 4) Написать функцию, которая будет находить максимальное число в массиве.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function maxNumArr(arr1) {
  for (let i = 0; i < arr1.length + 1; i++) {
    maxNum = arr1[i - 1]
    if (arr1[i] < maxNum) {
      maxNum = arr1[i];
    }
  }
  return maxNum;
}

console.log(maxNumArr(arr1));