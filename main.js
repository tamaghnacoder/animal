function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/70uWC6h60/model.json',{probabilityThreshold:0.7},modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var lion=0;
var bee=0;
var cougar=0;
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
    }
}