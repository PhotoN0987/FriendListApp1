var HelloWorld = /** @class */ (function () {
    function HelloWorld(displayText) {
        this.displayText = displayText;
    }
    HelloWorld.prototype.greet = function () {
        return this.displayText;
    };
    return HelloWorld;
}());
var helloWorld = new HelloWorld("HelloWorld");
document.body.innerHTML = helloWorld.greet();
