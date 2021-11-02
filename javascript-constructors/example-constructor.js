function ExampleConstructor() {
}
console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof of ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
var example = new ExampleConstructor();
console.log('example:', example);
var exampleResult = example instanceof ExampleConstructor;
console.log(exampleResult);
