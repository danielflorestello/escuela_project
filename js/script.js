const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
     navList.classList.toggle('active-menu');
});



document.addEventListener('DOMContentLoaded', () => {
     const placeholders = document.querySelectorAll('.video-placeholder');

     placeholders.forEach(placeholder => {
          placeholder.addEventListener('click', function () {
               const videoSrc = this.getAttribute('data-video-src');

               // Creamos el elemento de video nativo (mejor que iframe para archivos locales .mp4)
               const videoElement = `
                <video src="${videoSrc}" 
                       controls 
                       autoplay 
                       style="position:absolute; top:0; left:0; width:100%; height:100%;">
                </video>
            `;

               // Reemplazamos el contenido (quita la miniatura y el icono)
               this.innerHTML = videoElement;
               // Quitamos el background-image para que no interfiera
               this.style.backgroundImage = 'none';
          });
     });
});