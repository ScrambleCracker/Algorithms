import util from 'util';

export function print(data, params = [false, null, true]) {
    console.log(util.inspect(data, ...params));
}
