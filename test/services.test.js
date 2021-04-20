"use strict";
const serviceEpisode = require("../src/Services/serviceEpisode");
const serviceCharacter = require("../src/Services/serviceCharacter");
const { test } = require('@jest/globals');

describe('Rick and morty Episodes', () => {
    test("GET connection success api Episodes of Rick and Morty", async () => {
        const data = await serviceEpisode;
        expect(Array.isArray(data)).toBeTruthy();
    });
    test("GET connection failed api Episodes of Rick and Morty", async () => {
        const data =  serviceEpisode;
        expect(Array.isArray(data)).not.toBeTruthy();
    });
});
describe('Rick and morty Characters', () => {
    test("GET connection success api Characters of Rick and Morty", async () => {
        const data = await serviceCharacter;
        expect(Array.isArray(data)).toBeTruthy();
    },15000);
    test("GET connection failed api Characters of Rick and Morty", async () => {
        const data =  serviceCharacter;
        expect(Array.isArray(data)).not.toBeTruthy();
    });
});

