import {asteroidCollision} from "./asteroid-collision.js";

describe('Asteroid collision', () => {
    it.each([
        [[5,10,-5], [5,10]],
        [[2,-5], [-5]],
        [[8,-8], []],
        [[-2,1,-1,-1], [-2,-1]],
    ])('should return remained asteroids', (asteroids, expected) => {
        expect(asteroidCollision(asteroids)).toEqual(expected);
    });
});
