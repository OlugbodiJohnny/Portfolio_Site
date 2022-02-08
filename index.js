$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  }); 

  
})

// $('#form .btn').click(sendMail())
  
function sendMail () {
  const name = document.getElementById('name').value;
  
  const subject = document.getElementById('project').value;
  const message = document.getElementById('message').value;
  //const name = document.getElementById('name').value;
  //const project = document.getElementById('project');
  //window.open( String( `mailto:olugbodijohhny^live.com?subject=${subject} &body=${body}` ).replace('^', '@') );
  window.open(`mailto:olugbodijohhny@live.com?subject=${subject} for ${name} &body=Dear Johnny, ${message}`);
}
// document.querySelector(document).ready(function(){

//   document.querySelector('#menu').click(function(){
//     document.querySelector(this).classList.toggle('fa-times');
//     document.querySelector('header').classList.toggle('toggle');
//   });

//   document.querySelector(window).addEventListener('scroll load',function(){

//     document.querySelector('#menu').removeClass('fa-times');
//     document.querySelector('header').removeClass('toggle');

//     if(document.querySelector(window).scrollTop > 0){
//       document.querySelector('.top').show();
//     }else{
//       document.querySelector('.top').hide();
//     }

//   });

//   // smooth scrolling 

//   document.querySelector('a[href*="#"]').addEventListener('click',function(e){

//     e.preventDefault();

//     document.querySelector('html, body').animate({

//       scrollTop : document.querySelector(document.querySelector(this).attr('href')).offset().top,

//     },
//       500, 
//       'linear'
//     );

//   });

// });

// $(document).ready(function(){
//   $("#menu").click(function(){
//     $(this).toggleClass("fa-times");
//     $("header").toggleClass("toggle")});
//     $(window).on("scroll load",function(){
//       $("#menu").removeClass("fa-times");
//       $("header").removeClass("toggle");
//       0<$(window).scrollTop()?$(".top").show():$(".top").hide()
//     });
//       $('a[href*="#"]').on("click",function(a){
//         a.preventDefault();$("html, body").animate({
//           scrollTop:$($(this).attr("href")).offset().top},500,"linear")
//   })
// });