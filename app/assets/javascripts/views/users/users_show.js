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
    //getting my likes out of all

    var myLikedIds = [];
    var their_relations = [];
    var matchedIds = [];
    var matches = [];


    //getting the ids of those user
    my_relationships.forEach(function(relationship){
      var id = relationship.get('liked_user_id');
      myLikedIds.push(id);
    });

    //getting likes where the liker is them, the person being liked is me
    myLikedIds.forEach(function(id){
      var matchRelation = relationships.where({ liker_id: id, liked_user_id: parseInt(global_user_id), like: true });

      if(matchRelation.length > 0){
        matchedIds.push(id);
      }
    });

    matchedIds.forEach(function(id){
      var user = collection.get(id);
      matches.push(user);
    });

    var myMatches = new Cxllab.Collections.Users();

    matches.forEach(function(match){
      myMatches.add(match);
    });

    return myMatches; 
  }

  

});