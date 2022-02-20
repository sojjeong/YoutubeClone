### % vs vh

- % : 부모의 높이에 %로 채운다
- vh : 보이는 뷰포트에 대한 %로 사용

### container 속성

- `display` : flexbox 로 만들고 싶다면 'flex' 속성 선언
- `flex-direction` : 중심 축에 대한 속성, row, column ...
- `flex-wrap` : 뷰포트가 줄어들었을 때, 요소의 줄바꿈을 할 것인지 아닌지
- `flex-flow` : flex-direction 와 flex-wrap 을 합친 축약형
  - `flex-flow : column nowrap` 와 같이 합쳐서 사용
- `justify-content` : 중심축에서 아이템을 어떻게 배치할 것인지
  - start
  - center
  - flex-end
  - space-around : 박스를 둘러 싸게 공간을 둠
  - space-evenly : Ehrrkxdms rksrurdmf sjgdjwna
  - space-between : 왼쪽과 오른쪽은 화면에 맞게 배치하고, 중간만 띄워서
  -
- `align-items` : 축의 반대편에서 아이템을 어떻게 정렬할 것인지 결정

### item 속성

- `flex-glow` : 아이템이 컨테이너를 맞춰 크기를 유동적으로 조절함, 배율 조절 가능
- `flex-shrink` : 컨테이너가 점점 작아질 때, 어떻게 작아져야 할지
  - 컨테이너의 사이즈가 바꼈을 때 어떻게 커지고 작아질지를 설정
- `flex-basis` : container 의 width 에 따라서 비율에 따라 자리를 차지함
- `align-self` : 컨테이너의 지정을 벗어남
