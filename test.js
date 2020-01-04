var assert = require('assert');

describe('Test Simple', function () {
  it('1 is 1', function () {
    assert.equal(1, 1);
  });
});

solution = (s) => {
  return compress(s).length;
};

compressByN = (s, n) => {
  let compressedString = "";
  let count = 1;
  for (let i = 0; i < s.length; i+=n) {
    if (s.slice(i, i + n) === s.slice(i + n, i + 2 * n)) {
      count++;
      continue;
    }
    if (count == 1) {
      compressedString += s.slice(i, i + n);
    } else {
      compressedString += String(count) + s.slice(i, i + n);
    }
    count = 1;
  }
  return compressedString;
}

compress = (s) => {
  let shortString = compressByN(s, 1)
  for (let i = 2; i < s.length; i++) {
    if (shortString.length > compressByN(s, i).length) {
      shortString = compressByN(s, i);
    }
  }
  return shortString;
}

describe('Solution Function', function () {
  it('솔루션 함수', function () {
    assert.equal(solution("aabbaccc"), 7);
    assert.equal(solution("abcabcabcabcdededededede"), 14);
  });
  it('compress', function () {
    assert.equal(compress("aabbaccc"), "2a2ba3c");
    assert.equal(compress("abcabcabcabcdededededede"), "2abcabc2dedede");
  });

  it('compress 6', function () {
    assert.equal(compressByN("abcabcabcabcdededededede", 6), "2abcabc2dedede");
  });
});
