// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// for(let student of students)
// {
//     console.log("Name: " + student.name + ", " + "Cohort: " + student.cohort);
    
// }

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };






for(let key in users)
{
    console.log(key.toUpperCase())
      
    for(let employee of users[key])
    {
        nameLength = employee.last_name.length + employee.first_name.length
        console.log(employee.last_name.toUpperCase()+ ", "+ employee.first_name.toUpperCase() +" - " + nameLength );
                
    }
}
 
