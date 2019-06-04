    $(".aba2").click(function () {

      $(".aba1").removeClass("aba-ativa");
      $(".aba3").removeClass("aba-ativa");
      $(".aba2").removeClass("aba-hover");
      $(".aba2").addClass("aba-ativa");
      $(".aba3").addClass("aba-hover");
      $(".aba1").addClass("aba-hover");
      $(".painel-portfolio").css("display", "block");
      $(".painel-habilidades").css("display", "none");
      $(".painel-infos").css("display", "none");
      $(".contato-esquerda").css("display","block")
  });

  $(".aba3").click(function () {

    $(".aba1").removeClass("aba-ativa");
    $(".aba2").removeClass("aba-ativa");
    $(".aba3").removeClass("aba-hover");
    $(".aba1").addClass("aba-hover");
    $(".aba3").addClass("aba-ativa");
    $(".aba2").addClass("aba-hover");
    $(".painel-habilidades").css("display", "block");
    $(".painel-portfolio").css("display", "none");
    $(".painel-infos").css("display", "none");
    $(".contato-esquerda").css("display","block")
});
  

  $(".aba1").click(function () {

      $(".aba3").removeClass("aba-ativa");
      $(".aba2").removeClass("aba-ativa");
      $(".aba1").removeClass("aba-hover");
      $(".aba1").addClass("aba-ativa");
      $(".aba3").addClass("aba-hover");
      $(".aba2").addClass("aba-hover");
      $(".painel-infos").css("display", "block");
      $(".painel-habilidades").css("display", "none");
      $(".painel-portfolio").css("display", "none");
      $(".contato-esquerda").css("display","none")

  });

  $(document).scroll(function() {

    var x = $(this).width();
    var y = $(this).scrollTop();

    if (x <  1024){

        if (y > 400) {
            $('.voltar-topo').addClass("display-block")
        } 
        else {
            $('.voltar-topo').addClass('display-none');
            $('.voltar-topo').removeClass("display-block")
        }

    }
  });