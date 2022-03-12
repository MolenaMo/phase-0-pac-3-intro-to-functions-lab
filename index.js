function shout(string) {
    return string.toUpperCase();
}
//"Hello!".toUpperCase(); // 'Hello!' 

//function whisper(string)
//    return string.toLowerCase
function whisper(string) {
    return string.toLowerCase();
}
//this also works as shortcut
/*function logShout(string){
    console.log("HELLO")
}*/

function logShout(string){
    console.log(string.toUpperCase())
}

//this also doesn't work
function logWhisper(string){
    console.log(string.toLowerCase())
}
//this also works as shortcut
/*function logWhisper(string){
    console.log("hello")*/

function sayHiToHeadphonedRoommate(string){
   if (string.toLowerCase() === string)
   return 'I can\'t hear you!'

    if (string.toUpperCase()=== string)
    return 'YES INDEED!'

    if (string === "Let\'s have dinner together!")
    return "I would love to!"
}