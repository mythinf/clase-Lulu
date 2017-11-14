window.addEventListener('load',function(event){
  //console.log(event);
  //console.log(event.target)---> el que recibe el evento, donde se ejecuta el evento
  //console.log(event.currentTarget)---->quien escucha el evento
var title = document.querySelector('h1')
  title.addEventListener('mouseover',function(){
  title.textContent = 'Hola Mundo';
  });

  title.addEventListener('mouseout',function(){
   title.textContent = 'Flores';
  });
var img = document.getElementsByTagName('img')[0]
  img.addEventListener('mouseover',function(){
    img.src = "assets/img2.jpg"
  });

  img.addEventListener('mouseout',function(){
    img.src = "assets/img1.jpg"
 });
});



//var divList = document.getElementsByTagName('div');
//for(var i = 0;i<divList.length;i++){
//  divList[i].addEventListener('click',function(){})}
