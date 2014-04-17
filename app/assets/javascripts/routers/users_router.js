Cxllab.Routers.Users = Backbone.Router.extend({

   initialize: function(options){
    this.$rootEl = options.$rootEl
  },

  routes: {
    "":"greetView",
    "users/:id":"userShow",
    "users":"userIndex"
  },

  greetView: function(){
    var view = new Cxllab.Views.greetView();
    this._swapView(view);
  },

  userIndex: function(){
    Cxllab.Collections.users.fetch();
    var view = new Cxllab.Views.usersIndex({
      collection: Cxllab.Collections.users
    });
    this._swapView(view);
  },

  userShow: function(id){
    var user = Cxllab.Collections.users.getOrFetch(id);

    var view = new Cxllab.Views.userView({
      model: user
    });
    this._swapView(view);


  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);

    if(this._noticeSwitch){
      $(".notice").empty();
    } else {
      this._noticeSwitch = 1
    }
  }

});
