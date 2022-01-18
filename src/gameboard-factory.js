const Ship = require("./ship-factory");

class Gameboard {
    constructor() {
        this.board = [];
        this.init();
    }
    init() {
        for (let i = 0; i < 100; i++) {
            this.board[i] = [];
            for (let j = 0; j < 1; j++) {
                this.board[i].hit = false;
                this.board[i].ship = false;
            }
        }
    }
    placeShip(length, coordinates) {
        for (let i = 0; i < coordinates.length; i++) {
            this.board[coordinates[i]].ship = true;
        }
        return new Ship(length);
    }
    receiveAttack(coordinates) {
        this.board[coordinates].hit = true;
        // if (this.board[coordinates].ship === true) {

        // }
    }
}

module.exports = Gameboard;