class Form {

    constructor() {
        this.title = createElement('h2');
        this.button = createButton("submit");
        this.greet = createElement("h3");
        this.input = createInput("name");
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }
    display() {
        
        this.title.html("CAR GAME");
        this.title.position(130,0);
        
        this.input.position(130, 160);
        
        
        this.button.position(250, 200);
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greet.html("welcome " + name);
            this.greet.position(130, 160);
        })
    }
}