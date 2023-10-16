function mostrarDiv(id) {
    const divs = document.querySelectorAll('.secao');
//    esconde todas as divs
    for (const div of divs)
        div.style.display = 'none';

    const divAMostrar = document.getElementById(id);
    // troca a prop css para que a div escolhida seja renderizada
    if (divAMostrar)
        divAMostrar.style.display = 'block';
}
