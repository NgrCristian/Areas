let n1 = Number(prompt('Digite um valor decimal'))
let n2 = Number (prompt('Digite um segundo valor decimal'))
let n3 = Number (prompt('Digite um terceiro valor decimal'))

triangulo = ((n1*n3)/2)
circulo = (3.14159* (n3*n3))
trapezio = ((n1+n2)*n3)/2
quadrado = n2*n2
retangulo = n1*n2

alert(`TRIANGULO:${triangulo.toFixed(3)}\nCIRCULO:${circulo.toFixed(3)}\nTRAPEZIO:${trapezio.toFixed(3)}\nQUADRADO:${quadrado.toFixed(3)}\nRETANGULO:${retangulo.toFiexed(3)}`)
