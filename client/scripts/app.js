var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};


$.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox',
  type: 'POST',
  data: {"order":"-createdAt", "group": "chatroom"},
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});





{
  url:
  type:
  data:
  contentType



}

//class name: classes
//objectID: chatterbox


