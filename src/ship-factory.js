class Ship {
    constructor(length) {
            this.length = length;
            this.shipBody = [];
            this.hits = [];
            this.sunk = false;
            this.calcShipBody(length);
    }
    calcShipBody(length) {
        for (let i = 0; i < length; i++) {
            this.shipBody.push(i);
        }
    }
    hit(a) {
         this.hits.push(a);
    }
    isSunk() {
        if (this.hits === this.shipBody) {
            return this.sunk = true;
        } else if (this.hits == null || this. shipBody == null) {
            return this.sunk = false;
        } else if (this.hits.length !== this.shipBody.length) {
            return this.sunk = false;
        } 
        this.hits.sort();
        this.shipBody.sort();
        for (let i = 0; i < this.hits.length; i++) {
            if (this.hits[i] !== this.shipBody[i]) {
                return this.sunk = false;
            }
        } return this.sunk = true;
    }
}

module.exports = Ship;