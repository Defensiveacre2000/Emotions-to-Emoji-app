Webcam.set({
width: 350,
height: 300,
image_format: 'png',
png_quality: 90
});
var camera = document.getElementById("cam");
Webcam.attach(camera);
function Capture()
{
Webcam.snap(
function (data_uri)
{
document.getElementById("result").innerHTML = "<img id='capture_img' src='"+data_uri+"'>";
}
);
}
console.log("ml5 version" , ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json" , modelLoaded);
//function modelLoaded starts
function modelLoaded()
{
console.log("Model Loaded")
}
prediction1 = "";
prediction2 = "";
//speak function
function speak()
{
var synth = window.speechSynthesis;
speak_data_1 = "The First prediction is :- " + prediction1;
speak_data_2 = "The Second prediction is :- " + prediction2;
var utterThis = new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
synth.speak(utterThis);
}
//function check starts
//function check starts
//function check starts
//function check starts
//function check starts
function Check()
{
img = document.getElementById('captured_image');
classifier.classify(img , gotResult);
}
//Got result starts(function)
function gotResult(error , results)
{
if(error)
{
console.error(error);
}
else
{
console.log(results);
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediction1 = results[0].label;
prediction2 = results[1].label;
speak()
if(results[0].label == "Happy")
{
document.getElementById("update_emoji").innerHTML = "&#128522;";
}
//Happy
if(results[0].label == "Sad")
{
document.getElementById("update_emoji").innerHTML = "&#128532;";
}
//Sad
if(results[0].label == "Angry")
{
document.getElementById("update_emoji").innerHTML = "&#128548;";
}
//Angry
if(results[1].label == "Happy")
{
document.getElementById("update_emoji2").innerHTML = "&#128522;";
}
//Happy
if(results[1].label == "Sad")
{
document.getElementById("update_emoji2").innerHTML = "&#128532;";
}
//Sad
if(results[1].label == "Angry")
{
document.getElementById("update_emoji2").innerHTML = "&#128548;";
}
//Angry
}
}