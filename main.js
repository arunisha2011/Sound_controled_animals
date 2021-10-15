function startClassifier(){
    navigator.mediaDevices.getUserMedia({audio:true})
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GLlX3alZ9/model.json",modelReady)
}
function modelReady(){
    Classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML='I can hear - '+
        results[0].label;
        document.getElementById("accuracy").innerHTML='Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")"
        document.getElementById("result").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")"
            