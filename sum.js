let student =[
    {name:"Smith",lastname:"ssd",rollNumber:31,marks:80},
    {name:"Jenny",lastname:"ssdaa",rollNumber:15,marks:69},
    {name:"John",lastname:"sssdwd",rollNumber:16,marks:35},
    {name:"Tiger",lastname:"sssdd",rollNumber:7,marks:55}
   ];



//total mark
const total=student.reduce(function(acc,curr){
    acc= curr.marks+acc;
 return acc
},0)
console.log(total);


//studentname
// const studname=student.map((x)=> x.name)
// console.log(studname)


//fullname
// const fullname=student.map((x)=>x.name +" "+ x.lastname )
// console.log(fullname)



