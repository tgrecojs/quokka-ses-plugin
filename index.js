"use strict";
module.exports = {
  before: () => {
    const lockdown = require("@endo/init/legacy");
    return !Object.isFrozen(Array) && lockdown();
  },
};
