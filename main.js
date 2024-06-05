//Alternar título
function mudarTitulo() {
    const titles = ["Portfólio Pessoal", " Seja Bem-vindo(a)! "]; 
    let index = 0;

    setInterval(() => {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    }, 10000); // 30 Segundos
}

mudarTitulo();

//botão voltar ao topo
jQuery(document).ready(function(){

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 100) {
        jQuery('a[href="#top"]').fadeIn();
      } else {
        jQuery('a[href="#top"]').fadeOut();
      }
    });
  
    jQuery('a[href="#top"]').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  });	