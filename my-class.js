var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.toString = function () {
        return "Hello, my name is " + this.name + " I am " + this.age + " years old";
    };
    return Person;
})();
exports.Person = Person;
