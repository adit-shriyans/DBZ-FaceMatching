//All important divs (for image append and left right buttons)
const impDiv = document.querySelectorAll(".impdiv");

let hairDiv = document.querySelector("#hairdiv");
let eyeDiv = document.querySelector("#eyediv");
let noseDiv = document.querySelector("#nosediv");
let mouthDiv = document.querySelector("#mouthdiv");

let eyeImg1 = document.createElement("img");
let eyeImg2 = document.createElement("img");
let eyeImg3 = document.createElement("img");
let eyeImg = document.createElement("img");
let hairImg1 = document.createElement("img");
let hairImg2 = document.createElement("img");
let hairImg3 = document.createElement("img");
let hairImg = document.createElement("img");
let noseImg1 = document.createElement("img");
let noseImg2 = document.createElement("img");
let noseImg3 = document.createElement("img");
let noseImg = document.createElement("img");
let mouthImg1 = document.createElement("img");
let mouthImg2 = document.createElement("img");
let mouthImg3 = document.createElement("img");
let mouthImg = document.createElement("img");

let eye_i = 1;
let eye_j = 2;
let eye_k = 3;
let hair_i = 1;
let hair_j = 2;
let hair_k = 3;
let nose_i = 1;
let nose_j = 2;
let nose_k = 3;
let mouth_i = 1;
let mouth_j = 2;
let mouth_k = 3;

var selectedChoices=
{
    selectedHair:0,
    selectedEye:0,
    selectedNose:0,
    selectedMouth:0,
};

//----------ImpDiv Array----------
// Hair
// 0: button.left.btnLeft.impdiv
// 1: div.box.div1.impdiv
// 2: div.box.div2.impdiv
// 3: div.box.div3.impdiv
// 4: button.right.btnRight.impdiv

//Eyes
// 5: button.left.btnLeft.impdiv
// 6: div.box.div1.impdiv
// 7: div.box.div2.impdiv
// 8: div.box.div3.impdiv
// 9: button.right.btnRight.impdiv

//Nose
// 10: button.left.btnLeft.impdiv
// 11: div.box.div1.impdiv
// 12: div.box.div2.impdiv
// 13: div.box.div3.impdiv
// 14: button.right.btnRight.impdiv

//Mouth
// 15: button.left.btnLeft.impdiv
// 16: div.box.div1.impdiv
// 17: div.box.div2.impdiv
// 18: div.box.div3.impdiv
// 19: button.right.btnRight.impdiv

const hairArray = [impDiv[1],impDiv[2],impDiv[3], hairDiv, hairImg1, hairImg2, hairImg3, hairImg, impDiv[0], impDiv[4], hair_i, hair_j, hair_k, "Hair"];
const eyeArray = [impDiv[6],impDiv[7],impDiv[8], eyeDiv, eyeImg1, eyeImg2, eyeImg3, eyeImg, impDiv[5], impDiv[9], eye_i, eye_j, eye_k, "Eye"];
const noseArray = [impDiv[11],impDiv[12],impDiv[13], noseDiv, noseImg1, noseImg2, noseImg3, noseImg, impDiv[10], impDiv[14], nose_i, nose_j, nose_k, "Nose"];
const mouthArray = [impDiv[16],impDiv[17],impDiv[18], mouthDiv, mouthImg1, mouthImg2, mouthImg3, mouthImg, impDiv[15], impDiv[19], mouth_i, mouth_j, mouth_k, "Mouth"];

//eyeArray Contents:
//0-3: Divs(4) to append image
//4-7: Images(4)
//8-9: Left and Right buttons
//10-12: Counters i, j, k
//13: Body Part for object

//----------Initial styling of images----------
initStyle(hairArray);
initStyle(eyeArray);
initStyle(noseArray);
initStyle(mouthArray);

//1) Eye button and div onclick operations

impDiv[0].addEventListener("click", function() {
    lefttBtnClick(hairArray);
});

impDiv[1].addEventListener("click", function() {
    div1Select(hairArray);
});

impDiv[2].addEventListener("click", function() {
    div2Select(hairArray);
})

impDiv[3].addEventListener("click", function (){
    div3Select(hairArray);
});

impDiv[4].addEventListener("click", function() {
    rightBtnClick(hairArray);
});

impDiv[5].addEventListener("click", function() {
    lefttBtnClick(eyeArray);
});

impDiv[6].addEventListener("click", function() {
    div1Select(eyeArray);
});

impDiv[7].addEventListener("click", function() {
    div2Select(eyeArray);
})

impDiv[8].addEventListener("click", function (){
    div3Select(eyeArray);
});

impDiv[9].addEventListener("click", function() {
    rightBtnClick(eyeArray);
});

impDiv[10].addEventListener("click", function() {
    lefttBtnClick(noseArray);
});

impDiv[11].addEventListener("click", function() {
    div1Select(noseArray);
});

impDiv[12].addEventListener("click", function() {
    div2Select(noseArray);
})

impDiv[13].addEventListener("click", function (){
    div3Select(noseArray);
});

impDiv[14].addEventListener("click", function() {
    rightBtnClick(noseArray);
});

impDiv[15].addEventListener("click", function() {
    lefttBtnClick(mouthArray);
});

impDiv[16].addEventListener("click", function() {
    div1Select(mouthArray);
});

impDiv[17].addEventListener("click", function() {
    div2Select(mouthArray);
})

impDiv[18].addEventListener("click", function (){
    div3Select(mouthArray);
});

impDiv[19].addEventListener("click", function() {
    rightBtnClick(mouthArray);
});

//-------------------Function---------------------------

function initStyle(arr)
{
    arr[4].src = `../Pictures/${arr[13]}1.png`;
    arr[5].src = `../Pictures/${arr[13]}2.png`;
    arr[6].src = `../Pictures/${arr[13]}3.png`;
    arr[4].alt = "New Image";
    arr[5].alt = "New Image";
    arr[6].alt = "New Image";
    arr[4].style.width = "100px";
    arr[4].style.height = "38px";
    arr[4].style.opacity = "0.6";
    arr[5].style.width = "125px";
    arr[5].style.height = "48px";
    arr[5].style.transform = "translateY(-1em)";
    arr[6].style.width = "100px";
    arr[6].style.height = "38px";
    arr[6].style.opacity = "0.6";
    arr[0].appendChild(arr[4]);
    arr[1].appendChild(arr[5]);
    arr[2].appendChild(arr[6]);
}

function div1Select(arr)
{
    if(!arr[5].style.boxShadow)
    {
        changeImg("left", arr);
        featureSelect(arr);
    }
}

function div2Select(arr)
{
    if(!arr[5].style.boxShadow)
    {
        featureSelect(arr);
    }
    else
    {
        featureDeSelect(arr);
    }
}

function div3Select(arr)
{
    if(!arr[5].style.boxShadow)
    {
        changeImg("right", arr);
        featureSelect(arr);
    }
}

function rightBtnClick(arr)
{
    if(!arr[5].style.boxShadow)
    {
        changeImg("right", arr);
    }
}

function lefttBtnClick(arr)
{
    if(!arr[5].style.boxShadow)
    {
        changeImg("left", arr);
    }
}

//2) When div is clicked
function featureSelect(arr)
{
    arr[5].style.transform="translateY(-2.2em)";
    arr[5].style.boxShadow = "#FC0 1px 0 10px";
    arr[5].style.height="60px";
    arr[5].style.width="155px";
    arr[4].style.opacity="0.4";
    arr[6].style.opacity="0.4";
    arr[5].style.position="relative";
    arr[5].style.right="20px";
    arr[8].style.opacity="0.25";
    arr[9].style.opacity="0.25";
    arr[7].src = arr[5].src;
    arr[7].classList.add(`${arr[13]}Image`);
    arr[3].appendChild(arr[7]);
    
    selectedChoices["selected"+arr[13]]=arr[11];
    checkConditionAndRedirect();
}

function featureDeSelect(arr)
{
    arr[5].style.boxShadow="";
    arr[5].style.width="125px";
    arr[5].style.height="48px";
    arr[5].style.transform="translateY(-1em)";
    arr[8].style.opacity="1";
    arr[9].style.opacity="1";
    arr[4].style.opacity="0.6";
    arr[6].style.opacity="0.6";
    arr[3].removeChild(arr[7]);
    arr[5].style.right="0px";

    selectedChoices["selected"+arr[13]]=0;
}

//3.1) To check value of i(arr[10]), j(arr[11]), k(arr[12]) at extreme cases
function changeImg(side, arr) 
{
    if(side === "right")
    {
        if(arr[11]==6) arr[12]=0;
        if(arr[11]==7) arr[11]=0;
        if(arr[11]==1) arr[10]=0;
        changeId(++arr[10], ++arr[11], ++arr[12], arr);
    }
    else
    {
        if(arr[11]==2) arr[10]=8;
        if(arr[11]==7) arr[12]=8;
        if(arr[11]==1) arr[11]=8;
        changeId(--arr[10], --arr[11], --arr[12], arr);
    }
}

//3.2) For rotation of available facial feature 
function changeId(i, j, k, arr)
{
    arr[0].removeChild(arr[4]);
    arr[1].removeChild(arr[5]);
    arr[2].removeChild(arr[6]);
    arr[4].src = `../Pictures/${arr[13]}${i}.png`;
    arr[5].src = `../Pictures/${arr[13]}${j}.png`;
    arr[6].src = `../Pictures/${arr[13]}${k}.png`;
    arr[4].style.width="100px";
    arr[4].style.height="38px";
    arr[4].style.opacity="0.6";
    arr[5].style.width="125px";
    arr[5].style.height="48px";
    arr[5].style.transform="translateY(-1em)";
    arr[6].style.width="100px";
    arr[6].style.height="38px";
    arr[6].style.opacity="0.6";
    arr[0].appendChild(arr[4]);
    arr[1].appendChild(arr[5]);
    arr[2].appendChild(arr[6]);
}


//4)Function to redirect to end page

function allChoiceSelected()
{
    if(
        selectedChoices.selectedHair>0 && 
        selectedChoices.selectedEye>0  &&
        selectedChoices.selectedNose>0 &&
        selectedChoices.selectedMouth>0
      )
        return true;
}

function correctChoiceSelected()
{
    if(
        selectedChoices.selectedHair==selectedChoices.selectedEye &&
        selectedChoices.selectedHair==selectedChoices.selectedNose&&
        selectedChoices.selectedHair==selectedChoices.selectedMouth
      )
    return true;

}

function checkConditionAndRedirect()
{
    if(allChoiceSelected())
    {   
        //send the value
        if(correctChoiceSelected())
        {
            localStorage.setItem('p', selectedChoices.selectedHair);
        }
        else
        {
            localStorage.setItem('p', -1);
        }
        setTimeout( function(){
            window.location.href="../Result/result.html";
        },2000)
        // window.location.href="../Result/result.html";
    }
}