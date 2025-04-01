




  const inputText = document.getElementById("input");
  const btn = document.getElementById("next");
  const output = document.getElementById("win");
  const img = document.getElementById("img");
  let currentIndex = 0;
  let imagePath = [
    'Images1/1.png', 'Images1/2.png', 'Images1/3.png',
  'Images1/4.png', 'Images1/5.png', 'Images1/6.png',
  'Images1/7.png', 'Images1/8.png', 'Images1/9.png',
  'Images1/10.png'];
  let correctAnswers = ["Anna","Fern","Yuuri","Alya","Maomao","Miku","Riko","Violet","Marcille","Phosphophyllite"];
  
  
  
  DisplayImage(imagePath, currentIndex, img);
  btn.addEventListener("click",function NextChar(){
    let ans = correctAnswers[currentIndex].toLowerCase(); 
    

    
    let Input = inputText.value.trim().toLowerCase();
   

      if(ans===Input){
      currentIndex++;
      output.textContent = "Correct Guess";

      if(currentIndex >= correctAnswers.length){
        
        inputText.value = '';
        img.src = "";
        img.style.display = "block";
        
        const imgMao = document.getElementById("rewardimages");
        output.textContent = "You Won and Your Reward is bunch of cute MaoMao pics 🎉🎉";
        let maomaoimges = [];
        for(let i = 11 ;i<=16;i++){ 
          maomaoimges.push(`<img src="Images1/${i}.jpg">`);
      }
      imgMao.innerHTML = maomaoimges.join('');
      
      return;
      }
      DisplayImage(imagePath, currentIndex, img);
    
      }
    
      
      else{
      inputText.value = '';
      output.textContent = "Wrong Guess Try Again";
    }
  
  
  
  inputText.value = "";

}
);
function DisplayImage(imagePath,currentIndex,img){
      img.src = imagePath[currentIndex];
}