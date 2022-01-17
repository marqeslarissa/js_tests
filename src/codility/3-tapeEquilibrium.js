/* U4ATCJ-76P
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
Any integer P, such that 0 < P < N, splits this tape into two non-empty 
parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
The difference between the two parts is the value 
of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
For example, consider array A such that:
  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:
P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.
For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000]. 
*/
function solution(a) {
  let sum1 = 0;
  let sum2 = a.reduce((acc, i) => {
      return acc + i;
  });

  let minDif = Number.POSITIVE_INFINITY;

  for (let p=0; p <a.length - 1; p++) {
      sum1 += a[p];
      sum2 -= a[p];
      let dif = sum2 - sum1;
      minDif = Math.min(minDif, Math.abs(dif));
  }
  return minDif;
}


function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  var sum1 = 0;
  var sum2 = A.reduce(function(acc, i) {
      return acc + i;
  });

  var minDiff = Number.POSITIVE_INFINITY;
  
  for (var p = 0; p < A.length - 1; p++)
  {
      sum1 += A[p];
      sum2 -= A[p];
      var diff = sum2 - sum1;
      minDiff = Math.min(minDiff, Math.abs(diff));
  }
  
  return minDiff;
}

