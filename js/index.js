// Videos
let magic = 'https://www.youtube.com/embed/b0djeyLi_Jg'
let paradise = 'https://www.youtube.com/embed/pNg2NoAwlkg'
let sky = 'https://www.youtube.com/embed/uREb6T4Tsgk'
let adventure = 'https://www.youtube.com/embed/vzHwYQJ9cCA'
let vivaLaVida = 'https://www.youtube.com/embed/vUnWFsc5WBU'

// Definindo objeto iframe
let iframe = document.querySelector("#destaque iframe")


// function para exibir video
function exibeVideo(numero) {

    switch (numero) {
        case 1:
            iframe.setAttribute("src", magic)
            break;
        case 2:
            iframe.setAttribute("src", paradise)
            break;
        case 3:
            iframe.setAttribute("src", sky)
            break;
        case 4:
            iframe.setAttribute("src", adventure)
            break;
        case 5:
            iframe.setAttribute("src", vivaLaVida)
            break;

    }

    // definindo atributo




}