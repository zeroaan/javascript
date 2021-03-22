/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 

숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(nums) {
  const values = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        values.push(nums[i] + nums[j] + nums[k])
      }
    }
  }

  return values.filter((v) => primeNumber(v)).length
}

function primeNumber(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false
  }
  return true
}
