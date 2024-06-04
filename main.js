function mudarTitulo() {
    const titles = ["Portfólio Pessoal", " Seja Bem-vindo(a)! "]; 
    let index = 0;

    setInterval(() => {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    }, 10000); // 30 Segundos
}

mudarTitulo();