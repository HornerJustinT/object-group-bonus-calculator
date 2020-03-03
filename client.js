$(document).ready(readyNow)
function readyNow(){
  console.log('JQ');
  $('#clicker').on('click', showBonuses);
}

function showBonuses(){
  let outputEl = $('#bonusList');
  outputEl.empty();
  for(element of bonusArray){
    outputEl.append(`<li> <strong>Name:</strong> ${element.name} <strong>Bonus:</strong> ${element.totalBonus}</li>`)
  }
}

const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let bonusArray = [];
console.log(employees);

bonusCalculator = (peon) => {
  
  let tComp = peon.annualSalary*bonusCalculation(peon);
  let tBonus = Math.trunc(tComp-peon.annualSalary);
  let personBonus = {
    name:peon.name,
    bonusPercentage: bonusCalculation(peon),
    totalCompensation: tComp,
    totalBonus:tBonus
  }
  return personBonus;
}
bonusCalculation = (worker) =>{
  let result = 1;
  if(worker.reviewRating<=2){
    result+= 0;
  }
  else if(worker.reviewRating==3){
    result+= .04;
  }
  else if(worker.reviewRating==4){
    result += .06;
  }
  else if(worker.reviewRating ==5){
    result += .1;
  }
  if(worker.employeeNumber.length == 4){
    result += .05;
  }
  if(worker.annualSalary>65000){
    result -= .01
  }
  if(result>1.13){
    result =1.13;
  }
  if(result<1){
    result = 1;
  }
  return result
}
convertToBonusArray = (workerArray)=>{
  let bonusArray=[];
  for(worker of workerArray){
    bonusArray.push(bonusCalculator(worker))
  }
  return bonusArray
}
bonusArray = convertToBonusArray(employees);
console.log(convertToBonusArray(employees));
