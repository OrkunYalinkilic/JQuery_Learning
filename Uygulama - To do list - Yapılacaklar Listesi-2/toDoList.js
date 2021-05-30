
$("#ekle").click(function(){
  
    var yapilacak = $("#yapilacak").val();
  
   if(yapilacak!=""){
        var eklenecek = $("<li></li>").text(yapilacak);
        var buton = $("<button class=\"butonStil\">X</button>")
        eklenecek.append(buton);
        $("#yapilacakListesi").append(eklenecek);
        $("#yapilacak").val("");
   }

   buton.click(function(){

        $(  this).parent().remove();

   })

})
