    $(".aba2").click(function () {
      $(".aba1").removeClass("aba-ativa");
      $(".aba2").addClass("aba-ativa");
      $(".painel-portfolio").css("display", "block");
      $(".painel-infos").css("display", "none");
  });

  $(".aba1").click(function () {
      $(".aba2").removeClass("aba-ativa");
      $(".aba1").addClass("aba-ativa");
      $(".painel-infos").css("display", "block");
      $(".painel-portfolio").css("display", "none");
  });