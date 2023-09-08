var gameData = {
    knights: 0,
    knightsPerClick: 1,
    knightsPerClickCost: 10
}

function progressKnight() {
    gameData.knights += gameData.knightsPerClick
    document.getElementById("knightsProgressed").innerHTML = gameData.knights + " Knights Progressed"
}

function buyKnightsPerClick() {
    if (gameData.knights >= gameData.knightsPerClickCost) {
        gameData.knights -= gameData.knightsPerClickCost
        gameData.knightsPerClick += 1
        gameData.knightsPerClickCost *= 2
        document.getElementById("knightsProgressed").innerHTML = gameData.knights + "Knights Progressed"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Hero (Currently Level " + gameData.knightsPerClick + ") Cost: " + gameData.knightsPerClickCost + " Knights"
    }
}

var mainGameLoop = window.setInterval(function() {
    progressKnight()
  }, 1000)