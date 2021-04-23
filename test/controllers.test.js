const charCounter = require('../src/Controllers/charCounter');
const episodeLocation = require('../src/Controllers/episodeLocations');
const { test } = require('@jest/globals');

describe('Test function getDataReduce', () => {
    test('Given a one object in array', () => {
        const obj = [{name:'Rick Caramelo'}];
        const countLetters = charCounter.getDataReduce(obj, 'r', 'name');
        expect(countLetters).toEqual(2);
    });
    test('Given a more objects', () => {
        const obj = [
            {
                name:'Rick Caramelo'
            },
            {
                name:'Morty Montesir'
            }
        ];
        const countLetters = charCounter.getDataReduce(obj, 'm', 'name');
        expect(countLetters).toEqual(3);
    });
    test('Given a empty array', () => {
        const obj = [];
        const countLetters = charCounter.getDataReduce(obj, 'm', 'name');
        expect(countLetters).toEqual(0);
    });
    test('Given a letter', () => {
        const obj = [{name: 'kilo'}];
        const countLetters = charCounter.getDataReduce(obj, 'm', 'name');
        expect(countLetters).toEqual(0);
    });
});

describe('Get a list with the name of characters and origins name for each episode', () => {
    test('episodeLocation', async () => {
        const eLocation = await episodeLocation.eLocation();
        expect(eLocation).toBeDefined();
    });
});