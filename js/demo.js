
/// slider script ///////////////////////////////////////////////////////////////////////////////////////////////////

var i = 0;
var img  = document.getElementById("img");
var img_container = ['./images/1.png','./images/2.avif','./images/3.avif'];

///functions

/* 
/// this for buttons 
var changeright = function(){
    i++;
    if(i>2){i=0}
    img.style.backgroundImage="url('"+img_container[i]+"')";
}



var changeleft = function(){
    i--;
    if(i<0){i=2}
    img.style.backgroundImage="url('"+img_container[i]+"')";
}
*/

 var bubble = document.getElementsByClassName("bob")   // to select all the bubble elements
   var startenterval =  setInterval(function(){
      
      if(i>2){
        i=0;
        var lastbob =document.getElementsByClassName("bob")[2]
        lastbob.style.backgroundColor="white";
    }
      if(i>0){
        var newbob = document.getElementsByClassName("bob")[i-1];
        newbob.style.backgroundColor = "white";
    }
      if(i >2){i=0;}
      {  

        bubble[i].style.backgroundColor="gray";
        document.getElementById("img").style.backgroundImage ="url('"+img_container[i]+"')"   ///to slide img
      }

      i++;
    },2000)
   
/// this if for the bubbles in slider
function togglethis1(){
  clearInterval(startenterval)
  bubble[0].style.backgroundColor ="gray"
  bubble[1].style.backgroundColor ="white"
  bubble[2].style.backgroundColor ="white"
 img.style.backgroundImage="url('"+img_container[0]+"')"
 
}
function togglethis2(){
  clearInterval(startenterval)
  bubble[0].style.backgroundColor ="white"
  bubble[1].style.backgroundColor ="gray"
  bubble[2].style.backgroundColor ="white"
  img.style.backgroundImage="url('"+img_container[1]+"')"
  
 }
 function togglethis3(){
  clearInterval(startenterval)
  bubble[0].style.backgroundColor ="white"
  bubble[1].style.backgroundColor ="white"
  bubble[2].style.backgroundColor ="gray"
  img.style.backgroundImage="url('"+img_container[2]+"')"

 }




///events




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var arr = ['Hello its your store ' , 'this is talabat store','the best seles' , 'Laptops' , 'Mobiles' , 'Makeup' , 'Cars']
var selmessage= document.getElementById("header");
var cc=0;

setInterval(function(){
  cc++;
  if(cc>6){cc=0;}
selmessage.innerText=arr[cc];
},2000)

//////////////// select catageories ////////////////////////////////////////////////
var allCategory = document.querySelectorAll(".product-box");   //select all products
var laptoops= document.querySelectorAll('.product-box[data-category="laptop"]');   //select laptoops
var mobile= document.querySelectorAll('.product-box[data-category="mobile"]');   //select all mobile
var makeup= document.querySelectorAll('.product-box[data-category="makeup"]');   //select all makeup
var cars= document.querySelectorAll('.product-box[data-category="car"]');   //select  all laptoops



var filter= function (obj) {
    switch (obj.innerText) {
      case 'All':
        allCategory.forEach((ele)=>{
          ele.style.display='block'
        })
        break;
      case 'laptop':
        allCategory.forEach((ele)=>{
          ele.style.display='none'
        })
        laptoops.forEach((ele)=>{
          ele.style.display='block'
        })
        break;
      case 'mobile':
        allCategory.forEach((ele)=>{
          ele.style.display='none'
        })
        mobile.forEach((ele)=>{
          ele.style.display='block'
        })
        break;
      case 'makeup':
        allCategory.forEach((ele)=>{
          ele.style.display='none'
        })
        makeup.forEach((ele)=>{
          ele.style.display='block'
        })
        break;
      case 'cars':
        allCategory.forEach((ele)=>{
          ele.style.display='none'
        })
        cars.forEach((ele)=>{
          ele.style.display='block'
        })
        break;
    }
  }




///              add to card script ////////////////////////////////////////////////////////////////////////////////////////////
var addBtn= document.querySelectorAll('.product-box .add')        ///to select add buttons
var removebtn= document.querySelectorAll('.product-box .remove')        ///to select remove buttons
var yourcard = document.getElementsByClassName("badge")[0];
var message=document.getElementById("message");

var addCount=0;  


addBtn.forEach((ele)=>{                  /// to add  item
    
    ele.addEventListener('click',()=>{
      var text  = document.createTextNode("add item");
     message.innerText="item added"
     message.style.fontWeight="bolder"
     message.style.color="green"
     message.style.paddingLeft="20px"
   addCount++;
   yourcard.innerHTML=addCount;
 
   
    })
  })


removebtn.forEach((ele)=>{                  /// to remove  item
    
    ele.addEventListener('click',()=>{
     if(addCount>0)
     {
              addCount--;
              message.innerText="item removed"
              message.style.fontWeight="bolder"
              message.style.color="red"
              message.style.paddingLeft="20px"

     }else{
      message.innerText=" !!!! No item to  removed"
      message.style.fontWeight="bolder"
      message.style.color="red"
      message.style.paddingLeft="20px"

     }

    

   yourcard.innerHTML=addCount;



    })
  })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////     arrow up script /////////////////////////////////////////////////////////////

var arrow = document.getElementsByClassName("arrow-up")[0]

arrow.addEventListener("click",function(){
    window.scroll(0,0)
})