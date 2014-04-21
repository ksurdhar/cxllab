window.Cxllab.Views.userView = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync change", this.render);
    this.options = options || {};
  },

  render: function(){
    var relation_arr = Cxllab.Collections.relationships.where({ liker_id: parseInt(global_user_id) });
    var myRelations = new Cxllab.Collections.Relationships();

    relation_arr.forEach(function(rel){
      myRelations.add(rel);
    });
    
    var matches = this.matchedUsers(this.collection, this.options.all_likes);
    var renderedContent = this.template({ user: this.model, relationships: myRelations, matches: matches});
    
    this.$el.html(renderedContent);
    return this;
  },

  matchedUsers: function(collection, relationships){
    var my_relationships = relationships.where({liker_id: parseInt(global_user_id), like: true });

    var possible_ids = [];
    var possible_matches = [];
    var matches = [];

    my_relationships.forEach(function(relationship){
      var id = relationship.get('liked_user_id');
      possible_ids.push(id);
    });

    possible_ids.forEach(function(id){
      var user = collection.findWhere({ id: id });
      if(user){
        possible_matches.push(user);
      }
    });

    possible_matches.forEach(function(pos_user){
      var their_relationships = pos_user.relationships();
      var match = their_relationships.findWhere({ liked_user_id: global_user_id });
      if(match){
        match.push(pos_user);
      }
    });

    var myMatches = new Cxllab.Collections.Users();

    matches.forEach(function(match){
      myMatches.add(match);
    });

    return myMatches; 
  }

  

});