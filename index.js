var winCount = 0;
var lossCount = 0;
var targetScore = 0
var yourScore = 0;


function targetDisplay(){
targetScore = Math.floor(Math.random()*100 + 17)
console.log(targetScore)
    $("#target-score").text(targetScore)
}


targetDisplay()


function cristalValue(){
 blueValues = Math.floor(Math.random()*10 +3)
 greenValues = Math.floor(Math.random()*10 +3)
 redValues = Math.floor(Math.random()*10 + 3)
yellowValues = Math.floor(Math.random()*10 +3)
console.log(blueValues)
console.log(greenValues)
console.log(redValues)
console.log(yellowValues)
}

cristalValue()




$("#blue").on("click",function(){
    yourScore +=blueValues
    $("#your").text(yourScore)
    checkWin()
})

$("#green").on("click",function(){
    yourScore +=greenValues
    $("#your").text(yourScore)
    checkWin()
})

$("#red").on("click",function(){
    yourScore +=redValues
    $("#your").text(yourScore)
    checkWin()

})

$("#yellow").on("click",function(){
    yourScore += yellowValues
    $("#your").text(yourScore)
    checkWin()

})

function startGame(){
    targetDisplay()
    cristalValue()
    yourScore = 0;
    targetDisplay()
    $("#your").text(yourScore)

}



function checkWin(){
    if(yourScore == targetScore){
        winCount++;
        $("#win-count").text(winCount)
        alert("Congratulations! You Won!")
      startGame()
    }else if(yourScore > targetScore){
        lossCount++;
        $("#lose-count").text(lossCount)
        // startGame()
        alert("Sorry. You lost!")
        startGame()
    }
}