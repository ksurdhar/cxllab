Cxllab.Views.usersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function (options){
    this.listenTo(this.collection, "sync change remove", this.render);
    SC.initialize({ client_id: '5a1ab580242d18027f496e01bfc31064' });
  },

  events:{
    'click #newLikeBtn': 'createLike',
    'click #newHateBtn': 'createHate'
  },

  render: function(){
    var next_user = this.nextUser(this.collection);
    
    var renderedContent = this.template({ user: next_user });
    this.$el.html(renderedContent);
    setTimeout(this.renderPlayer(next_user), 250);
    return this;
  },

  createLike: function(e){
    var liked_id = $(e.currentTarget).data("id")

    var like = new Cxllab.Models.Relationship({
      liker_id: global_user_id,
      liked_user_id: liked_id,
      like: true
    });

    var liked_user = Cxllab.Collections.my_users.where({id: liked_id})
    Cxllab.Collections.my_users.remove(liked_user)

    like.save();
  },

  createHate: function(e){
    var liked_id = $(e.currentTarget).data("id")

    var like = new Cxllab.Models.Relationship({
      liker_id: global_user_id,
      liked_user_id: liked_id
    });

    var liked_user = Cxllab.Collections.my_users.where({id: liked_id})
    Cxllab.Collections.my_users.remove(liked_user)

    like.save();
  },

  renderPlayer: function(user){
    if(user){
      var username = user.get("sc_username")
      var track_url = 'http://soundcloud.com/' + username;

      SC.oEmbed(track_url, {auto_play: false, show_comments: false, 
      maxheight: 166, sharing: false, buying: false, download: false}, 
      document.getElementById('player'));
    }
  },

  nextUser: function(collection){
    if(this.collection.length > 0){ 
      var id = this.collection.length
      if(id === global_user_id){
        id++
      } 
      var next_user = this.collection.get({id: id})
      return next_user
    }
  }

});









