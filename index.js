function mapToNegativize(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * -1));
  return newArr;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * 2));
  return newArr;
}

function mapToSquare(arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element * element));
  return newArr;
}

function reduceToTotal(arr, startNum = 0) {
  let total = startNum;
  arr.forEach((num) => (total += num));
  return total;
}

function reduceToAllTrue(arr) {
  let boolean = true;
  arr.forEach((item) => {
    if (!!item == false) {
      boolean = false;
      return boolean;
    }
  });

  return boolean;
}

function reduceToAnyTrue(arr) {
  let boolean = false;
  arr.forEach((item) => {
    if (!!item == true) {
      boolean = true;
      return boolean;
    }
  });
  return boolean;
}
