    $(".aba2").click(function () {

      $(".aba1").removeClass("aba-ativa");
      $(".aba2").removeClass("aba-hover");
      $(".aba2").addClass("aba-ativa");
      $(".aba1").addClass("aba-hover");
      $(".painel-portfolio").css("display", "block");
      $(".painel-infos").css("display", "none");
<<<<<<< HEAD
      $(".contato-esquerda").css("display","block")
=======
>>>>>>> parent of 391cfc4... teste
  });
  

  $(".aba1").click(function () {

      $(".aba2").removeClass("aba-ativa");
      $(".aba1").removeClass("aba-hover");
      $(".aba1").addClass("aba-ativa");
      $(".aba2").addClass("aba-hover");
      $(".painel-infos").css("display", "block");
      $(".painel-portfolio").css("display", "none");
<<<<<<< HEAD
      $(".contato-esquerda").css("display","none")
=======
>>>>>>> parent of 391cfc4... teste

  });

  $(document).scroll(function() {

    var x = $(this).width();
    var y = $(this).scrollTop();

    if (x <  1024){

        if (y > 400) {
            $('.voltar-topo').addClass("display-block")
            $('.voltar-topo').addClass("hvr-buzz-out")
        } 
        else {
            $('.voltar-topo').addClass('display-none');
            $('.voltar-topo').removeClass("display-block")
            $('.voltar-topo').removeClass("hvr-buzz-out")
        }

    }
  });