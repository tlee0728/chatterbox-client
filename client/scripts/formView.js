var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

    
      
    
  

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    console.log('click!');

    var message = {
      username: App.username,
      text: $(‘input:text’).val(),
      roomname:
    }
    Parse.create()

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};