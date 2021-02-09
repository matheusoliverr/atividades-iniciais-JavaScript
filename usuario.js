//user:name(Carlos,Jasmine,Tuane),tech[(html,css),(javascript,css),(html,node.js)]
//Carlos trabalha com HTML, CSS; Jasmine trabalha com Javascript, CSS; Tuane trabalha com HTML, Node.js

const users = [
    {
        name: "Carlos",
        technologies: ["HTML", "CSS"]
    },
    {
        name: "Jasmine",
        technologies: ["JavaScript", "CSS"]
    },
    {
        name: "Tuane",
        technologies: ["HTML", "Node.js"]
    }
]


for (let user of users) {
    console.log(`${user.name} works with ${user.technologies.join(' ')}`)
}


function checkCSS(user) {
    for (let tech of user.technologies) {
        if (tech == 'CSS') return true
    }

    return false
}

for (let i = 0; i < users.length; i++) {
    const worksWithCSS = checkCSS(users[i])

    if(worksWithCSS) {
        console.log(`The user ${users[i].name} works with CSS`)
    }
}


