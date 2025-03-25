let r, c, a, v, pi;
r = parseFloat(prompt("Digite o raio do circulo","Raio Circulo"));
pi = Math.PI
c = 2 * pi * r;
c = (c.toFixed(2));
a = pi * Math.pow(r, 2);
a = (a.toFixed(2));
v = (3/4) * pi * Math.pow(r, 3);
v = (v.toFixed(2));
console.log(`O comprimento da esfera é: ${c}<br>`)
console.log(`A área da esfera é: ${a}<br>`)
console.log(`O volume da esfera é: ${v}<br>`)