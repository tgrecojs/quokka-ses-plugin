"use strict";
module.exports = {
  before: () => {
    require("./index").checkEnv();
  },
};
