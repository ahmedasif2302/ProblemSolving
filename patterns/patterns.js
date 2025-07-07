// Output:
// ****
// ****
// ****
// ****
function nRows1(n) {
  for (let i = 0; i < n; i++) {
    // responsible for the number of rows
    let pattern = "";
    for (j = 0; j < n; j++) {
      // responsible for the number of columns
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}

// Output:
// 1
// 12
// 123
// 1234
// 12345
function nRows2(n) {
  for (let i = 0; i < n; i++) {
    var rows = "";
    for (let j = 0; j <= i; j++) {
      rows = rows + (j + i);
    }
    console.log(rows);
  }
}

// Output:
// 1
// 22
// 333
// 4444
// 55555
function nRows3(n) {
  for (let i = 0; i < n; i++) {
    var rows = "";
    for (let j = 0; j <= i; j++) {
      rows = rows + (i + 1);
    }
    console.log(rows);
  }
}

// Output:
// 12345
// 1234
// 123
// 12
// 1
function nRows4(n) {
  for (let i = n; i > 0; i--) {
    let rows = "";
    for (j = 0; j < i; j++) {
      rows += j + 1;
    }
    console.log(rows);
  }
}

// Output:
//     1
//    12
//   123
//  1234
// 12345
// This pattern creates a right-aligned triangle of numbers.
// Each row starts with spaces followed by increasing numbers.
// The number of spaces decreases as the row number increases.
// The first row has n-1 spaces, and the last row has no spaces.
// The numbers in each row start from 1 and go up to the row number.
// The pattern is built by concatenating spaces and numbers for each row.
// The outer loop iterates through each row, while the inner loops handle spaces and numbers.

function nRows5(n) {
  for (let i = 0; i < n; i++) {
    let rows = "";
    for (j = 0; j < n - (i + 1); j++) {
      rows += " ";
    }

    for (let k = 0; k < i + 1; k++) {
      rows += k + 1;
    }
    console.log(rows);
  }
}

// Output:
// 1
// 10
// 101
// 1010
// 10101
function nRows6(n) {
  for (let i = 0; i < n; i++) {
    let rows = "";
    for (let j = 0; j <= i; j++) {
      if ((j + 1) % 2 === 0) {
        rows += "0";
      } else {
        rows += "1";
      }
    }

    console.log(rows);
  }
}

// Output:
// 1
// 01
// 010
// 1010
// 10101

function nRows7(n) {
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let rows = "";
    for (let j = 0; j <= i; j++) {
      rows += toggle;
      if (toggle) {
        toggle = 0;
      } else {
        toggle = 1;
      }
    }
    console.log(rows);
  }
}

nRows7(5);
