let myApp = Vue.createApp({
    data() {
        cup3 = 0
        cup5 = 0
        moveList = [];
        return {
            cup3: 0,
            cup5: 0,
            moveList: []
        };

    },
    methods: {
        pour3To5: function (event) {
            if (this.cup5 + this.cup3 > 5) {
                let temp = 5 - this.cup5;
                this.cup3 = this.cup3 - temp;
                this.cup5 = 5;
            } else {
                this.cup5 += this.cup3;
                this.cup3 = 0;
            }
            this.moveList.push({ text: "3 -> 5", id: Symbol() });
        },
        pour5To3: function (event) {
            if (this.cup5 + this.cup3 > 3) {
                let temp = 3 - this.cup3;
                this.cup5 = this.cup5 - temp;
                this.cup3 = 3;
            } else {
                this.cup3 += this.cup5;
                this.cup5 = 0;
            }
            this.moveList.push({ text: "5 -> 3", id: Symbol() });
        },
        fill3: function (event) {
            this.cup3 = 3;
            this.moveList.push({ text: "fill 3", id: Symbol() });
        },
        fill5: function (event) {
            this.cup5 = 5;
            this.moveList.push({ text: "fill 5", id: Symbol() });
        },
        dump3: function (event) {
            this.cup3 = 0;
            this.moveList.push({ text: "dump 3", id: Symbol() });
        },
        dump5: function (event) {
            this.cup5 = 0;
            this.moveList.push({ text: "dump 5", id: Symbol() });
        },
    },
    computed: {
        message: function () {
            if (this.cup3 === 0 && this.cup5 === 0) {
                return "Welcome!";
            }
            if (this.cup5 === 4) {
                return "Congratulations!";
            }
        }

    }
}).mount('#app');