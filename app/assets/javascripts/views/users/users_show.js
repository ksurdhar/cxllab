window.Cxllab.Views.userView = Backbone.View.extend({
  template: JST["users/show"],

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }

});