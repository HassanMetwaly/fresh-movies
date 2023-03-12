function love(){
    var btn=document.getElementById('love')
    btn.addEventListener('click',function(){
        document.getElementById('love').style.color='green';
    })
}

function nice(){
    document.getElementById('bd').style.scale='1';
    
  
}
const chk = document.getElementById('chk')
chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  document.getElementById('af').style.backgroun='black';
})



const bt=document.getElementById('mvl')
bt.addEventListener('click',function(){
    document.getElementById('mvli').style.display='flex'
    document.getElementById('mvli').style.height='180px';
})

const bt1=document.getElementById('close')
bt1.addEventListener('click',function(){
    document.getElementById('mvli').style.display='none'
    document.getElementById('mvli').style.height='0px';
})





const btser=document.getElementById('sear');
btser.addEventListener('click',function(){
    var list=document.getElementById('sh').value 
    if(list=='Hulk'){
       var imgser=document.getElementById('imgsser')
       document.getElementById('q').style.scale='1'
       imgser.src='movies card/hulk.jfif';
       var link=document.getElementById('filmssearch')
       link.href='https://freesh-moviesblackfrostironman410.on.drv.tw/Movies%20site/movies/movies%20show/hulk1.html';
       //window.location='https://freesh-moviesblackfrostironman410.on.drv.tw/Movies%20site/movies/movies%20show/hulk1.html';
       
       
    
            

        
        
        

    }
    if(list=='Avengers'){
        var imgser=document.getElementById('imgsser')
        document.getElementById('q').style.scale='1'
        imgser.src='movies card/The-Avengers-2012.jpg';
        
        //window.location='https://freesh-moviesblackfrostironman410.on.drv.tw/Movies%20site/movies/movies%20show/hulk1.html';
        
        
     
             
 
         
         
         
 
     }
    
    

})
function hide(){
    document.getElementById('q').style.scale='0'
}





