var wins = 0
var losses = 0
var taScore = Math.ceil(Math.random()*150 + 50) 
var g1 = Math.ceil(Math.random()*11 + 1)
var g2 = Math.ceil(Math.random()*11 + 1)
var g3 = Math.ceil(Math.random()*11 + 1)
var g4 = Math.ceil(Math.random()*11 + 1)
var toScore = 0
var buttonClick = function(num){
  var gems = [gem1, gem2, gem3, gem4]
  toScore += gems[num-1]
  document.getElementById("totalScore").innerHTML = "Total Score: " + toScore
}