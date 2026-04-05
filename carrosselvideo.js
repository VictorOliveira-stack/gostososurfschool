document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.video-carousel');
    const playBtn = container.querySelector('.play-button');

    const handlePlay = (e) => {
        e.stopPropagation(); // PARA O CARROSSEL DE PULAR!

        if (video.paused) {
            video.play();
            container.classList.add('playing');
        } else {
            video.pause();
            container.classList.remove('playing');
        }
    };

    // Clique no botão ou no próprio vídeo
    playBtn.addEventListener('click', handlePlay);
    video.addEventListener('click', handlePlay);
});

// Segurança: Pausa vídeos ao mudar de slide para não encavalar o áudio
const myCarousel = document.getElementById('carouselExampleControlsNoTouching');
myCarousel.addEventListener('slide.bs.carousel', () => {
    document.querySelectorAll('.video-carousel').forEach(v => {
        v.pause();
        v.parentElement.classList.remove('playing');
    });
});



//div que virou botão
function clickAgendar() {

    const telefone = "558499157137"; 
    
    const mensagem = encodeURIComponent("Olá! Vi o site da Gostoso Surf School e gostaria de agendar uma aula!");
    
    // Monta o link e redireciona
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    
   
    window.open(url, '_blank');
}