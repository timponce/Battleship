const Ship = require('../src/ship-factory');

test('new ship with length and position', () => {
    expect(new Ship(2)).toEqual({
        length: 2,
        shipBody: [0, 1],
        hits: [],
        sunk: false
    })
})

test('new ship with length and position (2)', () => {
    expect(new Ship(3)).toEqual({
        length: 3,
        shipBody: [0, 1, 2],
        hits: [],
        sunk: false
    })
})

describe('Ship class methods', () => {
    let testShip;
    beforeEach(() => {
        testShip = new Ship(2);
    });
    test('hit', () => {
        testShip.hit(0);
        expect(testShip.hits).toEqual([0]);
    })
    test('two hits', () => {
        testShip.hit(0);
        testShip.hit(1);
        expect(testShip.hits).toEqual([0, 1]);
    })
    describe('ship isSunk tests', () => {
       beforeEach(() => {
           testShip.hit(1);
       }) 
        test('isSunk 1 of 2 hit', () => {
            testShip.isSunk();
            expect(testShip.sunk).toEqual(false);
        })
        describe('sdfj', () => {
            beforeEach(() => {
                testShip.hit(0);
            })
            test('isSunk 2 of 2 hit', () => {
                testShip.isSunk();
                expect(testShip.sunk).toEqual(true);
            })
        })
    })
})