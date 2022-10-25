let myApp = Vue.createApp({
    data() {
        boat: 0
        goat: 0
        wolf: 0
        cabb: 0
        gameState: 0
        isAcross: 0
        return {
            boat: 0,
            goat: 0,
            wolf: 0,
            cabb: 0,
            gameState: 0,
            isAcross: 0,
        }

    },
    methods: {
        moveBoat: function (event) {
            if (this.boat === 0) {
                this.boat = 1;

            } else if (this.boat === 1) {
                this.boat = 0;
            }
            this.isAcross = 0;
        },
        moveGoat: function (event) {
            if (this.goat === this.boat) {
                this.moveBoat();
                if (this.goat === 1) {
                    this.goat = 0;
                } else {
                    this.goat = 1;
                }
            } else {
                this.isAcross = 1;
            }
        },
        moveWolf: function (event) {
            if (this.wolf === this.boat) {
                this.moveBoat();
                if (this.wolf === 1) {
                    this.wolf = 0;
                } else {
                    this.wolf = 1;
                }
            } else {
                this.isAcross = 1;
            }
        },
        moveCabb: function (event) {
            if (this.cabb === this.boat) { //on the same side
                this.moveBoat();
                if (this.cabb === 1) {
                    this.cabb = 0;
                } else {
                    this.cabb = 1;
                }
            } else {
                this.isAcross = 1;
            }
        },
        restart: function (event) {
            this.boat = 0
            this.goat = 0
            this.wolf = 0
            this.cabb = 0
            this.gameState = 0
        },
    },
    computed: {
        message: function () {
            if (this.wolf === this.goat && this.boat !== this.goat) { //wolf + goat
                this.gameState = 1;
                return ("You lost. The wolf ate the goat!");
            }
            if (this.goat === this.cabb && this.boat !== this.goat) { //goat + cabb
                this.gameState = 1;
                return ("You lost. The goat ate the cabbage!");
            }
            if (this.wolf === 1 && this.goat === 1 && this.cabb === 1 && this.boat === 1) {
                this.gameState = 1;
                return ("You won. You crossed the river!");
            }
            if (this.isAcross === 1) {
                return "That is across the river!"
            }
        }
    }
}).mount('#app');