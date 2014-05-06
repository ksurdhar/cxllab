window.Cxllab.Views.greetView = Backbone.View.extend({
  template: JST["greet"],

  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  events: {
    'click #modal': 'launch'
  },

  // launch: function(){
  //   vex.dialog.open({
  //     message: "Collab requires a Soundcloud account to sign in. If you don't have one, try our guest account to see all features!",
  //     input: "<a class='btn btn-lg btn-primary' href='api/users/sc_connect'>Sign Up</a> <a class='btn btn-lg btn-primary' href='users/sign_in'>Sign In</a><form action='/users/sign_in' method='post'><input type='hidden' name='authenticity_token' value='" + auth_token + "'><input type='hidden' name='user[email]' value='guest123@gmail.com'><input type='hidden' name='user[password]' value='password'><input class='btn btn-lg btn-primary' type='submit' value='Sign In As Guest'></form>",
  //     buttons: [
  //       $.extend({}, vex.dialog.buttons.NO, {
  //         text: 'Back'
  //       })
        
  //     ],
  //     callback: function(value) {
  //       console.log(value);
  //     }
  //   });
  // }

});