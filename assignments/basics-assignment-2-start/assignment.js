const task3Element = document.getElementById('task-3');

function function1() {
  alert('Hi i am function 1');
}

function myName(name) {
  alert('My name is ' + name);
}

function1();
myName('Daniel');

task3Element.addEventListener('click', function1);

function threeStrings(str1, str2, str3) {
  const result = str1 + str2 + str3;
  alert(result);
}

threeStrings('My ', 'old', ' house');
