//type 연산자는 연산자 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환한다.

var foo;
console.log(typeof foo); //undefined

foo=3;
console.log(typeof foo); //number

foo='Hello';
console.log(typeof foo); //string

foo=true;
console.log(typeof foo); //bolean

foo=null;
console.log(typeof foo); //object

foo=Symbol();
console.log(typeof foo); //symbol

foo={}; //객체
console.log(typeof foo); //object

foo={}; //배열
console.log(typeof foo); //object

foo={}; //객체
console.log(typeof foo); //object