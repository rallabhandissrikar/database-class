class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount() {
        db.ref("playerCount").on("value", function(data) {
            playerCount = data.val();

        })
    }

    updateCount(count) {
        db.ref("/").update({
            playerCount : count
        })
    }

    update() {
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({
            name : this.name,
            distance : this.distance,
            
        });
    }

    static getPlayerInfo() {
        var piref = database.ref("players");
        piref.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}