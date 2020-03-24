class Person
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }

    getNameAndSurname()
        {
            return this.name + " " + this.surname.toUpperCase();
        }
        
    getInitials ()
        {
            return this.name.toUpperCase()[0] + "." + this.surname.toUpperCase()[0] + ".";
        }
}


let jn = new Person("Jan", "Nowak")
let kf = new Person("Konrad", "Flaka")

console.log(jn.getNameAndSurname())
console.log(jn.getInitials())
console.log(kf.getNameAndSurname())
console.log(kf.getInitials())