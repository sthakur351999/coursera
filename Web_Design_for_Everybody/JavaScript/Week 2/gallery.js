function upDate(previewPic){
  
    document.querySelector('#image').innerHTML = previewPic.alt;
    console.log(previewPic.src);
   
    document.querySelector('#image').style.backgroundImage = 'url('+ previewPic.src +')';
  }

  function unDo(){
   document.querySelector('#image').innerHTML = "Hover over an image below to display here.";
   document.querySelector('#image').style.backgroundImage = 'url()';
  }

console.log('Hello')