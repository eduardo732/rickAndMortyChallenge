"use strict";
const helper = require('../src/Helpers/serviceHelpers');
const { test } = require('@jest/globals');

const goodCharacterURL = "https://rickandmortyapi.com/api/character/";
const badCharacterURL = "https://rickandmortyapi.com/api/charact";

const goodEpisodeURL = "https://rickandmortyapi.com/api/episode/";
const badEpisodeURL = "https://rickandmortyapi.com/api/episo";

describe('Try requests on Rick and Morty api', () => {
    test("GET connection success api Characters of Rick and Morty", async () => {
        const data = await helper(goodCharacterURL);
        expect(Array.isArray(data)).toBeTruthy();
    });
    test("GET connection failed api Characters of Rick and Morty", async () => {
        const data =  await helper(badCharacterURL);
        expect(data).toEqual('Ouch something is wrong with the requests');
    });
    test("GET connection success api Episodes of Rick and Morty", async () => {
        const data = await helper(goodEpisodeURL);
        expect(Array.isArray(data)).toBeTruthy();
    });
    test("GET connection failed api Episodes of Rick and Morty", async () => {
        const data =  await helper(badEpisodeURL);
        expect(data).toEqual('Ouch something is wrong with the requests');
    });
});


