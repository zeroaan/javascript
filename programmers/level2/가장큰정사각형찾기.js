/*
1와 0로 채워진 표(board)가 있습니다. 

표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 

표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. 

(단, 정사각형이란 축에 평행한 정사각형을 말합니다.)
*/

function solution(board) {
  let answer = 0

  if (board.length === 1 && board[0].length === 1) return board[0][0] === 1 ? 1 : 0

  for (let i = 1; i < board.length; i++) {
    if (!board[i].includes(1)) continue

    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] === 0) continue

      let min = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1])
      board[i][j] = min + 1
      answer = Math.max(answer, board[i][j])
    }
  }

  return answer ** 2
}
