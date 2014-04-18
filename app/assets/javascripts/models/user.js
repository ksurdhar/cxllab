Cxllab.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  relationships: function(){
    if(!this._relationships){
      this._relationships = new Cxllab.Collections.Relationships([], {
        user: this
      });
    }
    return this._relationships;
  }, 

  parse: function(jsonResp){
    if (jsonResp.relationships) {
      this.relationships().set(jsonResp.relationships);
      delete jsonResp.relationships;
    }

    return jsonResp;
  },
});

