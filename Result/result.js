const gifDiv=document.getElementById("gifDiv");
const resultDiv=document.getElementById("resultDiv");
const vidDiv=document.getElementById("vidDiv");
const msgDiv=document.getElementById("msg");
const writtenDiv = document.getElementById('written');
const gokuMsg=document.getElementById('gokuMsg');
const popup=document.querySelector(".popup");

// Get the value
var pValue = localStorage.getItem('p');
// console.log(pValue);


if(pValue>-1)
{
    var win=true;
}
else
{
    var win=false;
}


document.body.removeChild(msgDiv);//removed every element so video can play properly
  
//video creation and append
  

vid=document.createElement("video");
vid.src="load2.mp4";
vid.autoplay="true";
vid.style.height="720px";
vid.style.width="1300px";
vid.style.marginLeft="100px";
document.body.style.backgroundColor="black";
vidDiv.appendChild(vid);
  
//video is 18sec long and i want page to load after 18sec


setTimeout(load,18000);

//load function which will load after video

function load(){
    
    //removing video and its div and appending other divs

    vidDiv.removeChild(vid);
    document.body.removeChild(vidDiv);
    document.body.style.backgroundColor="#f7e7ce";
    document.body.appendChild(msgDiv);
    
    //code so writtenDiv will fade in and fade out 

    msgDiv.addEventListener('mousein', () => {
    writtenDiv.style.opacity = 0;
    });

    //did not find good audio so dropped the idea of adding music

    // audio=document.createElement("audio");
    // audio.src="resultEnd.mpeg";
    // audio.autoplay="true";
    // audio.loop="true";
    // audio.style.visibility="hidden";

    //appending other divs,gif,result,speech according to win=true or false  

    msgDiv.style.visibility="visible";

//Promises and bs because if-else did not work on xampp earlier but working now
// Creating a promise
// const myPromise = new Promise((resolve, reject) => {
//     // Perform some asynchronous operation
  
//     if (win/* operation is successful */) {
//       resolve(/* result */); // Resolve the promise with a value
//     } else {
//       reject(/* error */); // Reject the promise with an error
//     }
//   });
  
//   // Using the promise
//   myPromise
//     .then((result) => {
//       // Handle the successful result
//       console.log("True");
//     })
//     .catch((error) => {
//       // Handle the error
//       console.log("False");
//     })
//     .finally(() => {
//         console.log("Bullshit");
//       // Perform cleanup or additional actions (optional)
//     });
  
        if(win)
            {   
                msg="You Won";
                document.body.style.backgroundImage="url(winbg.png)";
                msgFunc(msg,0,0.1);
                gifFunc("win");
                if(pValue==1)
                resultFunc("Won","Goku");
                else if(pValue==2)
                resultFunc("Won","Vegeta");
                else if(pValue==3)
                resultFunc("Won","Krillin");
                else if(pValue==4)
                resultFunc("Won","Broly");
                else if(pValue==5)
                resultFunc("Won","Tien");
                else if(pValue==6)
                resultFunc("Won","Trunks");
                else if(pValue==7)
                resultFunc("Won","Gohan");
            }
        else
            {   
                msg="You Lost";
                document.body.style.backgroundImage="url(vegeta_drunk-t2.jpg)";
                msgFunc(msg,0,0.1);
                gifFunc("lose");
                resultFunc("Lost","Nothing");
            }
}

//function to append gif at correct position according to win/loss


function gifFunc(condition)
{ 
    gif=document.createElement("img");
    gif.src=`${condition}.gif`;
    gif.style.boxShadow="white 5px 0 20px";
    gif.style.borderRadius="20px";
    gif.style.height="300px";
    gifDiv.appendChild(gif);
}

//function to provide result according to win or loss


function resultFunc(condition,character)
{
    resultDiv.style.fontSize="40px";
    resultDiv.style.fontFamily="Saiyan sans";
    resultDiv.innerHTML=`<p>You ${condition}!!<br>You made ${character}<br> Open the letter to unravel the message from Goku for you.</p>`;
    resultDiv.style.textAlign="center";
}

//used speech synthesis api to read text to speech


function msgFunc(input,pitch,rate)
{
    // Check if the SpeechSynthesis API is supported by the browser
if ('speechSynthesis' in window) {
    // Create an instance of SpeechSynthesisUtterance
    var msg = new SpeechSynthesisUtterance();
  
    // Set the text to be spoken
    msg.text = input;
  
    // Optional: Set the speech rate and pitch
    msg.rate = rate; // Speech rate (0.1 to 10)
    msg.pitch = pitch; // Speech pitch (0 to 2)
  
    // Optional: Set the voice
    // You can specify the voice by name, language, or using the SpeechSynthesisVoice object
    // Example: msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Google UK English Female'; })[0];
  
    // Speak the text
    window.speechSynthesis.speak(msg);
  }
}

//Function to provide message from goku


function gokuMsgFunc()
{   
    console.log("Hello");
    if(win)
    {
        input="Wow, you've done it!<br> You've surpassed<br> even my expectations!<br> Great job!<br> Your determination and<br> strength are truly<br> remarkable.<br> Keep honing your skills,<br> and I have no doubt<br> you'll become an<br> incredible warrior!";    
    }
    else
    {
        input="Haha!<br> Looks like you're no match<br> for my training!<br> But don't worry,<br> I'll go easy<br> on you next time...<br> maybe. Keep pushing<br> yourself, and who knows,<br> maybe one day<br> you'll catch up to me!";
    }
    showPopup(input);
}

//function to show popup


function showPopup(input) {
 
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    gokuMsg.style.fontFamily="Saiyan sans";
    gokuMsg.style.fontSize="32px";
    gokuMsg.style.textAlign="Center";
    gokuMsg.innerHTML=input;
    msgFunc(input,0.5,0.8);
  }

  
function hidePopup() {
    // var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// document.body.addEventListener("click",hidePopup());