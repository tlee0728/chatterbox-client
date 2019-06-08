var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  
    
  },

  render: function() {
    // $('.username').on('click', function() {Friends.toggleStatus()});
  },

  renderMessage: function(username, message) {
    MessagesView.$chats.append('<p>' + username + ': ' + message + '</p>')
  }

};