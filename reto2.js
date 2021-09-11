// El geometrizador

const calcCircunference = (radio) => {
    let perimeter = 2 * Math.PI * radio;
    return `La circunferencia es ${perimeter}`;
}

calcCircunference(5);

const calcArea = (radio) => {
    let area = Math.PI * (radio ** 2);
    return `El área es ${area}`
}

calcArea(5);


// La calculadora de la edad del cachorro
const calculateDogAge = (age, ratio=null) => {
    ratio = ratio || 7;
    console.log(`¡Tu perrito tiene ${age * ratio} años en años de perro!`)
}

calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(6);
calculateDogAge(2, 20);