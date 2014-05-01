Cxllab.Views.usersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function (options){
    this.listenTo(this.collection, "sync change remove", this.render);
    SC.initialize({ client_id: '5a1ab580242d18027f496e01bfc31064' });
  },

  events:{
    'click #newLikeBtn': 'createLike',
    'click #newHateBtn': 'createHate',
    'mouseover #newLikeBtn': 'lighten',
    'mouseover #newHateBtn': 'lighten',
    'mouseleave #newLikeBtn': 'lighten',
    'mouseleave #newHateBtn': 'lighten'
  },

  render: function(){
    var that = this;
    var next_user = this.nextUser(this.collection);
    var renderedContent = this.template({ user: next_user, users: this.collection });
    this.$el.html(renderedContent);

    setTimeout(function(){that.renderPlayer(next_user);}, 1);
    
    return this;
  },

  renderPlayer: function(user){
    if(user){
      var track_url = user.get("sc_permalink_url");
      SC.oEmbed(track_url, {auto_play: false, show_comments: false, 
      maxheight: 166, sharing: false, buying: false, download: false}, 
      document.getElementById('player'));
    }
  },

  createLike: function(e){
    var liked_id = $(e.currentTarget).data("id")

    var like = new Cxllab.Models.Relationship({
      liker_id: global_user_id,
      liked_user_id: liked_id,
      like: true
    });

    var liked_user = this.collection.where({id: liked_id})
    this.collection.remove(liked_user)
    like.save();
    Cxllab.relationships.add(like);

    this.checkMatches(liked_id);
  },

  createHate: function(e){
    var liked_id = $(e.currentTarget).data("id")

    var like = new Cxllab.Models.Relationship({
      liker_id: global_user_id,
      liked_user_id: liked_id,
      like: false
    });

    var liked_user = this.collection.where({id: liked_id})
    this.collection.remove(liked_user)
    like.save();
    Cxllab.relationships.add(like);
  },

  nextUser: function(collection){
    if(this.collection.length > 0){ 
      var next_user = this.collection.at(0)
      return next_user
    }
  },

  checkMatches: function(liked_id){

    var match = Cxllab.relationships.where({ 
      liker_id: liked_id, 
      liked_user_id: parseInt(global_user_id), 
      like: true 
    });

    if(match.length > 0){
      toastr.success('New Match!')
    }
  },

  lighten: function(e){
    $(e.currentTarget).toggleClass('lighten');
  }

});






















