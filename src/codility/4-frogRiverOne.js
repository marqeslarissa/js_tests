/* GR2H33-KJB
A small frog wants to get to the other side of a river. The frog is initially 
located on one bank of the river (position 0) and wants to get to the opposite 
bank (position X+1). Leaves fall from a tree onto the surface of the river.
You are given an array A consisting of N integers representing the falling leaves. 
A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side 
of the river. The frog can cross only when leaves appear at every position 
across the river from 1 to X (that is, we want to find the earliest moment 
  when all the positions from 1 to X are covered by leaves). You may assume 
  that the speed of the current in the river is negligibly small, i.e. the 
  leaves do not change their positions once they fall in the river.
For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when 
leaves appear in every position across the river.

Write a function:

class Solution { public int solution(int X, int[] A); }

that, given a non-empty array A consisting of N integers and integer X, 
returns the earliest time when the frog can jump to the other side of the river.
If the frog is never able to jump to the other side of the river, the function should return −1.
For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.
Write an efficient algorithm for the following assumptions:
N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
*/

function solution(x, a) {
  let b = [];
  for (let i = 0; i < x; i++) {
      b[i] = -1;
  }
  let n = a.length;
  for (let i = 0; i < n; i++) {
      if (b[a[i] - 1] == -1) {
          b[a[i] - 1] = i;
      }
  }
  let k = 0;
  for (let i in b) {
      let B = b[i];
      if (B > k) {
          k = B;
      } else if (B == -1) {
          return -1
      }
  }
  return k;
}

function solution(x, A) {
  let B = [];
  for (let i = 0; i < x; i++) {
    B[i] = -1;
  }
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (B[A[i] - 1] == -1) {
      B[A[i] - 1] = i;
    }
  }
  let r = 0;
  for (let i in B) {
    let b = B[i];
    if (b > r) {
      r = b;
    } else if (b == -1) {
      return -1;
    }
  }
  return r;
}

function solution(X, A) {
  let times = {}
  
  for (var second = 0; second < A.length; second++) {
      var position = A[second]
      if (position > X) continue;
      if (times[position] === undefined || times[position] > second) {
          times[position] = second
      }
  }
  
  let maxTime = 0
  for (var i = 1; i < X + 1; i++) {
      if (times[i] === undefined) {
          return -1;
      } else if (maxTime < times[i]) {
          maxTime = times[i]
      }
  }
  
  return maxTime;
}