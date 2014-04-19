Cxllab.Collections.Users = Backbone.Collection.extend({
  url: "api/users",
  model: Cxllab.Models.User,
  
  getOrFetch: function (id){
    var model;
    var users = this;

    if(model = this.get(id)){
      model.fetch();
      return model;
    } else {
      model = new Cxllab.Models.User({ id: id });
      model.fetch({
        success: function(){ users.add(model) }
      });
      return model
    }
  },

  one_user: function(){
    return this.pop();
  }
});

window.Cxllab.Collections.users = new Cxllab.Collections.Users();
window.Cxllab.Collections.my_users = new Cxllab.Collections.Users();