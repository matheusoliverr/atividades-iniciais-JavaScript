//Cálculo de possibilidade de aposentadoria de acordo com idade, sexo e anos de contribuição

const person={
    nome:"Silvana",
    idade:60,
    sexo:"F",
    contribuicao:30,
}

if(person.sexo==="F"){
if(person.contribuicao>=30 && (person.idade+person.contribuicao)>=85){
    console.log(`Parabéns ${person.nome}, você pode se aposentar!`)
    }
    else{
        console.log(`Você não possui o tempo de contribuição mínimo para se aposentar.`)
    }
}
else{
    if(person.contribuicao>=35 && (person.idade+person.contribuicao)>=95){
            console.log(`Parabéns ${person.nome}, você pode se aposentar!`)
        }
        else{
            console.log(`Você não possui o tempo de contribuição mínimo para se aposentar.`)
        }
    }
    





//minimo homem= 35 anos, minimo mulher= 30 anos
//idade homem+contribuição=95 pode aposentar, idade mulher+contribuição=85 pode aposentar
