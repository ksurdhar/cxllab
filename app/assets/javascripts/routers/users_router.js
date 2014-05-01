Cxllab.Routers.Users = Backbone.Router.extend({

   initialize: function(options){
    this.$rootEl = options.$rootEl
    SC.initialize({ client_id: '5a1ab580242d18027f496e01bfc31064' });
  },

  routes: {
    "":"greetView",
    "users":"userIndex",
    "users/:id":"userShow",
    "about":"aboutView"
  },

  aboutView: function(){
    var view = new Cxllab.Views.aboutView();
    this._swapView(view);
  },

  greetView: function(){
    var view = new Cxllab.Views.greetView();
    this._swapView(view);
  },

  userIndex: function(){
    var that = this;
    var complete = _.invoke([Cxllab.otherUsers, Cxllab.users, Cxllab.relationships], 'fetch');
    $.when.apply($, complete).done(function(){

      var view = new Cxllab.Views.usersIndex({
        collection: Cxllab.otherUsers
      });

      that._swapView(view);
    });
  },

  userShow: function(id){
    var that = this;
    var complete = _.invoke([Cxllab.users, Cxllab.relationships, Cxllab.emails], 'fetch');
    $.when.apply($, complete).done(function(){

      var me = Cxllab.users.get(id);

      var view = new Cxllab.Views.userView({
        model: me,
        collection: Cxllab.users,
        relationships: Cxllab.relationships
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
