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
    Cxllab.otherUsers.fetch();

    var view = new Cxllab.Views.usersIndex({
      collection: Cxllab.otherUsers
    });
    
    this._swapView(view);
  },

  userShow: function(id){
    var that = this;
    var complete = _.invoke([Cxllab.users, Cxllab.relationships], 'fetch');
    $.when.apply($, complete).done(function(){

      var me = Cxllab.users.get(id);

      var view = new Cxllab.Views.userView({
        model: me,
        collection: Cxllab.users,
        all_likes: Cxllab.relationships
      });
      that._swapView(view);
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
