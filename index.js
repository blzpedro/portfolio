    $(".aba2").click(function () {
      $(".aba1").removeClass("aba-ativa");
      $(".aba2").removeClass("aba-hover");
      $(".aba2").addClass("aba-ativa");
      $(".aba1").addClass("aba-hover");
      $(".painel-portfolio").css("display", "block");
      $(".painel-infos").css("display", "none");
  });

  $(".aba1").click(function () {
      $(".aba2").removeClass("aba-ativa");
      $(".aba1").removeClass("aba-hover");
      $(".aba1").addClass("aba-ativa");
      $(".aba2").addClass("aba-hover");
      $(".painel-infos").css("display", "block");
      $(".painel-portfolio").css("display", "none");
  });