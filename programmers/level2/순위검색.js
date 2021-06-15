/*
카카오는 하반기 경력 개발자 공개채용을 진행 중에 있으며 현재 지원서 접수와 코딩테스트가 종료되었습니다. 
이번 채용에서 지원자는 지원서 작성 시 아래와 같이 4가지 항목을 반드시 선택하도록 하였습니다.

코딩테스트 참여 개발언어 항목에 cpp, java, python 중 하나를 선택해야 합니다.
지원 직군 항목에 backend와 frontend 중 하나를 선택해야 합니다.
지원 경력구분 항목에 junior와 senior 중 하나를 선택해야 합니다.
선호하는 소울푸드로 chicken과 pizza 중 하나를 선택해야 합니다.

인재영입팀에 근무하고 있는 니니즈는 코딩테스트 결과를 분석하여 채용에 참여한 개발팀들에 제공하기 위해 
지원자들의 지원 조건을 선택하면 해당 조건에 맞는 지원자가 몇 명인 지 쉽게 알 수 있는 도구를 만들고 있습니다.

예를 들어, 개발팀에서 궁금해하는 문의사항은 다음과 같은 형태가 될 수 있습니다.

코딩테스트에 java로 참여했으며, backend 직군을 선택했고, junior 경력이면서, 
소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 50점 이상 받은 지원자는 몇 명인가?

물론 이 외에도 각 개발팀의 상황에 따라 아래와 같이 다양한 형태의 문의가 있을 수 있습니다.

코딩테스트에 python으로 참여했으며, frontend 직군을 선택했고, senior 경력이면서, 
소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?

코딩테스트에 cpp로 참여했으며, senior 경력이면서, 소울푸드로 pizza를 선택한 사람 중 코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?

backend 직군을 선택했고, senior 경력이면서 코딩테스트 점수를 200점 이상 받은 사람은 모두 몇 명인가?

소울푸드로 chicken을 선택한 사람 중 코딩테스트 점수를 250점 이상 받은 사람은 모두 몇 명인가?

코딩테스트 점수를 150점 이상 받은 사람은 모두 몇 명인가?

즉, 개발팀에서 궁금해하는 내용은 다음과 같은 형태를 갖습니다.

* [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?
*/

function solution(info, query) {
  const answer = []
  const dict = {
    "": [],
    cpp: [],
    java: [],
    python: [],
    backend: [],
    frontend: [],
    junior: [],
    senior: [],
    chicken: [],
    pizza: [],
  }

  for (let i = 0; i < info.length; i++) {
    const infoArr = info[i].split(" ")
    const values = infoArr.slice(0, 4)
    const score = Number(infoArr[infoArr.length - 1])

    dict[""].push(score)
    dict[values[0]].push(score)
    dict[values[1]].push(score)
    dict[values[2]].push(score)
    dict[values[3]].push(score)

    for (let j = 0; j < values.length; j++) {
      for (let k = j + 1; k < values.length; k++) {
        if (!dict[values[j] + values[k]]) {
          dict[values[j] + values[k]] = []
        }
        dict[values[j] + values[k]].push(score)

        for (let l = k + 1; l < values.length; l++) {
          if (!dict[values[j] + values[k] + values[l]]) {
            dict[values[j] + values[k] + values[l]] = []
          }
          dict[values[j] + values[k] + values[l]].push(score)
        }
      }
    }

    if (!dict[values.join("")]) {
      dict[values.join("")] = []
    }
    dict[values.join("")].push(score)
  }

  for (let m = 0; m < query.length; m++) {
    const queryArr = query[m].replace(/and |- /g, "").split(" ")
    const queryStr = queryArr.slice(0, queryArr.length - 1).join("")
    const queryScore = Number(queryArr[queryArr.length - 1])

    answer.push(dict[queryStr].filter((v) => v >= queryScore).length)
  }

  return answer
}

/*
function solution(info, query) {
  const answer = []

  const info2 = info.map((v) => v.split(" "))
  const query2 = query.map((v) => v.replace(/and |- /g, "").split(" "))

  for (let i = 0; i < query2.length; i++) {
    let value = [...info2]
    for (let j = 0; j < query2[i].length - 1; j++) {
      value = value.filter((v) => v.includes(query2[i][j]))
    }
    value = value.filter((v) => Number(v[v.length - 1]) >= Number(query2[i][query2[i].length - 1]))
    answer.push(value.length)
  }

  return answer
}
*/
