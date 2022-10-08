'use strict'

const Cursos = async () => {
    const url = 'https://lion-school-senai.netlify.app/.netlify/functions/api/course';
    const data = await fetch(url);
    const curso = await data.json();

return curso
 
}

const getListaAlunos = async (course) => {
    const url = `https://lion-school-senai.netlify.app/.netlify/functions/api/alunos/${course}`
    const response = await fetch(url)
    const data = await response.json()
    .then((jsonBody) => {
        //mudar o titulo
        document.querySelector("#title").innerHTML = jsonBody[1].curso[0].nome.split('-')[1].replace('Técnico em', '')
        
    })
}





const listarEstudantes = async(curso) => {

    const url = `https://projeto-lions.netlify.app/.netlify/functions/api/alunos/?courseNome=${curso}`

    const response = await fetch(url)

    const listaAlunos = await response.json()

    return listaAlunos.alunos

}



const getAlunosStatus = async (status) => {

    const url = `https://lion-school-senai.netlify.app/.netlify/functions/api//alunos/status/${status}`

    const response = await fetch(url)

    const statusAlunos = await response.json()

    return statusAlunos
}




const getAlunoMatricula = async (matricula) => {

    const url = `https://lion-school-senai.netlify.app/.netlify/functions/api//aluno/${matricula}`

    const response = await fetch(url)

    const aluno = await response.json()

    return aluno
}



export{
    Cursos,
    listarEstudantes,
    getAlunoMatricula,
    getAlunosStatus,
    getListaAlunos
    
}