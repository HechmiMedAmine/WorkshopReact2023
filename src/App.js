import logo from './logo.svg';
import './App.css';
import React from 'react';
import {search} from './Ecmascript/fonctions';
// marks
/*const calculateMarks = (students) =>
students.map((stu) => {
if (stu.marks < 50) {
stu.marks += 15;
}
return stu;
}).filter(stu => stu.marks > 50).reduce((acc, curr) => acc +
curr.marks, 0);
const students = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'John', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 },];
console.log(calculateMarks(students));
*/
// ***** FINDLONGESTWORD*************
/*
const findLongestWord = (words) => {
  let newArr = words.map(word => {
  return { word: word, length: word.length }
  });
  console.log(newArr);
  return newArr.reduce((acc, cur) => 
   (acc.length > cur.length) ? acc : cur);
 
  }
  const words = ['javascript', 'is', 'awesome', 'language'];
  console.log(findLongestWord(words));
  // Output: { word: 'javascript', length: 10 }
  
*/
//******** COUNT**************
/*
const countArraysElements = (arraysInput) =>
arraysInput.flat().reduce((accumulator, currentValue) => {
if (accumulator[currentValue]) {
accumulator[currentValue] += 1;
} else {
accumulator[currentValue] = 1;
}
return accumulator;
}, {});
const input = [
["a", "b", "c"],
["c", "d", "f"],
["d", "f", "g"],
];
console.log(countArraysElements(input));
*/
/*//0
accumulator: {}
currentValue: "a"
return: {"a": 1}
//1
accumulator: {"a": 1}
currentValue: "b"
return: {"a": 1, "b" : 1}
//2
accumulator: {"a": 1, "b" : 1}
currentValue: "c"
return: {"a": 1, "b" : 1 "c" : 1}
//3
accumulator: {"a": 1, "b" : 1 "c" : 1}
currentValue: "c"
return: {"a": 1, "b" : 1 "c" : 2}
*/

/*
const Tab = [
  { salle: "21", étage: "2" , bloc :"A"},
  { salle: "23", étage: "2" , bloc :"B"},
  { salle: "26", étage: "2" , bloc :"C"},
  ];
  console.log(Tab)
  Tab.push( { salle: "81", étage: "8" , bloc :"B"});
  // Tab.unshift( { salle: "51", étage: "5" , bloc :"K"});
  let ID = 1;
  const newData = Tab.map((object) => ({...object, ID: ID++}) )
  console.log(newData)
  console.log(search(1,newData))
  
*/
  /******* Class Component */
/*class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  */
  /********Functional Component */
  function Welcome(props) {
    return <h1>Helloooo {props.name}</h1>
  }
  
function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello 4 TWIN 5
        </a>

        <Welcome name="You" />

      </header>
    </div>
  );
}

export default App;
