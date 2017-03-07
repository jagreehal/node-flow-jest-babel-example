// @flow

import {type Result} from '../types';

export async function add(x: number, y: number): Promise<Result> {
  return Promise.resolve((x * y));
}
