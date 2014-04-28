Cxllab.Collections.relationships = Backbone.Collection.extend({
  url: "api/relationships",
  model: Cxllab.Models.Relationship

});

window.Cxllab.relationships = new Cxllab.Collections.relationships();