var webSocket = (function() {  
  var ip = "192.168.1.46";
  var connection;
  var user;

  var sendMessage = function (x, y, rotation) {   
    var message = {
      user: user,
      x: x,
      y: y,
      rotation: rotation
    }

    connection.send(JSON.stringify(message));
  };

  var setUser = function (name) {
    user = name;
  };

  var setOnMessage = function (fn) {
    connection.onmessage = fn;
  };

  var init = function() {
    connection = new WebSocket("ws://" + ip + ":8080/Mercantes-del-Karibe/wsServerEndpoint");
  };

  init();

  return {
    sendMessage: sendMessage,
    setOnMessage : setOnMessage,
    setUser: setUser
  }
})();