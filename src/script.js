function optionSelector(index,index1){
    document.getElementById("step1").setAttribute("class","inactive");
    document.getElementById("step2").setAttribute("class","inactive");
    document.getElementById("step3").setAttribute("class","inactive");
    document.getElementById("step4").setAttribute("class","inactive");
    document.getElementById("step5").setAttribute("class","inactive");
    document.getElementById("step6").setAttribute("class","inactive");
    document.getElementById("step7").setAttribute("class","inactive");

    document.getElementById("step1-figure").setAttribute("class","inactive-figure");
    document.getElementById("step2-figure").setAttribute("class","inactive-figure");
    document.getElementById("step3-figure").setAttribute("class","inactive-figure");
    document.getElementById("step4-figure").setAttribute("class","inactive-figure");
    document.getElementById("step5-figure").setAttribute("class","inactive-figure");
    document.getElementById("step6-figure").setAttribute("class","inactive-figure");
    document.getElementById("step7-figure").setAttribute("class","inactive-figure");

    document.getElementById(index).setAttribute("class","active")
    document.getElementById(index1).setAttribute("class","active-figure")
    
}

function pictureCarousalSelector(index){
    document.getElementById('carousal-1').setAttribute('class',"inactive");
    document.getElementById('carousal-2').setAttribute('class',"inactive");
    document.getElementById('carousal-3').setAttribute('class',"inactive");
    document.getElementById('carousal-4').setAttribute('class',"inactive");

    document.getElementById(index).setAttribute("class","active")
}

function imageCarousalSelector(index){
    document.getElementById('carousal-1').setAttribute('class',"inactive");
    document.getElementById('carousal-2').setAttribute('class',"inactive");
    document.getElementById('carousal-3').setAttribute('class',"inactive");
    document.getElementById('carousal-4').setAttribute('class',"inactive");

    document.getElementById(index).setAttribute("class","active")
}