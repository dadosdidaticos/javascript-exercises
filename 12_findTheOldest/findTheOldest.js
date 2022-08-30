const findTheOldest = function(people) {
    let peopleAges = []
    people.map(function(person){
        if (person.yearOfDeath != null){
            peopleAges.push(person.yearOfDeath-person.yearOfBirth)
        }else{
            const today = new Date();
            peopleAges.push(today.getFullYear()-person.yearOfBirth)
        }
        return peopleAges
    });
    let maxAge = Math.max.apply(null,peopleAges)
    let indexMaxAge = peopleAges.indexOf(maxAge)
    return people[indexMaxAge]
};

// Do not edit below this line
module.exports = findTheOldest;
