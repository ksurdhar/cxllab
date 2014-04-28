window.Cxllab.Views.userView = Backbone.View.extend({
  template: JST["users/show"],
  subtemplate: JST["users/contact"],

  initialize: function (options) {
    this.listenTo(this.model, "sync change", this.render);
    this.options = options || {};
  },

   events:{
    'click .contactUser': 'renderSub',
    'click #return': 'render',
    'submit form': 'sendEmail'
  },

  render: function(){
    var myRelationsArr = Cxllab.relationships.where({ liker_id: parseInt(global_user_id) });
    var relations = new Cxllab.Collections.relationships();

    myRelationsArr.forEach(function(rel){
      relations.add(rel);
    });
    
    var matches = this.matchedUsers(this.collection, this.options.relationships);

    var renderedContent = this.template({ 
      user: this.model, 
      relationships: relations, 
      matches: matches
    });
    
    this.$el.html(renderedContent);
    return this;
  },

  renderSub: function(e){
    var matchedId = $(e.currentTarget).data("id")
    var user = this.collection.findWhere({ id: matchedId })

    var renderedContent = this.subtemplate({user: user});
    $("#contact").html(renderedContent);
    return this;
  },

  matchedUsers: function(collection, relationships){

    var myLikes = relationships.where({
      liker_id: parseInt(global_user_id), 
      like: true 
    });
    
    var myLikedIds = [];
    var matchedIds = [];
    var myMatches = new Cxllab.Collections.Users();

    myLikes.forEach(function(relationship){
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
  },

  sendEmail: function(e){
    event.preventDefault();

    var params = $(e.currentTarget).serializeJSON()["email"];
    var email = new Cxllab.Models.Email(params);

    email.save({}, {
      success: function(){ 
        Cxllab.emails.add(email);
        $.ajax({ url: "/api/emails/" + email.id + "/send" }); 
      }
    });

    var relation = this.options.relationships.findWhere({
      liker_id: parseInt(global_user_id), 
      liked_user_id: parseInt(params.reciever_id)
    });

    relation.set({ emailed: true });
    relation.save();

    this.render();
  }

  

});











