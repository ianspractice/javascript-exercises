const findTheOldest = function (people) {
  let persons = [];
  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
    age = person.yearOfDeath - person.yearOfBirth;
    let name = person.name;
    let personInfo = { name, age };
    persons.push(personInfo);
  });
  persons.sort((a, b) => b.age - a.age);
  console.log(persons[0]);
  return persons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
