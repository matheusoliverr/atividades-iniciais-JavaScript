//Criar um programa que calcula a média das turmas de alunos e envia mensagem do cálculo da média.

const alunosDaTurmaA = [
{
    nome:"Mayk",
    nota:10
},
{
    nome:"Diego",
    nota:8.0
},
{
    nome:"André",
    nota:2.0
}
]

const alunosDaTurmaB = [
    {
        nome:"Matheus",
        nota:10
    },
    {
        nome:"José",
        nota:7.0
    },
    {
        nome:"Bruno",
        nota:4.0
    },
    {
        nome:"Leonardo",
        nota:10
    }
]

function calculaMedia(alunos){
    let soma=0
    for(let i=0; i<alunos.length;i++){
        soma=soma+alunos[i].nota
    }
    const media= soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media,turma) {
if(media>5){
    console.log(`A média da turma ${turma} foi de ${media}, parabéns!`)
}
else{
    console.log(`A média da turma ${turma} foi menor que 5.`)
}
}

enviaMensagem(media1,'turmaA')
enviaMensagem(media2,'turmaB')

//Reprovados

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if(aluno.nota<5) {
        aluno.reprovado=true;
    }
}

function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado.`)
    }
}

function alunoReprovado(alunos){
    for(let aluno of alunos){
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)
