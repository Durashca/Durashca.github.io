let test = Boolean(3); //true
test = Boolean(0); //true
test = Boolean(-1); //true
test = Boolean(-0); // false
test = Boolean(+0); // false
test = Boolean('abc'); // true
test = Boolean(''); // false
test = Boolean('0'); // true
test = Boolean(true); // true
test = Boolean(false); // false
test = Boolean('true'); // true
test = Boolean('false'); // true
test = Boolean(null); //false
test = Boolean(undefined); // false
test = Boolean('undefined'); // false
test = Boolean(NaN); // false
test = Boolean('NaN'); // true
test = Boolean(3 * 'abc'); // false
test = Boolean(Infinity); //true
test = Boolean(1 / 0); // true