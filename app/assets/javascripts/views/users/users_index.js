Cxllab.Views.usersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function (options){
    this.listenTo(this.collection, "sync change remove", this.render);

  },

  events:{
    'click #newRelationBtn': 'createLike', 
  },

  render: function(){
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
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
  }

});
