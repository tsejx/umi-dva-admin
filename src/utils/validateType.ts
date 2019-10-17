import { isObject } from './isObject';
import { isArray } from './isArray';

export function validateType(value) {

    if (value === null) {
        return 'null'
    }

    if (isArray(value)) {
        return 'array'
    }

    if (isObject(value)) {
        return 'object'
    }

    return typeof (value);
}
