Cxllab.Views.usersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function (options){
    this.listenTo(this.collection, "sync change remove", this.render);
    SC.initialize({ client_id: '5a1ab580242d18027f496e01bfc31064' });

  },

  events:{
    'click #newRelationBtn': 'createLike'
  },

  render: function(){
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    setTimeout(this.renderPlayer, 250);
    return this;
  },

  createLike: function(e){
    var liked_id = $(e.currentTarget).data("id")
    var current_user_id = Cxllab.current_user.get("id");

    var like = new Cxllab.Models.Relationship({
      liker_id: current_user_id,
      liked_user_id: liked_id,
      like: true
    });

    var liked_user = Cxllab.Collections.my_users.where({id: liked_id})
    Cxllab.Collections.my_users.remove(liked_user)

    like.save();
  },

  _counter: function(){
    if(!this._counterNum){
      this._counterNum = 0
    }
    return this._counterNum;
  },

  renderPlayer: function(){

    var track_url = 'http://soundcloud.com/mynameisezra';
    SC.oEmbed(track_url, {auto_play: false, show_comments: false, 
      maxheight: 166, sharing: false, buying: false, download: false}, 
      document.getElementById('player'));
  }

});









