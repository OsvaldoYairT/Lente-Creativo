//Index
document.addEventListener('DOMContentLoaded', (event) => {
    const paginationLinks = document.querySelectorAll('.tm-paging-link');
    //Images
    const mainImage1 = document.getElementById('mainImage1');
    const mainImage2 = document.getElementById('mainImage2');
    const mainImage3 = document.getElementById('mainImage3');
    const mainImage4 = document.getElementById('mainImage4');
    const mainImage5 = document.getElementById('mainImage5');
    const mainImage6 = document.getElementById('mainImage6');
    const mainImage7 = document.getElementById('mainImage7');
    const mainImage8 = document.getElementById('mainImage8');
    const mainImage9 = document.getElementById('mainImage9');
    const mainImage10 = document.getElementById('mainImage10');
    const mainImage11 = document.getElementById('mainImage11');
    const mainImage12 = document.getElementById('mainImage12');
    const mainImage13 = document.getElementById('mainImage13');
    const mainImage14 = document.getElementById('mainImage14');
    const mainImage15 = document.getElementById('mainImage15');
    const mainImage16 = document.getElementById('mainImage16');
    //Letreros
    const paragraph1 = document.getElementById('paragraph1');
    const paragraph2 = document.getElementById('paragraph2');
    const paragraph3 = document.getElementById('paragraph3');
    const paragraph4 = document.getElementById('paragraph4');
    const paragraph5 = document.getElementById('paragraph5');
    const paragraph6 = document.getElementById('paragraph6');
    const paragraph7 = document.getElementById('paragraph7');
    const paragraph8 = document.getElementById('paragraph8');
    const paragraph9 = document.getElementById('paragraph9');
    const paragraph10 = document.getElementById('paragraph10');
    const paragraph11 = document.getElementById('paragraph11');
    const paragraph12 = document.getElementById('paragraph12');
    const paragraph13 = document.getElementById('paragraph13');
    const paragraph14 = document.getElementById('paragraph14');
    const paragraph15 = document.getElementById('paragraph15');
    const paragraph16 = document.getElementById('paragraph16');
    
    const page1 = document.getElementById('pages1');
    const page2 = document.getElementById('pages2');
    const page3 = document.getElementById('pages3');
    const page4 = document.getElementById('pages4');
    const page5 = document.getElementById('pages5');
    const page6 = document.getElementById('pages6');
    const page7 = document.getElementById('pages7');
    const page8 = document.getElementById('pages8');
    const page9 = document.getElementById('pages9');
    const page10 = document.getElementById('pages10');
    const page11 = document.getElementById('pages11');
    const page12 = document.getElementById('pages12');
    const page13 = document.getElementById('pages13');
    const page14 = document.getElementById('pages14');
    const page15 = document.getElementById('pages15');
    const page16 = document.getElementById('pages16');


    paginationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // Obtener el número de página desde el texto del enlace
            const pageNumber = parseInt(event.target.innerText);
            // Lógica para cambiar la imagen según la página
            switch (pageNumber) {
                case 1:
                    mainImage1.src = "img/Ilucionita/DSCN0073.jpg";
                    mainImage2.src = "img/xv/DSCN0004.jpg";
                    mainImage3.src = 'img/mike/DSCN0142.jpg';
                    mainImage4.src = 'img/Fer/DSCN0182.jpg';
                    mainImage5.src = 'img/Jen/DSCN9699.jpg';
                    mainImage6.src = 'img/amigos/DSCN0412.jpg';
                    mainImage7.src = 'img/try/DSCN0299.jpg';
                    mainImage8.src = 'img/soni/DSCN0191.jpg';
                    mainImage9.src = 'img/amigos_2/DSCN0251.jpg';
                    mainImage10.src = 'img/amigos_2/DSCN0278.jpg';
                    mainImage11.src = 'img/yacke/DSCN9800.jpg';
                    mainImage12.src = 'img/ivett/DSCN97055.jpg';
                    mainImage13.src = 'img/alan/DSCN9723.jpg';
                    mainImage14.src = 'img/amigos_3/DSCN01655.jpg';
                    mainImage15.src = 'img/amigos_3/DSCN01811.jpg';
                    mainImage16.src = 'img/dyf/DSCN9717.jpg';

                    paragraph1.textContent = 'Ilucionista';
                    paragraph2.textContent = 'XV';
                    paragraph3.textContent = 'Boy';
                    paragraph4.textContent = 'Girl';
                    paragraph5.textContent = 'Girl';
                    paragraph6.textContent = 'Friends';
                    paragraph7.textContent = 'Boy';
                    paragraph8.textContent = 'Bailarina';
                    paragraph9.textContent = 'Boy';
                    paragraph10.textContent = 'Boy';
                    paragraph11.textContent = 'Girl';
                    paragraph12.textContent = 'Girl';
                    paragraph13.textContent = 'Boy';
                    paragraph14.textContent = 'Boy';
                    paragraph15.textContent = 'Girl';
                    paragraph16.textContent = 'Parejas';
                    
                    break;
                case 2: // Cambiar por la imagen de la página 2
                    mainImage1.src = "img/paisajes/guanajuato/DSCN9889.jpg";
                    mainImage2.src = "img/paisajes/tepostlan/IMG_20220917_094821179.jpg";
                    mainImage3.src = 'img/paisajes/zacatlan/DSCN0041.jpg';
                    mainImage4.src = 'img/paisajes/real_chico/DSCN9713.jpg';
                    mainImage5.src = 'img/logo-creative - copia.png';
                    mainImage6.src = 'img/logo-creative - copia.png';
                    mainImage7.src = 'img/logo-creative - copia.png';
                    mainImage8.src = 'img/logo-creative - copia.png';
                    mainImage9.src = 'img/logo-creative - copia.png';
                    mainImage10.src = 'img/logo-creative - copia.png';
                    mainImage11.src = 'img/logo-creative - copia.png';
                    mainImage12.src = 'img/logo-creative - copia.png';
                    mainImage13.src = 'img/logo-creative - copia.png';
                    mainImage14.src = 'img/logo-creative - copia.png';
                    mainImage15.src = 'img/logo-creative - copia.png';
                    mainImage16.src = 'img/logo-creative - copia.png';

                    paragraph1.textContent = 'Guanajuato';
                    paragraph2.textContent = 'Tepoztlán';
                    paragraph3.textContent = 'Zacatlán';
                    paragraph4.textContent = 'Mineral del Chico';
                    paragraph5.textContent = 'Texto';
                    paragraph6.textContent = 'Texto';
                    paragraph7.textContent = 'Texto';
                    paragraph8.textContent = 'Texto';
                    paragraph9.textContent = 'Texto';
                    paragraph10.textContent = 'Texto';
                    paragraph11.textContent = 'Texto';
                    paragraph12.textContent = 'Texto';
                    paragraph13.textContent = 'Texto';
                    paragraph14.textContent = 'Texto';
                    paragraph15.textContent = 'Texto';
                    paragraph16.textContent = 'Texto';

                    page1.href="photo-details.html?set=17"
                    page2.href="photo-details.html?set=18"
                    page3.href="photo-details.html?set=19"
                    page4.href="photo-details.html?set=20"
                    page5.href="index.html"
                    page6.href="index.html"
                    page7.href="index.html"
                    page8.href="index.html"
                    page9.href="index.html"
                    page10.href="index.html"
                    page11.href="index.html"
                    page12.href="index.html"
                    page13.href="index.html"
                    page14.href="index.html"
                    page15.href="index.html"
                    page16.href="index.html"

                    break;
                case 3:
                    mainImage1.src = "img/logo-creative - copia.png";
                    mainImage2.src = "img/logo-creative - copia.png";
                    mainImage3.src = 'img/logo-creative - copia.png';
                    mainImage4.src = 'img/logo-creative - copia.png';
                    mainImage5.src = 'img/logo-creative - copia.png';
                    mainImage6.src = 'img/logo-creative - copia.png';
                    mainImage7.src = 'img/logo-creative - copia.png';
                    mainImage8.src = 'img/logo-creative - copia.png';
                    mainImage9.src = 'img/logo-creative - copia.png';
                    mainImage10.src = 'img/logo-creative - copia.png';
                    mainImage11.src = 'img/logo-creative - copia.png';
                    mainImage12.src = 'img/logo-creative - copia.png';
                    mainImage13.src = 'img/logo-creative - copia.png';
                    mainImage14.src = 'img/logo-creative - copia.png';
                    mainImage15.src = 'img/logo-creative - copia.png';
                    mainImage16.src = 'img/logo-creative - copia.png';

                    paragraph1.textContent = 'Texto';
                    paragraph2.textContent = 'Texto';
                    paragraph3.textContent = 'Texto';
                    paragraph4.textContent = 'Texto';
                    paragraph5.textContent = 'Texto';
                    paragraph6.textContent = 'Texto';
                    paragraph7.textContent = 'Texto';
                    paragraph8.textContent = 'Texto';
                    paragraph9.textContent = 'Texto';
                    paragraph10.textContent = 'Texto';
                    paragraph11.textContent = 'Texto';
                    paragraph12.textContent = 'Texto';
                    paragraph13.textContent = 'Texto';
                    paragraph14.textContent = 'Texto';
                    paragraph15.textContent = 'Texto';
                    paragraph16.textContent = 'Texto'; // Cambiar por la imagen de la página 3
                    break;
                case 4:
                    mainImage1.src = "img/logo-creative - copia.png";
                    mainImage2.src = "img/logo-creative - copia.png";
                    mainImage3.src = 'img/logo-creative - copia.png';
                    mainImage4.src = 'img/logo-creative - copia.png';
                    mainImage5.src = 'img/logo-creative - copia.png';
                    mainImage6.src = 'img/logo-creative - copia.png';
                    mainImage7.src = 'img/logo-creative - copia.png';
                    mainImage8.src = 'img/logo-creative - copia.png';
                    mainImage9.src = 'img/logo-creative - copia.png';
                    mainImage10.src = 'img/logo-creative - copia.png';
                    mainImage11.src = 'img/logo-creative - copia.png';
                    mainImage12.src = 'img/logo-creative - copia.png';
                    mainImage13.src = 'img/logo-creative - copia.png';
                    mainImage14.src = 'img/logo-creative - copia.png';
                    mainImage15.src = 'img/logo-creative - copia.png';
                    mainImage16.src = 'img/logo-creative - copia.png';

                    paragraph1.textContent = 'Texto';
                    paragraph2.textContent = 'Texto';
                    paragraph3.textContent = 'Texto';
                    paragraph4.textContent = 'Texto';
                    paragraph5.textContent = 'Texto';
                    paragraph6.textContent = 'Texto';
                    paragraph7.textContent = 'Texto';
                    paragraph8.textContent = 'Texto';
                    paragraph9.textContent = 'Texto';
                    paragraph10.textContent = 'Texto';
                    paragraph11.textContent = 'Texto';
                    paragraph12.textContent = 'Texto';
                    paragraph13.textContent = 'Texto';
                    paragraph14.textContent = 'Texto';
                    paragraph15.textContent = 'Texto';
                    paragraph16.textContent = 'Texto'; // Cambiar por la imagen de la página 4
                    break;
                default:
                    mainImage1.src = "img/logo-creative - copia.png";
                    mainImage2.src = "img/logo-creative - copia.png";
                    mainImage3.src = 'img/logo-creative - copia.png';
                    mainImage4.src = 'img/logo-creative - copia.png';
                    mainImage5.src = 'img/logo-creative - copia.png';
                    mainImage6.src = 'img/logo-creative - copia.png';
                    mainImage7.src = 'img/logo-creative - copia.png';
                    mainImage8.src = 'img/logo-creative - copia.png';
                    mainImage9.src = 'img/logo-creative - copia.png';
                    mainImage10.src = 'img/logo-creative - copia.png';
                    mainImage11.src = 'img/logo-creative - copia.png';
                    mainImage12.src = 'img/logo-creative - copia.png';
                    mainImage13.src = 'img/logo-creative - copia.png';
                    mainImage14.src = 'img/logo-creative - copia.png';
                    mainImage15.src = 'img/logo-creative - copia.png';
                    mainImage16.src = 'img/logo-creative - copia.png';

                    paragraph1.textContent = 'Texto';
                    paragraph2.textContent = 'Texto';
                    paragraph3.textContent = 'Texto';
                    paragraph4.textContent = 'Texto';
                    paragraph5.textContent = 'Texto';
                    paragraph6.textContent = 'Texto';
                    paragraph7.textContent = 'Texto';
                    paragraph8.textContent = 'Texto';
                    paragraph9.textContent = 'Texto';
                    paragraph10.textContent = 'Texto';
                    paragraph11.textContent = 'Texto';
                    paragraph12.textContent = 'Texto';
                    paragraph13.textContent = 'Texto';
                    paragraph14.textContent = 'Texto';
                    paragraph15.textContent = 'Texto';
                    paragraph16.textContent = 'Texto'; // Cambiar por una imagen por defecto o manejar otros casos
                    break;
            }
            // Opcional: Agregar o quitar clases de estilo para el enlace activo
            paginationLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');

            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Opcional: Hace el scroll suave
                });
            });
        });
    });

    // Ejemplo de lógica para el botón "Next Page" y "Previous"
    const btnPrev = document.querySelector('.tm-btn-prev');
    const btnNext = document.querySelector('.tm-btn-next');

    btnPrev.addEventListener('click', () => {
        // Lógica para retroceder página si es aplicable
        // Implementación según tus necesidades
    });

    btnNext.addEventListener('click', () => {
        // Lógica para avanzar página si es aplicable
        // Implementación según tus necesidades
    });
});


//Photos-details

document.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const setId = urlParams.get('set');
    const images =
    { 
            '1': 
            [
                "img/Ilucionita/DSCN0066.jpg",
                "img/Ilucionita/DSCN0073.jpg",
                "img/Ilucionita/DSCN0224.jpg",
                "img/Ilucionita/DSCN0232.jpg",
                "img/Ilucionita/DSCN0243.jpg",
                "img/Ilucionita/DSCN0280.jpg",
            // Agrega más rutas de imágenes según sea necesario
            ],
            '2': 
            [
                "img/xv/DSCN0004.jpg",
                "img/xv/DSCN0024.jpg",
                "img/xv/DSCN9972.jpg",
                "img/xv/DSCN9977.jpg",
                "img/xv/DSCN9984.jpg",
                // Agrega más rutas de imágenes según sea necesario
            ],
            '3': 
            [
                "img/mike/DSCN0132.jpg",
                "img/mike/DSCN0134.jpg",
                "img/mike/DSCN0142.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '4': 
            [
                "img/Fer/DSCN0182.jpg",
                "img/Fer/DSCN0184.jpg",
                "img/Fer/DSCN0178.jpg",
                "img/Fer/DSCN0050.jpg",
                "img/Fer/DSCN0046.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '5': 
            [
                "img/Jen/DSCN9699.jpg",
                "img/Jen/DSCN9715.jpg",
                "img/Jen/DSCN9803.jpg",
                "img/Jen/DSCN9785.jpg",
                "img/Jen/DSCN9763.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '6': 
            [
                "img/amigos/DSCN0412.jpg",
                "img/amigos/DSCN0395.jpg",
                "img/amigos/DSCN0402.jpg",
                "img/amigos/DSCN0411.jpg",
                "img/amigos/DSCN0418.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '7': 
            [
                "img/try/DSCN0299.jpg",
                "img/try/DSCN0286.jpg",
                "img/try/DSCN0305.jpg",
                "img/try/DSCN0306.jpg",
                "img/try/DSCN0312.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '8': 
            [
                "img/soni/DSCN0191.jpg",
                "img/soni/DSCN0186.jpg",
                "img/soni/DSCN0196.jpg",
                "img/soni/DSCN0202.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '9': 
            [
                "img/amigos_2/DSCN0251.jpg",
                "img/amigos_2/DSCN0250.jpg",
                "img/amigos_2/DSCN0252.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '10': 
            [
                "img/amigos_2/DSCN0278.jpg",
                "img/amigos_2/DSCN0282.jpg",
                "img/amigos_2/DSCN0283.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '11': 
            [
                "img/yacke/DSCN9800.jpg",
                "img/yacke/DSCN9804.jpg",
                "img/yacke/DSCN9814.jpg",
                "img/yacke/DSCN9783.jpg",
                "img/yacke/DSCN9788.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '12': 
            [
                "img/ivett/DSCN97055.jpg",
                "img/ivett/DSCN9700.jpg",
                "img/ivett/DSCN9692.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '13': 
            [
                "img/alan/DSCN9723.jpg",
                "img/alan/DSCN9724.jpg",
                "img/alan/DSCN9729.jpg",
                "img/alan/DSCN9787.jpg",
                "img/alan/DSCN9793.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '14': 
            [
                "img/amigos_3/DSCN01655.jpg",
                "img/amigos_3/DSCN01666.jpg",
                "img/amigos_3/DSCN01677.jpg",
                "img/amigos_3/DSCN0177.jpg",
                "img/amigos_3/DSCN0176.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '15': 
            [
                "img/amigos_3/DSCN01811.jpg",
                "img/amigos_3/DSCN01888.jpg",
                "img/amigos_3/DSCN018111.jpg",
                "img/amigos_3/DSCN018888.jpg",
                "img/amigos_3/DSCN0190.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '16': 
            [
                "img/dyf/DSCN9717.jpg",
                "img/dyf/DSCN9718.jpg",
                "img/dyf/DSCN9726.jpg",
                "img/dyf/DSCN9733.jpg",
                "img/dyf/DSCN9750.jpg",
                // Agrega más rutas de imágenes según sea necesario
            ],
            '17': 
            [
                "img/paisajes/guanajuato/DSCN9889.jpg",
                "img/paisajes/guanajuato/DSCN9900.jpg",
                "img/paisajes/guanajuato/DSCN9912.jpg",
                "img/paisajes/guanajuato/DSCN9916.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '18': 
            [
                "img/paisajes/tepostlan/IMG_20220917_094821179.jpg",
                "img/paisajes/tepostlan/IMG_20220917_094829790.jpg",
                "img/paisajes/tepostlan/IMG_20220917_125502902.jpg",
                "img/paisajes/tepostlan/IMG_20220917_130830557.jpg",
                "img/paisajes/tepostlan/IMG_20220918_095014594.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '19': 
            [
                "img/paisajes/zacatlan/DSCN0012.jpg",
                "img/paisajes/zacatlan/DSCN0041.jpg",
                "img/paisajes/zacatlan/DSCN9940.jpg",
                "img/paisajes/zacatlan/DSCN9956.jpg"
                // Agrega más rutas de imágenes según sea necesario
            ],
            '20': 
            [
                "img/paisajes/real_chico/DSCN9713.jpg",
                "img/paisajes/real_chico/DSCN9718.jpg",
                "img/paisajes/real_chico/DSCN9743.jpg",
                "img/paisajes/real_chico/DSCN9744.jpg",
                "img/paisajes/real_chico/DSCN9745.jpg",
                "img/paisajes/real_chico/DSCN9799.jpg",
                "img/paisajes/real_chico/DSCN9800.jpg",
                "img/paisajes/real_chico/DSCN9810.jpg"
            ]
    };
    const textSets = 
    {
        '1': 
        {
            heading: 'Ilucionista Magician Walker',
            title: 'Explora la Magia de Magician Walker ',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: '¡Gracias por permitirnos capturar la magia en cada uno de tus movimientos! Nos sentimos honrados de ser parte de este emocionante viaje hacia el ilusionismo. Cada foto es un reflejo de tu pasión y talento, y estamos seguros de que te permitirán revivir cada truco y asombro una y otra vez. Abajo encontrarás el enlace de descarga para que puedas conservar y compartir estos momentos mágicos. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos creando esta experiencia mágica para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '2': 
        {
            heading: 'Sesión de fotos XV',
            title: 'Celebra Tus XV Años',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: '¡Gracias por permitirnos capturar la magia de tus XV años! Nos sentimos honrados de ser parte de este momento tan especial en tu vida. Cada foto es un reflejo de tu belleza y alegría en este día tan memorable. Abajo encontrarás el enlace de descarga para que puedas conservar y compartir estos recuerdos siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '3': 
        {
            heading: 'Fotos de Perfil',
            title: 'Capturando Momentos Inolvidables',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: '¡Gracias por permitirnos ser parte de tu historia! Hemos disfrutado cada instante capturando momentos únicos y auténticos durante tu sesión de fotos. Cada imagen es un reflejo de tu personalidad y la conexión que compartimos. Abajo encontrarás el enlace de descarga para que puedas conservar estos recuerdos siempre. ¡Esperamos que disfrutes de cada foto tanto como nosotros disfrutamos creándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '4': 
        {
            heading: 'Sesión de fotos Girl',
            title: 'Momentos Especiales Capturados',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: '¡Gracias por permitirnos ser parte de tu viaje! Hemos disfrutado cada momento capturando instantes únicos y auténticos durante tu sesión de fotos. Cada imagen refleja tu esencia y la conexión que compartimos. Abajo encontrarás el enlace de descarga para que puedas conservar estos recuerdos siempre. ¡Esperamos que disfrutes de cada foto tanto como nosotros disfrutamos creándolas para ti!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '5': 
        {
            heading: 'Sesión de fotos Akatsuki',
            title: 'Gracias por Ser Nuestra Musa',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: 'Tu apoyo y colaboración han sido invaluables para nosotros. Nos sentimos afortunados de tener una amiga tan especial que estuvo dispuesta a ser nuestra modelo mientras practicábamos y perfeccionábamos nuestras habilidades. Cada foto captura no solo tu belleza, sino también la confianza y el entusiasmo que trajiste a cada sesión. Abajo encontrarás el enlace de descarga para que puedas conservar estos recuerdos siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas contigo!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '6': 
        {
            heading: 'Sesión de fotos de amigos',
            title: 'Gracias por Ser Parte de Nuestra Aventura',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Nos sentimos muy afortunados de haber contado con su participación. Su colaboración y energía positiva han sido fundamentales para que podamos practicar y mejorar nuestras habilidades fotográficas. Cada imagen captura no solo su belleza y amor, sino también la conexión y el entusiasmo que trajeron a cada sesión. Abajo encontrarán el enlace de descarga para que puedan conservar estos recuerdos siempre. ¡Esperamos que disfruten de cada imagen tanto como nosotros disfrutamos capturándolas para ustedes!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '7': 
        {
            heading: 'Sesión de fotos Tryboy',
            title: 'Un Encuentro Inolvidable',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: 'Agradecemos sinceramente a la persona desconocida que permitió que capturáramos su esencia a través de nuestra lente. Tu apertura y confianza nos dieron la oportunidad de crear algo verdaderamente especial. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '8': 
        {
            heading: 'Sesión de fotos Bailarina',
            title: 'La Gracia en Movimiento',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Agradecemos profundamente a la talentosa bailarina que nos permitió capturar su arte a través de nuestra lente. Tu elegancia y pasión en cada movimiento nos inspiraron y nos dieron la oportunidad de crear algo verdaderamente mágico. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '9': 
        {
            heading: 'Sesión de fotos Boy',
            title: 'Capturando la Esencia del Momento',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: 'Agradecemos sinceramente a la persona que nos permitió capturar su esencia a través de nuestra lente. Tu disposición y apertura nos brindaron la oportunidad de crear imágenes únicas y significativas. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '10': 
        {
            heading: 'Sesión de fotos Boy',
            title: 'Capturando la Esencia del Momento',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Agradecemos sinceramente a la persona que nos permitió capturar su esencia a través de nuestra lente. Tu disposición y apertura nos brindaron la oportunidad de crear imágenes únicas y significativas. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '11': 
        {
            heading: 'Sesión de fotos Girl',
            title: 'Celebrando la Amistad en la Universidad',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: '¡Gracias a nuestras maravillosas amigas por brindarnos la oportunidad de capturar su alegría y camaradería en la universidad! Nos sentimos honrados de haber podido inmortalizar estos momentos especiales. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ustedes!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '12': 
        {
            heading: 'Sesión de fotos Girl',
            title: 'Celebrando la Amistad en la Universidad',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: '¡Gracias a nuestras maravillosas amigas por brindarnos la oportunidad de capturar su alegría y camaradería en la universidad! Nos sentimos honrados de haber podido inmortalizar estos momentos especiales. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ustedes!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '13': 
        {
            heading: 'Sesión de fotos Motociclista',
            title: 'Aventura en Dos Ruedas',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: '¡Gracias a nuestro amigo por brindarnos la oportunidad de capturar su pasión por las motocicletas! Nos sentimos honrados de haber podido inmortalizar estos momentos únicos y llenos de adrenalina. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos siempre contigo. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '14': 
        {
            heading: 'Sesión de fotos Luces',
            title: 'Luz y Color en lo Desconocido',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Agradecemos a quienes nos permitieron capturar la magia de las luces LED en escenarios desconocidos. Estamos emocionados de compartir estos momentos llenos de color y brillo contigo. Abajo te dejamos el enlace de descarga para que puedas conservar estas imágenes y revivir su belleza cuando lo desees. ¡Esperamos que disfrutes cada detalle tanto como nosotros disfrutamos capturándolos para ti!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '15': 
        {
            heading: 'Sesión de fotos Luces',
            title: 'Luz y Color en lo Desconocido',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: 'Agradecemos a quienes nos permitieron capturar la magia de las luces LED en escenarios desconocidos. Estamos emocionados de compartir estos momentos llenos de color y brillo contigo. Abajo te dejamos el enlace de descarga para que puedas conservar estas imágenes y revivir su belleza cuando lo desees. ¡Esperamos que disfrutes cada detalle tanto como nosotros disfrutamos capturándolos para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '16': 
        {
            heading: 'Sesión de fotos San Valentin',
            title: 'Amor Capturado: Sesión de San Valentín',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Gracias por elegirnos para capturar su amor en esta sesión especial de San Valentín. Nos alegra haber sido testigos de momentos tan hermosos entre ustedes. Estamos seguros de que estas fotos llenas de amor les traerán alegría y les permitirán revivir esos momentos una y otra vez. Abajo les dejamos el enlace de descarga para que puedan conservar estos recuerdos para siempre. ¡Esperamos que disfruten cada imagen tanto como nosotros disfrutamos capturándolas para ustedes!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '17': 
        {
            heading: 'Fotos Guananjuato',
            title: 'Descubre la Belleza Natural de Guanajuato',
            //subtitle: 'Explora Nuestro Mundo Visual',
            subtitle: '¡Bienvenido a nuestra colección de fotos que capturan la majestuosidad natural de Guanajuato! Desde sus paisajes pintorescos hasta sus monumentos históricos, estas imágenes te transportarán a los rincones más hermosos de esta ciudad mexicana. Permítenos llevarte en un viaje visual a través de Guanajuato y descubre su encanto único a través de nuestras lentes. No dudes en explorar y descargar estas imágenes para llevar un pedacito de Guanajuato contigo donde quiera que vayas.',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '18': 
        {
            heading: 'Fotos Tepoztlán',
            title: 'Explora la Magia de Tepoztlán a Través de Nuestros Ojos',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: '¡Bienvenido a nuestra colección de fotos que capturan la esencia mística de Tepoztlán! Sumérgete en la belleza de este pueblo mágico a través de nuestras imágenes, donde cada rincón cuenta una historia única. Desde sus montañas imponentes hasta sus coloridos mercados y tranquilas calles empedradas, estas fotos te invitan a descubrir la magia de Tepoztlán desde cualquier lugar del mundo. Disfruta de un viaje visual que te transportará directamente a este paraíso terrenal y te dejará con ganas de explorar más.',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '19': 
        {
            heading: 'Fotos Zacatlán',
            title: 'Descubre la Belleza de Zacatlán a Través de Nuestras Fotos',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Bienvenido a nuestra galería de fotos que capturan la esencia única de Zacatlán. Desde sus impresionantes paisajes montañosos hasta sus pintorescas calles y la calidez de su gente, cada imagen cuenta una historia de tradición y belleza natural. Explora con nosotros los rincones más encantadores de Zacatlán, donde cada foto te invita a sumergirte en la tranquilidad y la serenidad de este pueblo mágico. Esperamos que estas imágenes te inspiren a planear tu próxima aventura en Zacatlán y a disfrutar de su riqueza cultural y natural.',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '20': 
        {
            heading: 'Fotos Mineral del Chico',
            title: 'Descubre la Belleza de Mineral del Chico a Través de Nuestras Fotos',
            //subtitle: 'Descubre la Belleza Natural',
            subtitle: 'Bienvenido a nuestra galería dedicada a la belleza natural de Mineral del Chico. Cada imagen captura la magia de sus paisajes montañosos, sus bosques llenos de vida y las impresionantes vistas panorámicas que ofrecen sus miradores. Desde las alturas podrás apreciar un pueblo mágico rodeado de naturaleza, envuelto en neblina, luz y tranquilidad. Explora con nosotros estos espacios donde la aventura y la serenidad se unen, y déjate inspirar por la grandeza de Mineral del Chico. Quizás tu próxima escapada esté más cerca de lo que imaginas.',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'JPG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        }
    };
        const selectedImages = images[setId] || [];
        const selectedTexts = textSets[setId] || textSets['1'];
        const carouselInner = document.getElementById("carouselInner");
    selectedImages.forEach((image, index) => {
        const div = document.createElement("div");
        div.className = "carousel-item" + (index === 0 ? " active" : "");
        const img = document.createElement("img");
        img.src = image;
        img.className = "d-block w-100 carousel-image";
        img.alt = "Image " + (index + 1);
        div.appendChild(img);
        carouselInner.appendChild(div);
    });
    document.getElementById('heading').innerText = selectedTexts.heading;
    document.getElementById('title').innerText = selectedTexts.title;
    document.getElementById('subtitle').innerText = selectedTexts.subtitle;
    document.getElementById('maintext').innerText = selectedTexts.mainText;//No sirve
    document.getElementById('download-button').innerText = selectedTexts.downloadButton;
    document.getElementById('dimensions-text').innerText = selectedTexts.dimensions;
    document.getElementById('format-text').innerText = selectedTexts.format;
    document.getElementById('considerations-text').innerText = selectedTexts.considerations;
    document.getElementById('social-media-title').innerText = selectedTexts.socialMedia;
});

document.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const setId = urlParams.get('set');
    const textTags = 
    {
        '1': 
        {
            tag1: 'Magia ',
            tag2: 'Ilusionismo ',
            tag3: 'Trucos ',
            tag4: 'Abracadabra ',
            tag5: 'Cartas ',
            tag6: 'Sombrero ',
            tag7: 'Varita '
        },
        '2': 
        {
            tag1: 'Fiesta',
            tag2: 'Quinceañera',
            tag3: 'Baile',
            tag4: 'Vestido',
            tag5: 'Celebración',
            tag6: 'Pastel',
            tag7: 'Regalo'
        },
        '3': 
        {
            tag1: 'Elegante',
            tag2: 'Traje',
            tag3: 'Elegancia',
            tag4: 'Formal',
            tag5: 'Caballero',
            tag6: 'Sofisticado',
            tag7: 'Detalle'
        },
        '4': 
        {
            tag1: 'Sonrisa',
            tag2: 'Elegancia',
            tag3: 'Glamour',
            tag4: 'Modelo',
            tag5: 'Belleza',
            tag6: 'Detalle',
            tag7: 'Sofisticado'
        },
        '5': 
        {
            tag1: 'Sonrisa',
            tag2: 'Elegancia',
            tag3: 'Glamour',
            tag4: 'Modelo',
            tag5: 'Belleza',
            tag6: 'Detalle',
            tag7: 'Sofisticado'
        },
        '6': 
        {
            tag1: 'Amigos',
            tag2: 'Compañerismo',
            tag3: 'Diversión',
            tag4: 'Aventura',
            tag5: 'Confianza',
            tag6: 'Recuerdos',
            tag7: 'Apoyo'
        },
        '7': 
        {
            tag1: 'Elegante',
            tag2: 'Traje',
            tag3: 'Elegancia',
            tag4: 'Formal',
            tag5: 'Caballero',
            tag6: 'Sofisticado',
            tag7: 'Detalle'
        },
        '8': 
        {
            tag1: 'Bailarina',
            tag2: 'Profesional',
            tag3: 'Danza',
            tag4: 'Coreografía',
            tag5: 'Elegancia',
            tag6: 'Expresión',
            tag7: 'Movimiento'
        },
        '9': 
        {
            tag1: 'Elegante',
            tag2: 'Traje',
            tag3: 'Elegancia',
            tag4: 'Formal',
            tag5: 'Caballero',
            tag6: 'Sofisticado',
            tag7: 'Detalle'
        },
        '10': 
        {
            tag1: 'Elegante',
            tag2: 'Traje',
            tag3: 'Elegancia',
            tag4: 'Formal',
            tag5: 'Caballero',
            tag6: 'Sofisticado',
            tag7: 'Detalle'
        },
        '11': 
        {
            tag1: 'Sonrisa',
            tag2: 'Elegancia',
            tag3: 'Glamour',
            tag4: 'Modelo',
            tag5: 'Belleza',
            tag6: 'Detalle',
            tag7: 'Sofisticado'
        },
        '12': 
        {
            tag1: 'Sonrisa',
            tag2: 'Elegancia',
            tag3: 'Glamour',
            tag4: 'Modelo',
            tag5: 'Belleza',
            tag6: 'Detalle',
            tag7: 'Sofisticado'
        },
        '13': 
        {
            tag1: 'Hombre',
            tag2: 'Motos',
            tag3: 'Aventura',
            tag4: 'Velocidad',
            tag5: 'Emoción',
            tag6: 'Libertad',
            tag7: 'Adrenalina'
        },
        '14': 
        {
            tag1: 'Elegante',
            tag2: 'Traje',
            tag3: 'Elegancia',
            tag4: 'Formal',
            tag5: 'Caballero',
            tag6: 'Sofisticado',
            tag7: 'Detalle'
        },
        '15': 
        {
            tag1: 'Sonrisa',
            tag2: 'Elegancia',
            tag3: 'Glamour',
            tag4: 'Modelo',
            tag5: 'Belleza',
            tag6: 'Detalle',
            tag7: 'Sofisticado'
        },
        '16': 
        {
            tag1: 'Amor',
            tag2: 'Romance',
            tag3: 'Pareja',
            tag4: 'Cariño',
            tag5: 'Corazones',
            tag6: 'Regalos',
            tag7: 'Amistad'
        },
        '17': 
        {
            tag1: 'Callejones',
            tag2: 'Arquitectura',
            tag3: 'Colorido',
            tag4: 'Historia',
            tag5: 'Cultura',
            tag6: 'Tradición',
            tag7: 'Paisajes'
        },
        '18': 
        {
            tag1: 'Montañas',
            tag2: 'Pueblos Mágicos',
            tag3: 'Cultura',
            tag4: 'Historia',
            tag5: 'Mercados',
            tag6: 'Tradición',
            tag7: 'Naturaleza'
        },
        '19': 
        {
            tag1: 'Relojes',
            tag2: 'Manzanas',
            tag3: 'Cascadas',
            tag4: 'Pueblos Mágicos',
            tag5: 'Murales',
            tag6: 'Paisajes',
            tag7: 'Historia'
        },
        '20': 
        {
            tag1: 'Bosque',
            tag2: 'Naturaleza',
            tag3: 'Neblina',
            tag4: 'Pueblos Mágicos',
            tag5: 'Mirador',
            tag6: 'Paisajes',
            tag7: 'Historia'
        }
    };
    
    const selectedTag = textTags[setId] || textTags['1'];
    document.getElementById('tags1').innerText = selectedTag.tag1;
    document.getElementById('tags2').innerText = selectedTag.tag2;
    document.getElementById('tags3').innerText = selectedTag.tag3;
    document.getElementById('tags4').innerText = selectedTag.tag4;
    document.getElementById('tags5').innerText = selectedTag.tag5;
    document.getElementById('tags6').innerText = selectedTag.tag6;
    document.getElementById('tags7').innerText = selectedTag.tag7;
});



//Videos-details

const videos = {
    '1': "https://www.youtube.com/embed/OOBfRQ_mEx8?autoplay=1&mute=1&loop=1&playlist=OOBfRQ_mEx8", 
    '2': "https://www.youtube.com/embed/T8H-UG4WTDs?autoplay=1&mute=1&loop=1&playlist=T8H-UG4WTDs",
    '3': "https://www.youtube.com/embed/sma9h65rlWw?autoplay=1&mute=1&loop=1&playlist=sma9h65rlWw",
    '4': "https://www.youtube.com/embed/0G-oAtN2wfU?autoplay=1&mute=1&loop=1&playlist=0G-oAtN2wfU",
    '5': "https://www.youtube.com/embed/yyuhfMElShU?autoplay=1&mute=1&loop=1&playlist=yyuhfMElShU",
    '6': "https://www.youtube.com/embed/cbaL_5SPSy4?autoplay=1&mute=1&loop=1&playlist=cbaL_5SPSy4",
    '7': "https://www.youtube.com/embed/Zl-_ebq_LWg?autoplay=1&mute=1&loop=1&playlist=Zl-_ebq_LWg",
    '8': "https://www.youtube.com/embed/azDqH8FxG64?autoplay=1&mute=1&loop=1&playlist=azDqH8FxG64"
    // Agrega más enlaces de videos según sea necesario
};
const textSets = 
{
    '1': 
    {
        heading: 'Sesión de fotos en la Universidad PT. 2',
        title: 'Ilucionista Magician Walker',
        subtitle: 'Explora Nuestro Mundo Visual',
        mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
        downloadButton: 'Download',
        dimensions: '3000x4000',
        format: 'JPG',
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '2': 
    {
        heading: 'Sesión de fotos "ESPECIAL 14 DE FEBRERO" ',
        title: 'Fotógrafo Nature Walker',
        subtitle: 'Descubre la Belleza Natural',
        mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
        downloadButton: 'Descargar',
        dimensions: '4000x5000',
        format: 'PNG',
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '3': 
    {
        heading: 'Sesión Fotográfica Navideña',
        title: 'Ilucionista Magician Walker',
        subtitle: 'Explora Nuestro Mundo Visual',
        mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
        downloadButton: 'Download',
        dimensions: '3000x4000',
        format: 'JPG',
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '4': 
    {
        heading: 'Sesión de fotos en la Universidad',
        title: 'Fotógrafo Nature Walker',
        subtitle: 'Descubre la Belleza Natural',
        mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
        downloadButton: 'Descargar',
        dimensions: '4000x5000',
        format: 'PNG',
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '5': 
    {
        heading: 'Sesión de fotos de XV años',
        title: 'Ilucionista Magician Walker',
        subtitle: 'Explora Nuestro Mundo Visual',
        mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
        downloadButton: 'Download',
        dimensions: '3000x4000',
        format: 'JPG',
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '6': 
    {
        heading: 'Sesión de fotos a desconocidos PT. 2',
        title: 'Fotógrafo Nature Walker',
        subtitle: 'Descubre la Belleza Natural',
        mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
        downloadButton: 'Descargar',
        dimensions: '4000x5000',
        format: 'PNG',
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '7': 
    {
        heading: 'Sesión de Fotos en Moto',
        title: 'Ilucionista Magician Walker',
        subtitle: 'Explora Nuestro Mundo Visual',
        mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
        downloadButton: 'Download',
        dimensions: '3000x4000',
        format: 'JPG',
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como lente_creativoo y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    },
    '8': 
    {
        heading: 'FOTOGRAFIANDO a gente DESCONOCIDA',
        title: 'Fotógrafo Nature Walker',
        subtitle: 'Descubre la Belleza Natural',
        mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
        downloadButton: 'Descargar',
        dimensions: '4000x5000',
        format: 'PNG',
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como lente_creativoo y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const setId = urlParams.get('vid');
    const videoSrc = videos[setId]; // Obtén el enlace del video

    if (videoSrc) {
        const videoGallery = document.getElementById("videoGallery");
        videoGallery.innerHTML = ''; // Limpia el contenedor antes de agregar el nuevo iframe

        const div = document.createElement("div");
        div.className = 'col-12 mb-4 video-container'; // Agrega clases de Bootstrap para estilos

        const iframe = document.createElement("iframe");
        iframe.width = "1140";
        iframe.height = "850"; // Ajusta la altura según sea necesario
        iframe.src = videoSrc;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        div.appendChild(iframe);
        videoGallery.appendChild(div);
    } else {
        console.error('Video ID not found or invalid');
    }
    const textVideos = 
    {
        '1': 
        {
            headings: 'Sesión de fotos en la Universidad',
            titles: 'Este video captura la esencia de la amistad a través de una sesión de fotos única entre dos amigas. Desde risas contagiosas hasta momentos de complicidad, cada imagen cuenta la historia de una amistad verdadera y llena de aventuras.',
            subtitles: '6:08',
            tag1: 'Amigas',
            tag2: 'Fotos',
            tag3: 'Sonrisas',
            tag4: 'Recuerdos',
            tag5: 'Diversión',
            tag6: 'Amistad',
            tag7: 'Complicidad'
        },
        '2': 
        {
            headings: 'Sesión de fotos San Valentin',
            titles: 'Sumérgete en la magia del amor con este video que captura la esencia de una pareja enamorada en su sesión fotográfica del Día de San Valentín. Cada imagen está impregnada de romance y ternura, capturando momentos que reflejan la conexión profunda entre dos corazones. Descubre cómo el amor se hace visible en cada gesto, sonrisa y mirada compartida en este día especial.',
            subtitles: '2:11',
            tag1: 'Amigas',
            tag2: 'Fotos',
            tag3: 'Sonrisas',
            tag4: 'Recuerdos',
            tag5: 'Diversión',
            tag6: 'Amistad',
            tag7: 'Complicidad'
        },
        '3': 
        {
            headings: 'Sesión de fotos de Navidad',
            titles: '¡Celebra la magia de la Navidad con nosotros! Sumérgete en este encantador video que captura la alegría y el espíritu festivo de una pareja/amigos durante la temporada navideña. Desde risas junto al árbol decorado hasta momentos íntimos junto al fuego, cada imagen refleja la calidez y la felicidad de compartir este tiempo especial juntos. Descubre cómo cada instante brilla con amor, amistad y la magia única de la Navidad.',
            subtitles: '5:45',
            tag1: 'Amigas',
            tag2: 'Fotos',
            tag3: 'Sonrisas',
            tag4: 'Recuerdos',
            tag5: 'Navidad',
            tag6: 'Amistad',
            tag7: 'Festejo'
        },
        '4': 
        {
            headings: 'Sesión de fotos en la Universidad',
            titles: 'Revive los mejores momentos con nuestros amigos universitarios en esta sesión de fotos llena de risas y recuerdos inolvidables. Capturamos la esencia de nuestra amistad en cada imagen, desde los días de estudio hasta las aventuras fuera del aula. Únete a nosotros mientras compartimos risas y crecemos juntos en este viaje universitario que nunca olvidaremos.',
            subtitles: '4:07',
            tag1: 'Amigas',
            tag2: 'Fotos',
            tag3: 'Sonrisas',
            tag4: 'Recuerdos',
            tag5: 'Diversión',
            tag6: 'Amistad',
            tag7: 'Complicidad'
        },
        '5': 
        {
            headings: 'Sesión de fotos de XV años',
            titles: 'Sumérgete en la magia y la elegancia de esta sesión de fotos de XV años, donde cada imagen captura la belleza y la ilusión de esta etapa tan especial. Desde los vestidos deslumbrantes hasta los detalles sofisticados, cada momento refleja la celebración de una joven en su día más especial.',
            subtitles: '9:55',
            tag1: 'Fiesta',
            tag2: 'Quinceañera',
            tag3: 'Baile',
            tag4: 'Vestido',
            tag5: 'Celebración',
            tag6: 'Pastel',
            tag7: 'Regalo'
        },
        '6': 
        {
            headings: 'Sesión de fotos a desconocidos PT. 2',
            titles: 'Explora la diversidad y la singularidad en esta sesión de fotos a desconocidos, donde cada retrato revela historias únicas y expresiones auténticas. Capturamos momentos espontáneos que celebran la belleza y la individualidad de cada persona.',
            subtitles: '10:09',
            tag1: 'Amigas',
            tag2: 'Fotos',
            tag3: 'Sonrisas',
            tag4: 'Recuerdos',
            tag5: 'Diversión',
            tag6: 'Amistad',
            tag7: 'Bailarinas'
        },
        '7': 
        {
            headings: 'Sesión de Fotos en Moto',
            titles: 'Sumérgete en la adrenalina y la libertad con nuestra sesión de fotos en moto. Capturamos la emoción de cada aceleración y el estilo único de los motociclistas en acción. Cada fotografía resalta la pasión y la energía que define al modelo con las motos',
            subtitles: '7:15',
            tag1: 'Hombre',
            tag2: 'Motos',
            tag3: 'Aventura',
            tag4: 'Velocidad',
            tag5: 'Emoción',
            tag6: 'Libertad',
            tag7: 'Adrenalina'
        },
        '8': 
        {
            headings: 'Sesión de fotos a desconocidos',
            titles: 'Explora la diversidad y la singularidad en esta sesión de fotos a desconocidos, donde cada retrato revela historias únicas y expresiones auténticas. Capturamos momentos espontáneos que celebran la belleza y la individualidad de cada persona.',
            subtitles: '10:48',
            tag1: 'Amigas',
            tag2: 'Fotos',
            tag3: 'Sonrisas',
            tag4: 'Recuerdos',
            tag5: 'Diversión',
            tag6: 'Amistad',
            tag7: 'Complicidad'
        }
    };
    
    const selectedVideos = textVideos[setId] || textVideos['1'];
    document.getElementById('heading-s').innerText = selectedVideos.headings;
    document.getElementById('titles').innerText = selectedVideos.titles;
    document.getElementById('subtitles').innerText = selectedVideos.subtitles;
    document.getElementById('tags1').innerText = selectedVideos.tag1;
    document.getElementById('tags2').innerText = selectedVideos.tag2;
    document.getElementById('tags3').innerText = selectedVideos.tag3;
    document.getElementById('tags4').innerText = selectedVideos.tag4;
    document.getElementById('tags5').innerText = selectedVideos.tag5;
    document.getElementById('tags6').innerText = selectedVideos.tag6;
    document.getElementById('tags7').innerText = selectedVideos.tag7;
});

//Videos
document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos todos los enlaces "Ver más"
    const links = [
        { id: 'video9', newHref: 'videos.html' },
        { id: 'video10', newHref: 'videos.html' },
        { id: 'video11', newHref: 'videos.html' },
        { id: 'video12', newHref: 'videos.html' },
        { id: 'video13', newHref: 'videos.html' },
        { id: 'video14', newHref: 'videos.html' },
        { id: 'video15', newHref: 'videos.html' },
        { id: 'video16', newHref: 'videos.html' }
    ];

    // Iteramos sobre los enlaces y actualizamos el href
    links.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            element.href = link.newHref;
        }
    });
});















