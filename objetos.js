//empresa: nome rocketseat, cor roxo, foco programação, endereço: rua guilherme gembala numero 260
//A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

const empresa={
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programação",
    endereco:{
        rua:"Rua Guilherme Gembala",
        numero:260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)


//programador: nome, idade, tecnologias: nome e especialidade
//nome:C++, especialidade: Desktop; nome:Python, especialidade:Data Science; nome:JavaScript, especialidade:Web/Mobile
//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const programador={
    nome:"Carlos",
    idade:32,
    tecnologias:[
        {
            nome:"C++",
            especialidade:"Desktop"
        },
        {
            nome:"Python",
            especialidade:"Data Science"
        },
        {
            nome:"JavaScript",
            especialidade:"Web/Mobile"
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)