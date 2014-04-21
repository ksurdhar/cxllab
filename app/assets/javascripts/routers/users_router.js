Cxllab.Routers.Users = Backbone.Router.extend({

   initialize: function(options){
    this.$rootEl = options.$rootEl
    Cxllab.Collections.relationships.fetch();
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
    Cxllab.Collections.otherUsers.fetch();
    Cxllab.currentUser.fetch();

    var view = new Cxllab.Views.usersIndex({
      collection: Cxllab.Collections.otherUsers
    });
    
    this._swapView(view);
  },

  userShow: function(id){
    var that = this;
    Cxllab.Collections.users.fetch();
    var me = Cxllab.Collections.users.get(id);
    Cxllab.Collections.relationships.fetch({
      success: function(){
        var view = new Cxllab.Views.userView({
          model: me,
          collection: Cxllab.Collections.users,
          all_likes: Cxllab.Collections.relationships
        });
        that._swapView(view);
      }
    });
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
