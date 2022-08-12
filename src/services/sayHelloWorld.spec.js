const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Alex', () => {
        const response = sayHelloWorld.sayHello('Alex');

        expect(response).toBe('Hello Alex!');
    });
});