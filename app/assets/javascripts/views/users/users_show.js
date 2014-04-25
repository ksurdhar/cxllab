window.Cxllab.Views.userView = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync change", this.render);
    this.options = options || {};
  },

   events:{
    'click #testing': 'renderSub'
  },

  render: function(){
    var relationArr = Cxllab.Collections.relationships.where({ liker_id: parseInt(global_user_id) });
    var relations = new Cxllab.Collections.Relationships();

    relationArr.forEach(function(rel){
      relations.add(rel);
    });
    
    var matches = this.matchedUsers(this.collection, this.options.all_likes);

    var renderedContent = this.template({ 
      user: this.model, 
      relationships: relations, 
      matches: matches
    });
    
    this.$el.html(renderedContent);
    return this;
  },

  renderSub: function(){
    this.$el.html("I am a banana");
    return this;
  },

  matchedUsers: function(collection, relationships){

    var my_relationships = relationships.where({
      liker_id: parseInt(global_user_id), 
      like: true 
    });
    
    var myLikedIds = [];
    var matchedIds = [];
    var myMatches = new Cxllab.Collections.Users();

    my_relationships.forEach(function(relationship){
      var id = relationship.get('liked_user_id');
      myLikedIds.push(id);
    });

    myLikedIds.forEach(function(id){

      var matchRelation = relationships.where({ 
        liker_id: id, 
        liked_user_id: parseInt(global_user_id), 
        like: true 
      });

      if(matchRelation.length > 0){
        matchedIds.push(id);
      }
    });

    matchedIds.forEach(function(id){
      var user = collection.get(id);
      myMatches.add(user);
    });

    return myMatches; 
  }

  

});