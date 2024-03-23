function a(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json', p);
}
function p(){
    classifier.classify(qwerty)
}
function qwerty(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        var w=Math.floor(Math.random() * 255) + 1;
        var x=Math.floor(Math.random() * 255) + 1;
        var y=Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML=results[0].label;
        document.getElementById("result_confidence").innerHTML=results[0].confidence;
        var a=document.getElementById("a1");
        var b=document.getElementById("a2");
        var c=document.getElementById("a3");
        var d=document.getElementById("a4");
        if(results[0].label=="Ruido de fondo"){
     a.src="aliens-01.gif";
     b.src="aliens-02.png";
     c.src="aliens-03.png";
     d.src="aliens-04.png";
        }  if(results[0].label=="Campana"){
            a.src="aliens-01.png";
            b.src="aliens-02.gif";
            c.src="aliens-03.png";
            d.src="aliens-04.png";
               }
               if(results[0].label=="Aplausos"){
                a.src="aliens-01.png";
                b.src="aliens-02.png";
                c.src="aliens-03.gif";
                d.src="aliens-04.png";
                   }
                   if(results[0].label=="Chasquido"){
                    a.src="aliens-01.png";
                    b.src="aliens-02.png";
                    c.src="aliens-03.png";
                    d.src="aliens-04.gif";
                       }
    }
}