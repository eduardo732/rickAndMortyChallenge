const charCounter = require('../src/Controllers/charCounter');
const episodeLocation = require('../src/Controllers/episodeLocations');
const { test } = require('@jest/globals');

describe('charCounter of l in locations e in episodes and c in characters', () => {
    test('GET all l in the names of locations', async () => {
        const charLCount = await charCounter.getCountLocations();
        expect(charLCount).toBeDefined();
    },15000);
    test('GET all e in the names of episodes', async () => {
        const charECount =  await charCounter.getCountEpisode();
        expect(charECount).toBeDefined();
    },15000);
    test('GET all c in the names of characters', async () => {
        const charCCount = await charCounter.getCountCharacter();
        expect(charCCount).toBeDefined();
    },15000);
});
describe('Get a list with the name of characters and origins name for each episode', () => {
    test('episodeLocation', async () => {
        const eLocation = await episodeLocation.eLocation();
        expect(eLocation).toBeDefined();
    },15000);
});