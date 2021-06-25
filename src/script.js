function stepSelector(index1,index2){
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

    document.getElementById(index1).setAttribute("class","active");
    document.getElementById(index2).setAttribute("class","active-figure");
}

function carosualSelectorDoctor(index){
    document.getElementById('carousal-1').setAttribute("class","inactive");
    document.getElementById('carousal-2').setAttribute("class","inactive");
    document.getElementById('carousal-3').setAttribute("class","inactive");
    document.getElementById('carousal-4').setAttribute("class","inactive");

    document.getElementById(index).setAttribute("class","active");
}


function carosualSelectorTreatment(index){
    document.getElementById('car-1').setAttribute("class","inactive");
    document.getElementById('car-2').setAttribute("class","inactive");
    document.getElementById('car-3').setAttribute("class","inactive");
    document.getElementById('car-4').setAttribute("class","inactive");

    document.getElementById(index).setAttribute("class","active");
}

function detailSelector(index1,index2,index3){

    document.getElementById("specialization").setAttribute("class","inactive");
    document.getElementById("treatments").setAttribute("class","inactive");
    document.getElementById("experience").setAttribute("class","inactive");
    document.getElementById("qualification").setAttribute("class","inactive");
    document.getElementById("awards").setAttribute("class","inactive");
    document.getElementById("location").setAttribute("class","inactive");
    document.getElementById("fees").setAttribute("class","inactive");

    document.getElementById("specialization-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("treatments-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("experience-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("qualification-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("awards-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("location-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("fees-icon").setAttribute("class","fas fa-chevron-down");

    document.getElementById("specialization-detail").setAttribute("class","inactive-detail");
    document.getElementById("treatments-detail").setAttribute("class","inactive-detail");
    document.getElementById("experience-detail").setAttribute("class","inactive-detail");
    document.getElementById("qualification-detail").setAttribute("class","inactive-detail");
    document.getElementById("awards-detail").setAttribute("class","inactive-detail");
    document.getElementById("location-detail").setAttribute("class","inactive-detail");
    document.getElementById("fees-detail").setAttribute("class","inactive-detail");

    document.getElementById(index1).setAttribute("class","active");
    document.getElementById(index2).setAttribute("class","active-detail");
    document.getElementById(index3).setAttribute("class","fas fa-chevron-up");
}

function detailSelector1(index1,index2,index3){

    document.getElementById("payments").setAttribute("class","inactive");
    document.getElementById("wallet").setAttribute("class","inactive");
    document.getElementById("transfer").setAttribute("class","inactive");
    document.getElementById("similar").setAttribute("class","inactive");
    document.getElementById("refund").setAttribute("class","inactive");
    document.getElementById("id").setAttribute("class","inactive");
    document.getElementById("addition").setAttribute("class","inactive");

    document.getElementById("payments-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("wallet-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("transfer-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("similar-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("refund-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("id-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("addition-icon").setAttribute("class","fas fa-chevron-down");

    document.getElementById("payments-detail").setAttribute("class","inactive-detail");
    document.getElementById("wallet-detail").setAttribute("class","inactive-detail");
    document.getElementById("transfer-detail").setAttribute("class","inactive-detail");
    document.getElementById("similar-detail").setAttribute("class","inactive-detail");
    document.getElementById("refund-detail").setAttribute("class","inactive-detail");
    document.getElementById("id-detail").setAttribute("class","inactive-detail");
    document.getElementById("addition-detail").setAttribute("class","inactive-detail");

    document.getElementById(index1).setAttribute("class","active");
    document.getElementById(index2).setAttribute("class","active-detail");
    document.getElementById(index3).setAttribute("class","fas fa-chevron-up");
}

function detailSelector2(index1,index2,index3){

    document.getElementById("specialization").setAttribute("class","inactive");
    document.getElementById("treatments").setAttribute("class","inactive");
    document.getElementById("doctor").setAttribute("class","inactive");
    document.getElementById("infrastructure").setAttribute("class","inactive");
    document.getElementById("packages").setAttribute("class","inactive");
    document.getElementById("location").setAttribute("class","inactive");
    document.getElementById("fees").setAttribute("class","inactive");
    document.getElementById("membership").setAttribute("class","inactive");

    document.getElementById("specialization-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("treatments-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("doctor-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("infrastructure-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("packages-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("location-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("fees-icon").setAttribute("class","fas fa-chevron-down");
    document.getElementById("membership-icon").setAttribute("class","fas fa-chevron-down");

    document.getElementById("specialization-detail").setAttribute("class","inactive-detail");
    document.getElementById("treatments-detail").setAttribute("class","inactive-detail");
    document.getElementById("doctor-detail").setAttribute("class","inactive-detail");
    document.getElementById("infrastructure-detail").setAttribute("class","inactive-detail");
    document.getElementById("packages-detail").setAttribute("class","inactive-detail");
    document.getElementById("location-detail").setAttribute("class","inactive-detail");
    document.getElementById("fees-detail").setAttribute("class","inactive-detail");
  document.getElementById("membership-detail").setAttribute("class","inactive-detail")

    document.getElementById(index1).setAttribute("class","active");
    document.getElementById(index2).setAttribute("class","active-detail");
    document.getElementById(index3).setAttribute("class","fas fa-chevron-up");
}

function questionSelector(input1,input2,input3){
    document.getElementById("question1").setAttribute("class","inactive");
    document.getElementById("question2").setAttribute("class","inactive");
    document.getElementById("question3").setAttribute("class","inactive");
    document.getElementById("question4").setAttribute("class","inactive");
    document.getElementById("question5").setAttribute("class","inactive");

    document.getElementById("question1-detail").setAttribute("class","inactive-detail");
    document.getElementById("question2-detail").setAttribute("class","inactive-detail");
    document.getElementById("question3-detail").setAttribute("class","inactive-detail");
    document.getElementById("question4-detail").setAttribute("class","inactive-detail");
    document.getElementById("question5-detail").setAttribute("class","inactive-detail");

    document.getElementById("icon1").setAttribute("class","fas fa-chevron-down");
    document.getElementById("icon2").setAttribute("class","fas fa-chevron-down");
    document.getElementById("icon3").setAttribute("class","fas fa-chevron-down");
    document.getElementById("icon4").setAttribute("class","fas fa-chevron-down");
    document.getElementById("icon5").setAttribute("class","fas fa-chevron-down");

    document.getElementById(input1).setAttribute("class","active");
    document.getElementById(input2).setAttribute("class","active-detail");
    document.getElementById(input3).setAttribute("class","fas fa-chevron-up");
}

function change(index){
    document.getElementById('carousal-1').setAttribute("class","inactive");
    document.getElementById('carousal-2').setAttribute("class","inactive");

    document.getElementById(index).setAttribute("class","active");
}