const test = require("ava");

function getReadableFilesize(filesizeInByte) {
  if (filesizeInByte > 999_999) {
    return `${(filesizeInByte / 1_000_000).toFixed(1)} mb`;
  }
  if (filesizeInByte > 999) {
    return `${(filesizeInByte / 1_000).toFixed(1)} kb`;
  }

  return `${filesizeInByte} byte`;
}

test("get byte string", (t) => {
  t.is(getReadableFilesize(123), "123 byte");
});

test("get kb string", (t) => {
  t.is(getReadableFilesize(12342), "12.3 kb");
});

test("get mb string", (t) => {
  t.is(getReadableFilesize(100361123), "100.4 mb");
});
