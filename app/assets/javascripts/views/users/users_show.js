window.Cxllab.Views.userView = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function (options) {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function(){
    var relationships = this.model.relationships();

    var renderedContent = this.template({ user: this.model, relationships: relationships });
    this.$el.html(renderedContent);
    return this;
  }

  

});