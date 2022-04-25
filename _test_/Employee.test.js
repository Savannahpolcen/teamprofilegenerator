const Employee = require('../lib/Employee.js')



jest.mock('../lib/Employee.js');


test ('creates Employee object', ()=>{
    const Employee = new Employee('Sally');

    expect(Employee.name).toBe('Sally');
    expect(Employee.officenum).toEqual(expect.any(Number));
    expect(Employee.id).toEqual(expectany(Number));


});














// object names need to be capitilized
// Need, Name, Email, Github, employee id# and office number

//const Employee = require ('../lib/Employee')

//test('creates Employee object' , () => {
   // const Employee = new Employee('Sal','sal55@salmail.com','salHub',1,17 );

    //expect(Employee.name).toBe('Sal');
    //expect(Employee.email).toEqual('sal55@salmail.com');
    //expect(Employee.github).toEqual('salHub');
    //expect(Employee.id).toEqual('1');
   // expect(Employee.officenum).toEqual('17');
//});
