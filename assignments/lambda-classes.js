class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}


class Instructor extends Person{
    constructor(insAttributes) {
        super(insAttributes);
        this.specialty = insAttributes.specialty;
        this.favLanguage = insAttributes.favLanguage;
        this.catchPhrase = insAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today, we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(function(cv) {
            console.log(cv);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${joe.name}'s code on ${subject}.`;
    }
}

const dave = new Instructor( {
    name: 'Dave',
    location: 'Agawam',
    age: 38,
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: 'Yo Foo!'
});

const jen = new Instructor( {
    name: 'Jen',
    location: 'Chicopee',
    age: 25,
    favLanguage: 'C#',
    catchPhrase: 'MS Rules!'
});

const joe = new Student( {
    name: 'Joe',
    age: 15,
    location: 'Enfield',
    previousBackground: 'None',
    className: 'Python 101',
    favSubjects: ['Computer Science', 'History']
})

const annabelle = new Student( {
    name: 'Annabelle',
    age: 17,
    location: 'Feeding Hills',
    previousBackground: 'Java',
    className: 'Python 101',
    favSubjects: ['History', 'CS', 'Javascript']
})

const james = new ProjectManager( {
    name: 'James',
    age: 29,
    location: 'Agawam',
    specialty: 'C++',
    favLanguage: 'C',
    catchPhrase: 'How YOU doin?',
    gradClassName: 'Advanced C',
    favInstructor: 'Jen'
})

const dwight = new ProjectManager({
    name: 'Dwight',
    age: 23,
    location: 'Springfield',
    specialty: 'C',
    favLanguage: 'C++',
    catchPhrase: 'Now or never',
    gradClassName: 'Databases',
    favInstructor: 'Dave' 
})

console.log(dwight);
console.log(dave);
console.log(jen);
console.log(joe);
console.log(annabelle);
console.log(james);
console.log(dwight.standUp('#Web25'));
console.log(dwight.debugsCode(joe, 'Python'));
console.log(james.standUp('#Web25'));
console.log(james.debugsCode(annabelle, 'Java'));
console.log(dwight.demo('Python 101'));
console.log(dwight.grade(joe, 'Computer Science'));
console.log(james.demo('Computer Science'));
console.log(james.grade(annabelle, 'Python 101'));
joe.listsSubjects();
console.log(joe.PRAssignment('History'));
console.log(joe.sprintChallenge('Javascript 201'));
annabelle.listsSubjects();
console.log(annabelle.PRAssignment('Python 101'));
console.log(annabelle.sprintChallenge('CS'));
console.log(dave.demo('Python 101'));
console.log(dave.grade(joe, 'History'));
console.log(jen.demo('History'));
console.log(jen.grade(annabelle, 'CS'));