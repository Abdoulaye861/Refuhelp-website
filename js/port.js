$(document).ready(main);

var contanor = 1;

function main(){
    $('.menu_bar').click(function(){
       // $('nav').toggle();

       if(contanor == 1){
          $('nav').animate({
                 left:'0'
          });

          contanor = 0;

       } else {
             contanor= 1;
            $('nav').animate({
                 left:'-100%'

          });
       }

  })
}
 






 $(function() {
                
                setTimeout(function() {
                    $('.fly-in-text').removeClass('hidden');
                }, 500);
                
            })();



$("#wrapper").animate({
                opacity: 0,
            }, 1000, function () {
                $("#wrapper").css({ 'background-image': 'url(images/ground.jpg)' }).animate({ opacity: 1 }, 1000);
            });













                          