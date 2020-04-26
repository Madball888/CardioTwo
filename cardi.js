const people = [
    {name:'Wes' , year: 1988},
    {name:'Kait' , year: 1986},
    {name:'Irv' , year: 1970},
    {name:'Lux' , year: 2015},

];

const comments = [
{text: 'Love this!', id:523423},
{text: 'Super good', id:823423},
{text: 'You are the best', id:2039842},
{text: 'Beefburger is my favorite food ever', id:123523},
{text: 'Super Super Super', id:542328}

];

//Some and every check
//Array.prototype.some()- is atleast one person 19?
const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year>=19) {
        return true;
    }
    
});
//  let isAdult = people.some(person => {
//    const currentYear =(new Date()).getFullYear();
//    return currentYear - person.year >=19;
//  }); - cleaner code

console.log({isAdult});
//Array.prototype.every() - is everyone 19?

const allAdults = people.every(person =>((new Date()).
getFullYear()) - person.year >=19);
console.log ({allAdults});

//Array.prototype.find()
//Find is like filter, but instead returns just the one 
//item you are looking for
//ex.find the comment with the id:823423

const comment = comments.find(function(comment){
    if (comment.id === 823423) {
    return true;
    }
});
// let comment = comment.find(comment =>comment.id === 823423); - cleaner code
console.log(comment);

//Array.prototype.findIndex()
//Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment =>comment.id === 823423);
console.log (index);
//this is how you delete something in an array
comments.splice(index, 1);

