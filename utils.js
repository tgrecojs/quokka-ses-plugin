const All = (value) => ({
  value,
  concat: (y) => All(value && y.value),
});

All.empty = () => All(true);

const isFrozen = (x) => Object.isFrozen(x);

const fold =
  (monoid) =>
  (data = []) =>
    data.reduce((acc, val) => acc.concat(monoid(val)), monoid.empty());

const types = [Array, Object, Number, Map, WeakMap].map(isFrozen);

const foldAll = fold(All);

module.exports = {
  setupEnv: () =>
    !foldAll(types).value ? require("@endo/init") : "ready to rock!",
};
