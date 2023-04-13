"use strict";
const All = (x) => ({
  value: x,
  concat: (other) => All(x && other.value),
});
All.empty = () => All(true);

const isFrozen = (x) => Object.isFrozen(x);
const fold =
  (monoid) =>
  (data = []) =>
    data.reduce((acc, val) => acc.concat(monoid(val)), monoid.empty());
const foldAll = fold(All);
const getValue = ({ value }) => value;

getValue(foldAll(types)); //?

module.exports = {
  before: () => {
    const types = [Array, Object, Number, Map, WeakMap, BigInt, Intl].map(
      isFrozen
    );
    if (getValue(foldAll(types))) {
      const lockdown = require("ses");
      lockdown({
        domainTaming: "unsafe",
        overrideTaming: "severe",
        stackFiltering: "verbose",
        errorTaming: "unsafe",
      });
    }
  },
};
