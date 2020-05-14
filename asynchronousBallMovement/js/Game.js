class Game {
    constructor() {
    }

    getState() {
        db.ref("gameState").on("value", function (data) {
            gameState = data.val();
        })
    }

    update(state) {
        db.ref("/").update({
            gameState: state
        });
    }

    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play() {
        form.hide();
        text("gameStart", 120, 100);
        Player.getPlayerInfo();
        if (allPlayers !== undifined) {
            var dp = 130;
            dp += 20;
            text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, dp)
        }
        if (keyIsDown("UP_ARROW") && player.index !== null) {
            player.distance += 50;
            player.update();
        }
    }

 
}

