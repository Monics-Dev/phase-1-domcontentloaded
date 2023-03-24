document.addEventListener("DOMContentLoaded", function (){
    console.log("The DOM has loaded")
    let parTag = document.getElementById ("text")
    parTag.textcontent = "This is really cool!"
})
console .log ("Load DOM before event listener")