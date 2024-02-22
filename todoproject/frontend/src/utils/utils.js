export const isInt = function(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
};

export const checkInputInt = async (fn) => {
    return function(...args) {
        if (args.length != fn.length) {
            throw new Error('Only submit required number of params');
          }
          if (args.some(arg => !isInt(arg))) {
            throw new TypeError('Argument cannot be a non-integer');
          }
          return fn(...args);
    }
};