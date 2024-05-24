import React from 'react';

function DancePopModalBody() {
  return <p>1980년대 디스코의 인기 하락 이후 디스코 음악 요소를 개량해 파생된
  새로운 형태의 음악이며 댄스와 팝이 결합된 장르이다.
  주로 업 템포 음악으로, 춤추기에 적합하며 흥겹고 강렬한 리듬감과
  긍정적 에너지를 담은 중독성 있는 멜로디가 특징이다.</p>;
}

function ElecPopModalBody() {
  return <p>1970년대 후반 전자적인 기기들의 도입으로
  신스팝(Synthpop)과 거의 동시대에 등장한 전자 음악 장르의 한 갈래이며
  이후 하우스나 테크노 등 많은 영향을 끼친 장르이다.
  순수 악기와 보컬의 범주에서 벗어나 다채로운 기계적인 사운드, 신디사이저,
  드럼 머신을 결합한 것이 특징이다.</p>;
}

function BritPopModalBody() {
  return <p>1990년대 중반 영국에서 발생한 음악 운동으로, 기존의 팝과 록에 영국 인디 밴드만의
  특유한 분위기가 혼합된 장르이다.
  기타 중심의 사운드안에 영국만의 분위기가 담긴 애국적이면서도 우울한 가사와 멜로디가 특징이다.</p>;
}

function IndiPopModalBody() {
  return <p>먼저 "인디"는 "독립"을 뜻하며, 이 장르는 주로 대중성을 갖추면서도
  음악 산업에서 독립적으로 활동하는 아티스트와 밴드를 일컫는 말이다.
  펑크 록(Punk Rock)의 DIY(Do it yourself) 정신과 이념에 영향을 받아
  주류 팝,록 음악에 대항하여 자급자족으로 음악을 만든다는 특징이 있다.
  그래서 "인디"는 곧 음악적 특징의 개념보단 아티스트의 제작 방식에 따른 분류의 따라 붙는다고 할 수 있다.</p>;
}

function LatinPopModalBody() {
  return <p>라틴 아메리카의 음악 요소와 팝 음악이 결합된 장르이다.
  라틴 팝은 주로 스페인어, 포르투칼어를 사용하는 보컬이 다수지만 다른 언어권을 사용해도
  라틴 리듬이 첨가된 음악 또한 포함된다.
  삼바, 메렝게, 레게톤, 쿠바노, 플라멩코 등 다양한 리듬이 사용되는 것이 특징이다.</p>;
}

function LatinJazzModalBody() {
    return <p>1940년대 라틴 아메리카 음악과 재즈음악의 만남으로 재즈의 형태 속 라틴 아메리카의
(클라베, 탱고, 살사, 삼바 등) 특유한 리듬 패턴이 첨가됨 음악이다.
대표적으로 아프로큐반 재즈(Afro-Cubanjazz)는 쿠바, 보사노바(Bossa nova)는 브라질
곧 라틴아메라카의 속한 나라에서 탄생했으며 특히 퍼커션 악기의 사운드가 두드러지는 것이 특징이다.</p>;
}

function SwingJazzModalBody() {
    return <p>1930년대 미국에서 발전한 재즈 스타일이며 셔플리듬과 비슷하나 미묘하게 강세가 다르다.
    "Swing"음악은 마치 '그루브'라는 표현처럼
    본능적으로 발을 두드리거나 머리를 끄덕이게 만드는게 중요하다.
    1930~40년대에는 스윙댄스가 유행했으며 리듬을 느끼며 춤추기에 적합한 것이 특징이다.</p>;
}

function SoulJazzModalBody() {
    return <p>1950년대 흑인만의 풍부한 펑키(Funky)한 소울과 재즈가 결합된 음악이다.
    펑키 재즈(Funcky jazz)라고도 부를 수 있으며
    하드 밥(Hard Bop) 의 파생물이자 흑인 음악인 블루스(Blues), 소울(Soul), 가스펠(Gaspel)의
    강한 영향을 받은것이 특징이다.</p>;
}

function FreeJazzModalBody() {
    return <p>1960년대 중반 기존 재즈구조와 규칙에 매너리즘에 빠져 탄생한
    창작적 자유가 담긴 즉흥 스타일의 재즈이며 아방가르드 재즈(Avant-garade jazz) 라고도 부른다.
    정통을 무시한채 구조화 된 조성,박자에 구애받지 않는 것이 특징이다.
    또한 당시 흑인인권차별에 대한 "Free"를 외치는 정치적 의미가 담겨 있다.</p>;
}

function BibobJazzModalBody() {
    return <p>1940년대 초중반 스윙재즈에 대항하여 발전한 재즈 스타일로
    빠른 템포, 역동적인 코드 변경, 수많은 조 변경, 당김음을 포함시킨 음악이다.
    악기별 창의적인 솔로 연주와 악기의 화려한 기교가 들어간다는 것이 특징이다.</p>;
}

export {
  DancePopModalBody,
  ElecPopModalBody,
  BritPopModalBody,
  IndiPopModalBody,
  LatinPopModalBody,
  LatinJazzModalBody,
  SwingJazzModalBody,
  SoulJazzModalBody,
  FreeJazzModalBody,
  BibobJazzModalBody,
};
