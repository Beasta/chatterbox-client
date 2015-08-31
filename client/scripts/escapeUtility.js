var escapeUtility = function(str){
  var returnStr = "";
  for(var i = 0; i < str.length; i++){
      returnStr += '&#' + (str.charCodeAt(i)) +';' ;
  }
  return returnStr;
}