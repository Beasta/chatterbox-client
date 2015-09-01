var app = {};

app.friends = {};

app.username = function(){
  var string = window.location.search.split("");
  var index = string.indexOf('=')
  return string.slice(index+1).join('');
}();

app.server = 'https://api.parse.com/1/classes/chatterbox'

app.send = function(message){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function () {
      console.log('chatterbox: Message sent');
    },
    error: function () {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};

app.fetch = function(){ 
  $.ajax({
    url: app.server,
    type: 'GET',
    data: JSON.stringify(),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message fetched');
    },
    error: function (data) {
      console.error('chatterbox: Failed to fetch');
    }
  }); 
};

app.clearMessages = function() {
  $('#chats').empty();
}

app.addMessage = function(message) {
  $('#chats').append('<div>' + '<span class="username">' + message.username + '</span>' +  " : " + escapeUtility(message.text) + '</div>');
  
  //check if their a friend
  $('.username').each(function(){
    if(app.friends[$(this).html()]){
      $(this).attr('class','username friend');
    }
  })
}

// $('#roomDropdown').on('change', addRoom(dropdown selection))
// add a new room name as last option.

//add new room

app.addRoom = function(roomName){
  $('#roomSelect').append('<option value='+roomName+'>'+roomName+'</option>');

}

app.addFriend = function(username) {
  app.friends[username]=true;
  $('.username').each(function(){
    if($(this).html() === username){
      $(this).attr('class','username friend');
    }
  })



  //if the text value == true in app.friends, add class "friend"


}


app.handleSubmit = function() {
    var message = {
      username: app.username,
      message: $('#message').html(),
      roomname: $('#roomSelect').html()
    }
    app.send(message);
  }


app.init = function(){
  $( ".username" ).click(function() {
    app.addFriend($(this).html())
  });

  $('.submit').submit(app.handleSubmit);
};


$(document).ready(function(){
  app.init();
});





// $('body').append('<form action="#" id="send" method="post"><input type="text" name="message" id="message"/><input type="submit" name="submit" class="submit"/></form>')

//class name: classes
//objectID: chatterbox



// var message = {
//   username: 'shawndrost',
//   text: 'trololo', X
//   roomname: '4chan'
// };


// $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     url: 'https://api.parse.com/1/classes/chatterbox',
//     type: 'POST',
//     data: {"order":"-createdAt", "group": "chatroom"},
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message sent');
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to send message');
//     }
//   });