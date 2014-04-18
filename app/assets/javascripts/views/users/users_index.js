Cxllab.Views.usersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function (options){
    this.listenTo(this.collection, "sync change", this.render);
  },

  events:{
    'click #newRelationBtn': 'createLike', 
  },

  render: function(){
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    return this;
  },

  createLike: function(){
    var current_user_id = Cxllab.current_user.get("id");
    var like = new Cxllab.Models.Relationship({
      liker_id: current_user_id,
      liked_user_id: "6"
    });

    like.save();
  }

});
