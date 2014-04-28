Cxllab.Collections.Emails = Backbone.Collection.extend({
  url: "api/emails",
  model: Cxllab.Models.Email

});

window.Cxllab.emails = new Cxllab.Collections.Emails();