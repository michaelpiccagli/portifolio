const buttonTop = document.getElementById('backToTopButton')
const menuMobile = document.querySelector('#menu-hamburguer')

document.addEventListener("DOMContentLoaded", function () {
    function typeWriter(element, text, delay = 100, callback) {
      let i = 0;
      function typing() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typing, delay);
        } else if (callback) {
          setTimeout(callback, 300);
        }
      }
      typing();
    }
  
    const p = document.querySelector(".texto-home p");
    const h1 = document.querySelector(".texto-home h1");
    const span = document.querySelector(".texto-home span");
    const h2 = document.querySelector(".texto-home h2");
  
    p.innerHTML = "";
    h1.innerHTML = "";
    span.innerHTML = "";
    h2.innerHTML = "";
  
    typeWriter(p, "Olá ✌️,", 100, function () {
      typeWriter(h1, "Meu nome é", 100, function () {
        typeWriter(span, "Michael Piccagli", 100, function () {
          typeWriter(h2, "Desenvolvedor Front-End", 100);
        });
      });
    });
  });

window.sr = ScrollReveal({ reset: true });
window.addEventListener('scroll', () => {
    buttonTop.classList.add('show')
    if (scrollY < 350) {
        buttonTop.classList.remove('show')
    }
    else if (scrollY > 400) {
        menuMobile.checked = false;
    }
})

buttonTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


sr.reveal('.texto-home', {
    duration: 3000,
    origin: 'top',
    distance: '150px',
});


sr.reveal('.img-box', {
    duration: 2000,
    origin: 'left',
    distance: '150px',
});

sr.reveal('.imagem-sobre-mim', {
    origin: 'bottom',
    distance: '150px',
    duration: 2000
});

sr.reveal('.informacoes-sobre-mim', {
    origin: 'bottom',
    distance: '150px',
    duration: 2000
});

sr.reveal('.section-title', {
    origin: 'top',
    distance: '150px',
    duration: 2000
});

sr.reveal('.container-habilidades', {
    origin: 'bottom',
    distance: '150px',
    duration: 2000
});

sr.reveal('.container-projetos', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000
});

sr.reveal('.cards-wrapper', {
    origin: 'top',
    distance: '150px',
    duration: 2000
});


  