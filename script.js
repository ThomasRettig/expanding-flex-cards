function focus() {
   $(".option").click(function () {
      $(".option").removeClass("active");
      $(this).addClass("active");
   });
}

focus();