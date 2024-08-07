const pessoas: { nome: string, idade: number, cidade: string }[] = [
    { nome: 'João', idade: 30, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 40, cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 28, cidade: 'São Paulo' }
  ];
  
const grupos: { [cidade: string]: { nome: string, idade: number, cidade: string }[] } = {};
pessoas.forEach(pessoa => {
    const cidade = pessoa.cidade;
    if (!grupos[cidade]) {
      grupos[cidade] = [];
    }
    grupos[cidade].push(pessoa);
  });
  
console.log(grupos);