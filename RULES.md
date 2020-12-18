## 코딩 규칙

<hr />

##### 2020/11/17

1. 상수는 JS 파일내에 한해 카테고리화 (ex: 객체화)
   <br/>

2. 타입, 상태는 대문자로 : 상수도 대문자 CONST_NAMING_EXAMPLE 패턴
   <br/>

3. 이벤트 핸들러 네이밍

   1. Handle + event이름
      - handleClick, handleChange 등등
   2. 한 컴포넌트 내에 같은 핸들러가 여러개인 경우 하나의 handle+event로 네이밍후 내부에서 분기처리 후 각각에 해당하는 함수 호출하는 방식
   3. 라이브러리에서 제공하는 이벤트핸들러의 callback함수로 처리하는 이벤트핸들러의 경우 제공되는 해당 이벤트 핸들러의 네이밍을 따라간다
      <br/>

4. PRESENTER/CONTAINER 패턴

   - 컴포넌트의 단위를 로직이 포함된 단위로
     <br/>

5. 함수명은 카멜케이스와 가독성 고려
   <br/>

6. Styles 폴더 안에 common/theme/reset.js
   <br/>

7. 로컬 스토리지 활용 하자
   <br/>

8. 사가: duck패턴 / 유저 로그인 정보: auth/unauth
   <br/>
