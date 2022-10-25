Vue.createApp({
    data() {
        return { operand1: "", operand2: "" };
    },
    methods: {
        isPositiveInteger(a) {
            return Number.isInteger(a) && (a >= 1);
        },
        isNonNegativeInteger(a) {
            return Number.isInteger(a) && (a >= 0);
        }
    },
    computed: {
        singleOk() {
            return Number.isFinite(this.operand1);
        },
        doubleOk() {
            return Number.isFinite(this.operand2)
        },
        factorial() {
            let ret = 1;
            for (let i = 1; i <= Math.min(this.operand1, 200); i++) {
                ret *= i;
            }
            console.log("Worked: " + ret);
            return ret;
        },
        addEm() {
            let i = this.operand1;
            let ret = i * (i + 1) / 2;
            return ret;
        },
        lessThan4() {
            if (operand1 > 4) return false;

            let msg;
            for (let i = 0; i < operand1; i++) {
                msg += i + ' ' + '+';
            }
            return msg;
        }
    }
}).mount('#app');

