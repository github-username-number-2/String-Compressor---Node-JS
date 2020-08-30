const CL = require("./main.js");

function displayFormatted(state, progress, compressionNum, compressionPower, originalLength) {
  console.log(
    `${state} [${
      "■".repeat(Math.floor(progress / 5))
      + "-".repeat(Math.ceil((100 - progress) / 5))
    }] ${compressionNum} ${originalLength - compressionPower}/${originalLength}`
  );
}

const string = `body{cursor:default;overflow:hidden;margin:0}hr{height:.5px;background-color:#cfcfcf}.quicksand{font-family:Quicksand,sans-serif;position:absolute}.montserrat{font-family:Montserrat,sans-serif;position:absolute}.container{position:absolute}.convbox{position:relative;height:5vh;width:21vw;border-top:1px solid #46484b;background-color:#55575c}.convbox:hover{background-color:#818388}.convtitle{position:relative;margin:0;font-size:2vh;left:1vw;top:1.7vh;font-family:Quicksand,sans-serif}.msgbox{display:none;position:absolute;top:8vh;height:64vh;width:100%;overflow-y:scroll;scrollbar-color:#5b6370;background-color:#29292c}.msgbox::-webkit-scrollbar{-webkit-appearance:none;width:7px}.msgbox::-webkit-scrollbar-thumb{background-color:#5b6370}.msg{position:absolute;display:inline-block;border-radius:4px;padding:6px;word-break:break-word;margin-bottom:2vh;max-width:40vw;background-color:#0b0bda}.nomsgtext{position:relative;text-align:center;top:27vh;font-size:2.4vh;font-family:Quicksand,sans-serif;color:#cfcfcf}.convdatediv{display:none;position:absolute;width:100%}.convdate{position:relative;margin:0;top:1vh;text-align:center;font-size:1.6vh;opacity:.6;color:#cfcfcf;font-family:Quicksand,sans-serif}.userupdatesdiv{display:none;position:relative;width:100%;height:1vh}.userupdatesdiv>p{position:absolute;margin:0;left:1vw;bottom:1vh;font-size:1.7vh;opacity:.7;color:#cfcfcf;font-family:Quicksand,sans-serif}.newmsg{position:absolute;top:2.2vh;left:.3vw;display:none;font-size:.6vh}.showconvoptions{position:absolute;top:1.3vh;right:.1vw;height:2.4vh}.showconvoptions:hover{opacity:.6}.convoption{position:relative;width:100%;height:4vh;background-color:#55575c;border-top:1px solid #55575c}.convoption:hover{background-color:#818388}.modebutton{position:absolute;bottom:0;width:9vh;height:9vh;background-color:#151516}.modebutton:hover{background-color:#202020}.buttonimage{position:absolute;left:2.5vh;top:2.5vh;width:4vh}.insertlink{color:#000e8a}.insertlink:active{color:#00095c}.insertlink:visited{color:#5a0073}.insertimage{width:20vw}.optiontext{position:absolute;left:.3vw;margin-top:1.3vh;font-size:1.5vh;color:#000;font-family:Quicksand,sans-serif}.sidebutton{display:none;position:absolute;z-index:11;width:50vw;height:70vh;left:25vw;top:15vh;background-color:#0e0e0e}.sidebutton>div{position:absolute;top:10vh;left:5vw;width:40vw;height:50vh;border-radius:8px;overflow-y:scroll;overflow-x:hidden;word-break:keep-all;background-color:#0e0e0e}.sidebutton>div>*{margin-left:2vw;margin-right:2vw;font-family:Quicksand,sans-serif}.sidebutton>div>h2{position:relative;text-align:center;color:#cfcfcf;font-size:4vh}.sidebutton>div>h3{position:relative;color:#cfcfcf;font-size:3vh}.sidebutton>div>p{position:relative;color:#cfcfcf;font-size:2vh}.sidebutton>div>button{position:relative;width:40%;height:4vh;margin-left:30%;margin-bottom:2vh;font-size:2vh;font-family:Montserrat,sans-serif}.settingoption{position:absolute;height:8vh;left:15%;width:70%}.settingsbuttonback{position:absolute;width:3vw;height:3vh;left:2vw;top:2.5vh;border-radius:1.5vh;background-color:#4535d4}.settingsbutton{position:absolute;margin:auto;width:4vh;height:4vh;top:-.5vh;border-radius:50%;background-color:#2832bf}.settingstext{position:absolute;top:.2vh;word-break:keep-all;color:#cfcfcf;font-size:2.5vh;margin-left:7vw}.spacer{position:relative;opacity:0;height:4vh}.canvasinput{display:none;position:absolute;width:5vw;height:4vh;top:8vh;z-index:1;margin:0}#noconvtext{position:relative;text-align:center;top:35vh;font-size:2.4vh;font-family:Quicksand,sans-serif;color:#cfcfcf}#lcontainer{width:10vw;height:100vw;left:0;top:12vh;background-color:#29292c}#ccontainer{width:21vw;height:100vw;left:10vw;top:12vh;border-left:1vw solid #0e0e0e;border-right:1vw solid #0e0e0e;background-color:#29292c}#mcontainer{width:46vw;height:88vh;left:33vw;top:12vh;background-color:#29292c}#rcontainer{width:20vw;height:100vw;right:0;top:12vh;border-left:1vw solid #0e0e0e;background-color:#151516}#inputcontainer{width:100%;height:16vh;bottom:0;background-color:#151516}#accontainer{width:21vw;height:76vh;top:12vh;overflow-x:hidden;overflow-y:auto;background-color:#29292c}#c1{position:absolute;width:100%;height:6vh;left:0;background-color:#151516}#t1{position:absolute;left:1vw;top:-.3vh;font-size:2.4vh;color:#cfcfcf}#b1{position:absolute;height:5vh;width:5vh;right:.5vh;top:.5vh;border-radius:50%;background-color:#121212}#b1:hover{background-color:#202020}#b2{position:absolute;height:7vh;width:7vh;right:0;top:0;z-index:2;background-color:#a0a0af}#b2:hover{background-color:#bfbfc7}#t2{position:relative;margin-top:0;text-align:center;font-size:4vh;top:.1vh;color:#cfcfcf}#s1{position:absolute;width:100%;height:4vh;top:6vh;background-color:#faf}#c2{position:absolute;width:100%;height:8vh;top:0;background-color:#151516}#t3{left:1vw;top:-1vh;font-size:4vh;color:#cfcfcf}#t4{right:1vw;top:-1vh;font-size:4vh;color:#cfcfcf}#i1{position:absolute;top:0;width:19vw;height:2vh;border:none;outline:0;margin:auto;padding-top:2vh;padding-bottom:2vh;padding-left:1vw;padding-right:1vw;font-size:2vh}#i2[type=text]{position:absolute;top:0;width:100%;height:4vh;border:none;outline:0;margin:auto;font-size:2.5vh;padding-top:1.5vh;padding-bottom:1.5vh;padding-left:1vw;padding-right:1vw}#i2[type=file],#i2[type=file]::-webkit-file-upload-button{position:absolute;width:100%;height:7vh;top:0;font-size:2vh;outline:0;font-family:Montserrat,sans-serif}#img1{position:absolute;left:1vh;top:1vh;width:5vh;height:5vh}#errbox{display:none;position:fixed;z-index:100;left:35vw;top:35vh;width:30vw;height:10vh;border-radius:5px;background-color:#151516}#errtext{position:relative;text-align:center;top:2.4vh;font-size:1.7vh;color:#cfcfcf;font-family:Quicksand,sans-serif}#errboxexit{position:absolute;height:1.6vh;top:.8vh;right:1vh;border-radius:4px;filter:grayscale(100%)}#errboxexit:hover{filter:grayscale(0)}#errmask{display:none;position:absolute;width:100vw;height:100vh;opacity:.8;z-index:99;background-color:#000}#mask{position:absolute;width:100vw;height:100vh;opacity:.8;z-index:9;background-color:#000}#mask>p{position:relative;top:49vh;text-align:center;font-size:2vh;color:#cfcfcf;font-family:Quicksand,sans-serif}#convoptions{position:absolute;right:0;width:40%;display:none;z-index:1;border:1px solid #29292c;background-color:#55575c}#updates{width:100%;height:100%}#updates>h2{position:relative;text-align:center;font-size:3.3vh}#updates>p{margin-left:1vw;margin-right:1vw;font-size:2.4vh}#updates>*{font-family:Quicksand,sans-serif;word-break:keep-all;color:#cfcfcf}#sidebuttonexit{display:none;position:absolute;z-index:12;height:1.6vh;width:1vw;top:16.6vh;right:26vw;border-radius:4px;filter:grayscale(100%)}#sidebuttonexit:hover{filter:grayscale(0)}#settingscontainer{position:relative;width:100%}#bugreport{position:relative;display:block;margin-left:auto;margin-right:auto;width:50%;height:15vh;padding:5%;resize:none;background-color:#cfcfcf}#sendbugreport{position:relative;width:30%;height:4vh;margin-left:35%;margin-bottom:2vh;font-size:2vh;font-family:Montserrat,sans-serif}#suggestion{position:relative;display:block;margin-left:auto;margin-right:auto;width:50%;height:15vh;padding:5%;resize:none;background-color:#cfcfcf}#sendsuggestion{position:relative;width:30%;height:4vh;margin-left:35%;margin-bottom:2vh;font-size:2vh;font-family:Montserrat,sans-serif}#inputback{position:absolute;width:calc(100% - 7vh);top:0;left:0;height:7vh;background-color:#fff}#preview{display:none;position:absolute;width:14vw;right:7vh;bottom:9vh;padding:1vw;border-top-left-radius:4px;border-top-right-radius:4px;z-index:1;background-color:#202020}#canvas{display:none;position:absolute;top:8vh;z-index:1;background-color:#fff}`;
const stringLength = string.length;

CL.compress(string, {
  searchLength: 50,
  //max number of characters to be searched
  //set to "full" or leave blank to search every possible combination (very slow for long strings)

  progressUpdate: function (state, progress, compressionNum, compressionPower) {
    displayFormatted(
      state,
      // current state

      progress,
      // progress in current state

      compressionNum,
      // number of times string has been re-compressed

      compressionPower,
      // current compression power

      stringLength
    );
  }
}).then(res => {
  console.log("\n\n\n");


  console.log(res.compressed);
  //whether or not the compressed value was shorter than the original


  console.log(res.compressionPower);
  //original length - compressed length, null if original was shorter


  console.log(res.value);
  //returns shortest string, compressed or original


  console.log(
    CL.decompress(res.value)
  );
});