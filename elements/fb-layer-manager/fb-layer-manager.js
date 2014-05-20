Polymer('fb-layer-manager', {
  ready: function() {
    this.layers = [];
  },
  remove: function(index) {
    delete this.layers[index];
  },
  add: function(layer) {
    this.layers.push(layer);
  },
  forEach: function(func) {
    this.layers.forEach(func);
  },
  someDirty: function() {
    var dirty = false;
    this.layers.forEach(function(layer) {
      if (layer.dirty) {
        dirty = true;
        return;
      }
    });
    return dirty;
  }
});
