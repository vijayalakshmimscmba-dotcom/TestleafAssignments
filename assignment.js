var studentName="Aathmika"
let studentClass="5th Grade"
var isWeekend=true
let overallGrade
if (studentName="Aathmika"){
    console.log(studentName)
    console.log("I am in " + studentClass)
    let studentMarks=75
    let totalMarks=75+10
    console.log(totalMarks)
    console.log("Grade " + overallGrade)
}else{
    console.log("<studentName> is a not found.")        
}
if (isWeekend){
    console.log("Relax yourself!")
}else{
    console.log("Study Well!")
}
console.log(studentName, typeof studentName)
console.log(studentClass, typeof studentClass)
console.log(isWeekend, typeof isWeekend)
console.log(overallGrade, typeof overallGrade)
console.log(studentMarks, typeof studentMarks)

//studentMarks will throw error as it is is declared with let inside an if scope. So it cannot be accessed outside.
//Overall Grade will return undefined undefined. As it is not initialised anywhere.
//Other data & types are properly printed.
//Both else conditions are not executed as the condition didnt satisfied

