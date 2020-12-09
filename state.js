// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// The consolidated state of our app
var state = {
  // World
  worldRatio: getWorldRatio(),
  turn: 1,
  players: [{
    name:"Bill Lau"
  }, {
      name: "Alice Yuan"
  },
  ],
  currentPlayerIndex: Math.round(Math.random())
}
