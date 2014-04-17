Cxllab.Views.usersIndex = Backbone.View.extend({

  template: JST['users/index'],

  initialize: function (options){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({ users: this.collection });
    this.$el.html(renderedContent);
    return this;
    console.log("I RENDERED");
  }

});
