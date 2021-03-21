function Pessoa(customProperties) {
    return {
        name: 'Fabio',
        lastName: 'Lopes',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom name', age: 27});
console.log(p);
