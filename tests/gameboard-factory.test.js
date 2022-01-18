const Gameboard = require('../src/gameboard-factory');
const Ship = require('../src/ship-factory')


describe('put one ship on board', () => {
    let testBoard;
    let testShip;
    testBoard = new Gameboard();
    console.log(testBoard.board[0]);
    testShip = testBoard.placeShip(2, [0, 1]);
    test('ship placed', () => {
        expect(testShip).toEqual({
            length: 2,
            shipBody: [0, 1],
            hits: [],
            sunk: false
        });
    })
    test('ship on gameboard', () => {
        expect(testBoard.board[0].ship).toEqual(true)
    })
    test('gameboard show hit', () => {
        testBoard.receiveAttack(0);
        expect(testBoard.board[0].hit).toEqual(true);
    })
    test('ship show hit', () => {
        testBoard.receiveAttack(0);
        expect(testShip.hits).toEqual([0]);
    })
})