/*
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.

4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers, hand) {
  let answer = "";

  let leftHand = "*";
  let rightHand = "#";

  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      leftHand = num;
    } else if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      rightHand = num;
    } else {
      const leftDistance = checkDistance(leftHand, num);
      const rightDistance = checkDistance(rightHand, num);

      if (leftDistance === rightDistance) {
        if (hand === "left") {
          answer += "L";
          leftHand = num;
        } else {
          answer += "R";
          rightHand = num;
        }
      } else if (leftDistance < rightDistance) {
        answer += "L";
        leftHand = num;
      } else {
        answer += "R";
        rightHand = num;
      }
    }
  });

  return answer;
}

function checkDistance(curNumber, point) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const [curX, curY] = keypad[curNumber];
  const [pointX, pointY] = keypad[point];

  return Math.abs(curX - pointX) + Math.abs(curY - pointY);
}

/*
function solution(numbers, hand) {
  const keyboard = [
      [1, 4, 7, "*"],
      [2, 5, 8, 0],
      [3, 6, 9, "#"],
  ]
  const current = { L: [0, 3], R: [2, 3] }
  
  const result = numbers.map((num) => {
      console.log(current)
      if (keyboard[0].includes(num)) {
          current.L = [0, (num - 1) / 3]
          return "L"
      } else if (keyboard[2].includes(num)) {
          current.R = [2, (num - 3) / 3]
          return "R"
      } else if (keyboard[1].includes(num)) {
          const curKey = [1, num === 0 ? 3 : (num - 2) / 3]
          const leftLength = Math.abs(curKey[0] - current.L[0]) + Math.abs(curKey[1] - current.L[1])
          const rightLength = Math.abs(curKey[0] - current.R[0]) + Math.abs(curKey[1] - current.R[1])
          
          if (leftLength < rightLength) {
              current.L = [1, num === 0 ? 3 : (num - 2) / 3]
              return "L"
          } else if (leftLength > rightLength) {
              current.R = [1, num === 0 ? 3 : (num - 2) / 3]
              return "R"
          } else {
              if (hand === "left") {
                  current.L = [1, num === 0 ? 3 : (num - 2) / 3]
                  return "L"
              } else if (hand === "right") {
                  current.R = [1, num === 0 ? 3 : (num - 2) / 3]
                  return "R"
              }
          }
      }
  })
  
  return result.join("")
}
*/
