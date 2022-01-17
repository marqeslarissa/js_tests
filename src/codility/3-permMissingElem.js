/*  9XHJTT-MEC
An array A consisting of N different integers is given. The array contains 
integers in the range [1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.
Write a function:
function solution(A);
that, given an array A, returns the value of the missing element.
For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

function solution(A) {
  if (A.length === 0) 
      return 1;

  let sum = A.reduce((sum, i) => {
      return sum + i;
  });

  let newSum = ((A.length + 1) * (A.length + 2) / 2);
  return newSum - sum;
}

function solution(A) {
  if (A.length === 0) return 1

  var actualSum = A.reduce(function (actualSum, i) {
    return actualSum + i;
  })

  var requiredSum = (A.length + 1) * (A.length + 2) / 2;

  return requiredSum - actualSum;
}


function solution(A) {
  let n = A.length;
  if (n == 0) {
    return 1;
  }
  A.sort((a, b) => a - b);
  if (A[0] == 2) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    if (A[i] - A[i - 1] > 1) {
      return A[i] - 1;
    }
  }
  return A[n - 1] + 1;
}