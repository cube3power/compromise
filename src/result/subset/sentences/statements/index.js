'use strict';
const Text = require('../index');

class Statements extends Text {
  parse() {
    return this.terms().map((t) => {
      return {};
    });
  }
  static find(r) {
    return r.filter((ts) => {
      return ts.last().endPunctuation() !== '?';
    });
  }
}

module.exports = Statements;
