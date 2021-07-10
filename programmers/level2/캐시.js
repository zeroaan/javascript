/*
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 
관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.

이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 
제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.

어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 
제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.
*/

function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();

    if (cache.includes(city)) {
      answer += 1;
      cache.splice(cache.indexOf(city), 1);
    } else {
      answer += 5;
      cache.length >= cacheSize && cache.shift();
    }

    cache.push(city);
  }

  return answer;
}
