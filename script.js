// Cadastro de Pessoas Colaboradoras (RH)

// Coletando informações do usuário
const nomeCompleto = prompt("Digite seu nome completo:");
const dataNascimento = prompt("Digite sua data de nascimento (dd/mm/aaaa):");
const endereco = prompt("Digite seu endereço:");
const cpf = prompt("Digite seu CPF:");
const escolaridade = prompt("Digite sua escolaridade:");
const possuiCnh = confirm("Você possui CNH? (OK para Sim, Cancelar para Não)");
const quantosFilhos = Number(prompt("Quantos filhos você possui?"));
const cargoAtual = prompt("Qual seu cargo atual?");
const salario = Number(prompt("Digite seu salário:"));
const recebeComissao = confirm("Você recebe comissão? (OK para Sim, Cancelar para Não)");
const anoAdmissao = Number(prompt("Em que ano você foi admitido na empresa?"));



// Exibindo Relatório
console.log("Cadastro Realizado com Sucesso!");
console.log(`Nome: ${nomeCompleto}`);
console.log(`Data de Nascimento: ${dataNascimento}`);
console.log(`Endereço: ${endereco}`);
console.log(`CPF: ${cpf}`);
console.log(`Escolaridade: ${escolaridade}`);
console.log(`Possui CNH: ${possuiCnh}`);
console.log(`Número de Filhos: ${quantosFilhos}`);
console.log(`Cargo Atual: ${cargoAtual}`);
console.log(`Salário: R$${salario.toFixed(2)}`);
console.log(`Recebe Comissão: ${recebeComissao}`);
console.log(`Ano de Admissão: ${anoAdmissao}`);


console.log(`
    Cadastro Realizado com Sucesso!
    
    **Informações Cadastradas:**
    - Nome: ${nomeCompleto} (Tipo: ${typeof nomeCompleto})
    - Data de Nascimento: ${dataNascimento} (Tipo: ${typeof dataNascimento})
    - Endereço: ${endereco} (Tipo: ${typeof endereco})
    - CPF: ${cpf} (Tipo: ${typeof cpf})
    - Escolaridade: ${escolaridade} (Tipo: ${typeof escolaridade})
    - Possui CNH: ${possuiCnh} (Tipo: ${typeof possuiCnh})
    - Número de Filhos: ${quantosFilhos} (Tipo: ${typeof quantosFilhos})
    - Cargo Atual: ${cargoAtual} (Tipo: ${typeof cargoAtual})
    - Salário: R$${salario.toFixed(2)} (Tipo: ${typeof salario})
    - Recebe Comissão: ${recebeComissao} (Tipo: ${typeof recebeComissao})
    - Ano de Admissão: ${anoAdmissao} (Tipo: ${typeof anoAdmissao})
    `);

// Verificação de Tipos
console.log(typeof nomeCompleto); // Deve exibir "string"
console.log(typeof dataNascimento); // Deve exibir "string"
console.log(typeof endereco); // Deve exibir "string"
console.log(typeof cpf); // Deve exibir "string"
console.log(typeof escolaridade); // Deve exibir "string"
console.log(typeof possuiCnh); // Deve exibir "boolean"
console.log(typeof quantosFilhos); // Deve exibir "number"
console.log(typeof cargoAtual); // Deve exibir "string"
console.log(typeof salario); // Deve exibir "number"
console.log(typeof recebeComissao); // Deve exibir "boolean"
console.log(typeof anoAdmissao); // Deve exibir "number"