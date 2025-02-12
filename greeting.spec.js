const greet = require('./greeting')

describe("Saudacao", () => {

    test("Saudar o nome 'Tales'", () => {
        expect(greet('Tales')).toBe('Ola Tales, seja bem vindo ao curso de Desenvolvimento WEB');
    })

    test('Saudar um nome vazio deve gerar uma exceçao', () => {
        const execution = () => greet('')
        expect(execution).toThrow()
    })

    test('Saudar um nome undefined deve gerar uma exceçao', () => {
        const execution = () => greet()
        expect(execution).toThrow()
    })
})