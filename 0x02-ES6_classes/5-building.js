class Bulding {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Bulding && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }
}

module.exports = Bulding;
