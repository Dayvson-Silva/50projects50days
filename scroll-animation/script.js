    const bloco = document.querySelectorAll('.bloco');

    // new IntersectionObserver usado para oberver os elementos que estao na tela
    const observer = new IntersectionObserver((entrada) => {
        entrada.forEach((entrar) => {
            if(entrar.isIntersecting){
                entrar.target.classList.add('show');
            }else{
                entrar.target.classList.remove('show');
            }
        });
    });

    bloco.forEach((bloco) => {
        observer.observe(bloco);
    });