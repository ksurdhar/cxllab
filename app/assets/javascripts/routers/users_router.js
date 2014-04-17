Cxllab.Routers.Users = Backbone.Router.extend({

   initialize: function(options){
    this.$rootEl = options.$rootEl
  },

  routes: {
    "":"greetView",
    "users":"userIndex",
    "users/:id":"userShow"
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
    // debugger
    var user = new Cxllab.Models.User({id: id});
    user.fetch({
      success:function(e) {
        debugger
      },
      error: function(e) {
        debugger
      }
    });

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
