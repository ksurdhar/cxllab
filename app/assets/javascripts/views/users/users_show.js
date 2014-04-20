window.Cxllab.Views.userView = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync change", this.render);
    this.options = options || {};
  },

  render: function(){
    var relationships = this.model.relationships();
    var matches = this.matchedUsers(this.collection, this.options.all_likes);
    var renderedContent = this.template({ user: this.model, relationships: relationships });
    
    this.$el.html(renderedContent);
    return this;
  },

  matchedUsers: function(collection, relationships){
    debugger
    if(collection.length > 0){
      var liked_relationships = relationships.where({ liked: true });

      var possible_ids = [];
      var possible_matches = [];
      var matches = [];

      liked_relationships.forEach(function(relationship){
        var id = relationship.get('liked_user_id');
        possible_ids.push(id);
      });

      possible_ids.forEach(function(id){
        var user = collection.findWhere({ id: id });
        if(user){
          possible_matches.push(user);
        }
      });

      possible_matches.forEach(function(pos_match){
        var match = pos_match.relationships.findWhere({ liked_user_id: global_user_id });
        if(match){
          match.push(pos_match);
        }
      });

      return matches;
    }
  }

  

});