const pessoa = { nome: 'João', idade: 30, habilidades: ['JavaScript', 'HTML', 'CSS']};
const data = new Date('2022-01-01T12:00:00');

pessoa.nome = 'João Paulo'; // altera o valor da propriedade nome
pessoa['idade'] = 31; // altera o valor da propriedade idade

console.log(pessoa); // { nome: 'João Paulo', idade: 31 }



pessoa['cidade'] = 'São Paulo'; // adiciona uma nova propriedade cidade
pessoa['pais'] = 'Brasil'; // adiciona uma nova propriedade pais

console.log(pessoa); // { nome: 'João', idade: 30, cidade: 'São Paulo', pais: 'Brasil' }

//delete pessoa.cidade; // remove a propriedade cidade

console.log(pessoa); // { nome: 'João', idade: 30 }

pessoa.habilidades[1] = 'React'; // altera o valor do segundo elemento do array

console.log(pessoa); // { nome: 'João', idade: 30, habilidades: ['JavaScript', 'React', 'CSS'] }



data.setFullYear(2023); // altera o ano para 2023
data.setHours(14); // altera a hora para 14:00

console.log(data); // 2023-01-01T14:00:00