function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QGuR_ku7n//model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if(error){
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1 ;
        g = Math.floor(Math.random() * 255) + 1 ;
        b = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_label").innerHTML = 'i can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")" ;
        
        img = document.getElementById('ear');

       if(results[0].label == "barking"){
       img.src = 'dog.gif';
       }else if (results[0].lable == "meowing"){
        img.src = 'cat.gif';
       }else if (results[0].lable == "roar"){
        img.src = 'loin.gif';
       }else if (results[0].lable == "mooing") {
        img.src = 'cow.gif';
       } else {
        img.src = 'ear.jpg';
        
    } 