function comparacao(num1, num2){
    const primeira_frase = SaoIguais(num1, num2)
    const segunda_frase = Soma(num1, num2)
    return `${primeira_frase} ${segunda_frase}`;
}

function SaoIguais(num1, num2){
    return (num1===num2)? (`Os números ${num1} e ${num2} são iguais.`) : (`Os números ${num1} e ${num2} não são iguais.`);
}

function Soma(num1, num2){
    var soma = num1+num2;
    let comp10 = 'menor';
    let comp20 = 'menor';

    if (soma>10){
        comp10 = 'maior';
    }

    if (soma>20){
        comp20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${comp10} que 10 e ${comp20} que 20.`;
}

console.log(comparacao(7,7))