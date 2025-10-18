function upDate(previewPic){
  console.log("Hover detected");
  console.log("Source: ", previewPic.scr);
  console.log("Alt text: ", previewPic.alt);
  
  let imageDiv = document.getElementById("image");
  
   imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  
   imageDiv.innerHTML = previewPic.alt;
  
	}

	function unDo(){
    console.log("Mouse left the image area");
    
    imageDiv.style.backgroundImage = "url('')";
    
    imageDiv.innerHTML = "Hover over an image below to display here.";
	}