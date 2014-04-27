Cxllab.Routers.Users = Backbone.Router.extend({

   initialize: function(options){
    this.$rootEl = options.$rootEl
    Cxllab.relationships.fetch();
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
    Cxllab.users.fetch();
    Cxllab.otherUsers.fetch();

    var view = new Cxllab.Views.usersIndex({
      collection: Cxllab.otherUsers
    });
    
    this._swapView(view);
  },

  // userShow: function(id){
  //   var that = this;
  //   Cxllab.users.fetch();
  //   var me = Cxllab.users.get(id);

  //   Cxllab.relationships.fetch({
  //     success: function(){
  //       var view = new Cxllab.Views.userView({
  //         model: me,
  //         collection: Cxllab.users,
  //         all_likes: Cxllab.relationships
  //       });
  //       that._swapView(view);
  //     }
  //   });
  // },

  userShow: function(id){
    var that = this;
    Cxllab.users.fetch();
    var me = Cxllab.users.get(id);

    Cxllab.relationships.fetch({
      success: function(){
        var view = new Cxllab.Views.userView({
          model: me,
          collection: Cxllab.users,
          all_likes: Cxllab.relationships
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
