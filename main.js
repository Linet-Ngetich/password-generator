const generateBtn = document.getElementById("generate-btn")
const output1 = document.getElementById("output1")
const output2 = document.getElementById("output2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8",
 "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
 "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 =""
let password2 = ""

generateBtn.addEventListener("click", function() {
    for (let i = 0; i < 13; i++) {
        let index = Math.floor(Math.random()* 91)
        password1 += characters[index]
    }
    output1.textContent = password1
    password1 = ""
})

generateBtn.addEventListener("click", function() {
    for (let i = 0; i < 13; i++) {
        let index = Math.floor(Math.random()* 90)
        password2 += characters[index]
    }
    output2.textContent = password2
    password2 = ""

})







