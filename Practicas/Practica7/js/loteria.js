$(document).ready(
  function(){
    console.log("Hola desde query");
    //alert("Hola desde query");

    $("img").click(
      function(){
        //$("img").width("20px");
        //$(this).width("20px");
        $(this).hide("slow");
       //$(this).attr('src', '11.JPG');
      }
    );

    $("#btn-reiniciar").click(
      function(){
        $("img").show("fast");
      }
    );
  }
);