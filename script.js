$(document).ready(function() {

    // MD5 hash
    $("#md5").click(function(event) {
      event.preventDefault();
      var input = $("#input").val();
      var hash = CryptoJS.MD5(input).toString();
      $("#output").text(hash);
    });
  
    // SHA-1 hash
    $("#sha1").click(function(event) {
      event.preventDefault();
      var input = $("#input").val();
      var hash = CryptoJS.SHA1(input).toString();
      $("#output").text(hash);
    });
  
    // SHA-256 hash
    $("#sha256").click(function(event) {
      event.preventDefault();
      var input = $("#input").val();
      var hash = CryptoJS.SHA256(input).toString();
      $("#output").text(hash);
    });
  
    // Clear input and output
    $("#clear").click(function(event) {
      event.preventDefault();
      $("#input").val("");
      $("#output").text("");
    });
  
  });
  