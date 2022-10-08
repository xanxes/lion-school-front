'use strict'

import {Cursos} from './fetchs.js';

let courses = await Cursos();

function criarCard(curso){
    const container = document.querySelector('#cards');
    const div = document.createElement('div');
    div.classList.add('subject');
    div.id = curso.sigla.toLowerCase()
    div.innerHTML = `
        <img src="${curso.icone}" class="cardDs"></img>
    `
    container.appendChild(div);

    div.addEventListener('click', (elemento) => {
        elemento.preventDefault(); 
        const course = div.id;

        localStorage.setItem('course', course);

        location.href = "./turma.html";
    
    })

    
}


courses.forEach(criarCard)