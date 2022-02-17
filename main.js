function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/OWnEEHLoC/model.json", modelLoaded);

}

function modelLoaded() {
    classifier.classify(GotResults);

}

function GotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        randomRed = Math.floor(Math.random() * 255)
        randomGreen = Math.floor(Math.random() * 255)
        randomBlue = Math.floor(Math.random() * 255)
        document.getElementById("result_label").innerHTML = "I can hear-" + results[0].label
        document.getElementById("result_accuracy").innerHTML = "Confidence-" + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("result_label").style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")"
        document.getElementById("result_accuracy").style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")"

        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")
       if (results[0].label == "Clap") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png" 
        }
        else   if (results[0].label == "Tap") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png" 
        }
        else   if (results[0].label == "Snap") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png" 
        }
        else  {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif" 
        }
    }



}