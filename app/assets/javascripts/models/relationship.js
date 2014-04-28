Cxllab.Models.Relationship = Backbone.Model.extend({
  urlRoot: "/api/relationships",

  toJSON: function () {
    var json = Backbone.Model.prototype.toJSON.call(this);

    delete json.id;
    delete json.created_at;
    delete json.updated_at;
    return json;
  }

});