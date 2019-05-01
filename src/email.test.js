const fs = require('fs');
const validateEmail = require('./email');

test('banana@ucsc.edu', () => {
  expect(validateEmail('banana@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('@.', () => {
  expect(validateEmail('@.')).toBeFalsy();
});

test('@..', () => {
  expect(validateEmail('@..')).toBeFalsy();
});

test('Ilovepriya@.com', () => {
  expect(validateEmail('Ilovepriya@.com')).toBeFalsy();
});
