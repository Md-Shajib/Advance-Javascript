const student = [
    {name: "Md Shajib", id: 32},
    {name: "Md Roni", id: 37},
    {name: "Md Firoj", id: 69},
    {name: "Md Jamil", id: 61},
    {name: "Md Rabbi", id: 57},
    {name: "Md Nahid", id: 74},
    {name: "Ibnul", id: 75}
];

const names = student.map(x => x.name);
console.log(names);
//output = ['Md Shajib', 'Md Roni', 'Md Firoj', 'Md Jamil', 'Md Rabbi', 'Md Nahid', 'Ibnul']


const ids = student.map(element => element.id);
console.log(ids);
//output = [ 32, 37, 69, 61, 57, 74, 75 ]

const bigID = student.filter(element => element.id > 70);
console.log(bigID);
//output = [ { name: 'Md Nahid', id: 74 }, { name: 'Ibnul', id: 75 } ]

const findName = student.filter(function(element){
    if(element.id > 60){
        return element;
    }
});
console.log(findName);
//output = [ { name: 'Md Firoj', id: 69 }, { name: 'Md Jamil', id: 61 }, { name: 'Md Nahid', id: 74 }, { name: 'Ibnul', id: 75 } ]
  