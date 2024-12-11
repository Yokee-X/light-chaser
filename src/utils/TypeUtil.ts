
export const isObject = (obj: any) => Object.prototype.toString.call(obj) === '[object Object]';
export const isArray = (obj: any) => Array.isArray(obj);
export const isFunction = (obj: any) => typeof obj === 'function';
export const isString = (obj: any) => typeof obj === 'string';
export const isNumber = (obj: any) => typeof obj === 'number';
export const isBoolean = (obj: any) => typeof obj === 'boolean';
export const isNull = (obj: any) => obj === null;
export const isUndefined = (obj: any) => typeof obj === 'undefined';

