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

                    paragraph1.textContent = 'Guanajuato';
                    paragraph2.textContent = 'Tepoztlán';
                    paragraph3.textContent = 'Zacatlán';
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
                    paragraph16.textContent = 'Texto';
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
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
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
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
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
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '7': 
        {
            heading: 'Sesión de fotos Tryboy',
            title: 'Ilucionista Magician Walker',
            subtitle: 'Explora Nuestro Mundo Visual',
            mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '8': 
        {
            heading: 'Sesión de fotos Bailarina',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '9': 
        {
            heading: 'Sesión de fotos Boy',
            title: 'Ilucionista Magician Walker',
            subtitle: 'Explora Nuestro Mundo Visual',
            mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '10': 
        {
            heading: 'Sesión de fotos Boy',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '11': 
        {
            heading: 'Sesión de fotos Girl',
            title: 'Ilucionista Magician Walker',
            subtitle: 'Explora Nuestro Mundo Visual',
            mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '12': 
        {
            heading: 'Sesión de fotos Girl',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '13': 
        {
            heading: 'Sesión de fotos Girl motociclista',
            title: 'Ilucionista Magician Walker',
            subtitle: 'Explora Nuestro Mundo Visual',
            mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '14': 
        {
            heading: 'Sesión de fotos Luces',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '15': 
        {
            heading: 'Sesión de fotos Luces',
            title: 'Ilucionista Magician Walker',
            subtitle: 'Explora Nuestro Mundo Visual',
            mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '16': 
        {
            heading: 'Sesión de fotos San Valentin',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '17': 
        {
            heading: 'Fotos Guananjuato',
            title: 'Ilucionista Magician Walker',
            subtitle: 'Explora Nuestro Mundo Visual',
            mainText: '¡Gracias por escogernos para capturar tus momentos especiales! Nos alegra saber que confías en nosotros para inmortalizar tus recuerdos. Estamos seguros de que las fotos que hemos tomado te traerán alegría y te permitirán revivir esos momentos una y otra vez. Abajo te dejamos el enlace de descarga para que puedas guardar estos recuerdos contigo siempre. ¡Esperamos que disfrutes de cada imagen tanto como nosotros disfrutamos capturándolas para ti!',
            downloadButton: 'Download',
            dimensions: '3000x4000',
            format: 'JPG',
            considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '18': 
        {
            heading: 'Fotos Tepoztlán',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
            socialMedia: 'Redes sociales'
        },
        '19': 
        {
            heading: 'Fotos Zacatlán',
            title: 'Fotógrafo Nature Walker',
            subtitle: 'Descubre la Belleza Natural',
            mainText: 'Nos complace presentar nuestra colección de fotos de la naturaleza. Estas imágenes capturan la esencia y la belleza del mundo natural a través de la lente de nuestro talentoso fotógrafo. Abajo encontrarás el enlace de descarga para que puedas disfrutar de estas fotos en alta resolución. ¡Esperamos que estas imágenes te inspiren y te acerquen un poco más a la naturaleza!',
            downloadButton: 'Descargar',
            dimensions: '4000x5000',
            format: 'PNG',
            considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
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

//Videos-details

const videos = {
    '1': "https://www.youtube.com/embed/OOBfRQ_mEx8?autoplay=1&mute=1&loop=1&playlist=OOBfRQ_mEx8", 
    '2': "https://www.youtube.com/embed/T8H-UG4WTDs?autoplay=1&mute=1&loop=1&playlist=T8H-UG4WTDs",
    '3': "https://www.youtube.com/embed/sma9h65rlWw?autoplay=1&mute=1&loop=1&playlist=sma9h65rlWw",
    '4': "https://www.youtube.com/embed/0G-oAtN2wfU?autoplay=1&mute=1&loop=1&playlist=0G-oAtN2wfU",
    '5': "https://www.youtube.com/embed/yyuhfMElShU?autoplay=1&mute=1&loop=1&playlist=yyuhfMElShU",
    '6': "https://www.youtube.com/embed/cbaL_5SPSy4?autoplay=1&mute=1&loop=1&playlist=cbaL_5SPSy4",
    '7': "https://www.youtube.com/embed/Zl-_ebq_LWg?autoplay=1&mute=1&loop=1&playlist=Zl-_ebq_LWg",
    '8': "https://www.youtube.com/embed/azDqH8FxG64?autoplay=1&mute=1&loop=1&playlist=azDqH8FxG64",
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
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes tus fotos en redes sociales, por favor etiquétanos para que más personas conozcan nuestro trabajo. Nos puedes encontrar en Instagram como mm12_photos y en YouTube como MM 1/2. ¡Gracias por tu apoyo!',
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
        considerations: 'Si compartes estas fotos en redes sociales, no olvides etiquetarnos para que otros puedan descubrir nuestra obra. Encuéntranos en Instagram como nature_photos y en YouTube como Nature Walker. ¡Gracias por tu apoyo!',
        socialMedia: 'Redes sociales'
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const setId = urlParams.get('vid');
    const videoSrc = videos[setId]; // Obtén el enlace del video
    const selectedTexts = textSets[setId] || textSets['1'];

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

    document.getElementById('heading-s').innerText = selectedTexts.heading;
    document.getElementById('subtitle').innerText = selectedTexts.subtitle;
    document.getElementById('main-text').innerText = selectedTexts.mainText;
    document.getElementById('download-button').innerText = selectedTexts.downloadButton;
    document.getElementById('dimensions-text').innerText = selectedTexts.dimensions;
    document.getElementById('format-text').innerText = selectedTexts.format;
    document.getElementById('considerations-text').innerText = selectedTexts.considerations;
    document.getElementById('social-media-title').innerText = selectedTexts.socialMedia;
});
