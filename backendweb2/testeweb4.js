const express = require('express');
const bodyParser = require('body-parser');
const port= 3080;

var urlencodedParser = bodyParser.urlencoded({extended:
  false})

const app = express();
app.use(bodyParser.json());

app.post('/addplayer',urlencodedParser, (req, res) => {
  var player = req.body.player;
  var score = req.body.score;
  var level = req.body.level;
  var time_played = req.body.time_played
  var items_collected = req.body.items_collected
  var game_mode = req.body.game_mode

app.post('/game', urlencodedParser,(req, res) => {
  const game = req.body;
  console.log(game);
  res.json(game);
});

app.listen(3080, () => {
  console.log('Server na port 3080:  http://localhost:3080');
});

}