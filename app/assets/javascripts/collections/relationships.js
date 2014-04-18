window.Cxllab.Collections.Relationships = Backbone.Collection.extend({
  url: "api/relationships",
  model: Cxllab.Models.Relationship

});

window.Cxllab.Collections.relationships = new Cxllab.Collections.Relationships();