window.Cxllab = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Cxllab.Routers.Users({
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Cxllab.initialize();
});
