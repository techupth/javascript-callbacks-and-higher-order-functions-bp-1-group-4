const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let increase = 5000;
// Exercise #1: For Each Function

function RaiseSalaries (amount, add) {
  return amount + add
}
function forEach(callbackOperation, array, number) {
  const newEmployeeSalaries = [];
  for(let i = 0; i < array.length; i++) {
    newEmployeeSalaries.push(callbackOperation(array[i], number))
  }
  console.log(newEmployeeSalaries)
}
let  netSalaries = forEach(RaiseSalaries, employeeSalaries, increase)

