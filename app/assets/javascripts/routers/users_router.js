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
    if(typeof Cxllab.current_user === "undefined"){
      Cxllab.current_user = new Cxllab.Models.User({id: global_user_id});
    }
    
    Cxllab.Collections.my_users.fetch();

    var view = new Cxllab.Views.usersIndex({
      collection: Cxllab.Collections.my_users
    });
    
    this._swapView(view);
  },

  userShow: function(id){
    Cxllab.current_user.fetch();
    
    var view = new Cxllab.Views.userView({
      model: Cxllab.current_user
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
