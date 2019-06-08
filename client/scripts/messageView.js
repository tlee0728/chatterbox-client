var MessageView = {

  render: _.template(
      "<div class='chat>" +
        "<div class='username'></div>" +
        "<h3> <%- username %></h3>" +
        "<div class='text'></div>" +
        "<p> <%- text %></p>" +
      "</div>"
    )

};