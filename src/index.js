// @flow 

import "babel-polyfill";
require('source-map-support').install();
import type { Result } from './types';

import { add } from './lib/calc';

async function run():Promise<Result> {
    return await add(1, 2);
}

run().then(r => {
    console.log(r);
})