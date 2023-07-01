function Start(){
 navigator.mediaDevices.getUserMedia({audio:true})
 classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/G-rwqc1NT/model.json",modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
 if (error) {
   console.log(error) 
 } else {
   console.log(results) 
   document.getElementById("sound_name").innerHTML=results[0].label
   document.getElementById("accuracy").innerHTML=((results[0].confidence).toFixed(3))*100
   img=document.getElementById("image")
   img1=document.getElementById("image1")
   img2=document.getElementById("image2")
   img3=document.getElementById("image3")
   if (results[0].label=="Clap") {
    img.src='aliens-01.gif'
    img1.src='aliens-02.png'
    img2.src='aliens-03.png'
    img3.src='aliens-04.png'
   } else if (results[0].label=="Snap") {
    img.src='aliens-01.png'
    img1.src='aliens-02.gif'
    img2.src='aliens-03.png'
    img3.src='aliens-04.png'
   }
   else if(results[0].label=="Bell") {
    img.src='aliens-01.png'
    img1.src='aliens-02.png'
    img2.src='aliens-03.gif'
    img3.src='aliens-04.png'
   }else{
    img.src='aliens-01.png'
    img1.src='aliens-02.png'
    img2.src='aliens-03.png'
    img3.src='aliens-04.gif'
   }
 }
}