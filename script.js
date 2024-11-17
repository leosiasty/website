var countDownDate = new Date("Nov 19, 2024 21:52:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("clk").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("clk").innerHTML = "EXPIRED";
  }
}, 1000);



function copyToClipboard() {
  const textToCopy = document.getElementById('text-to-copy').textContent;
  navigator.clipboard.writeText(textToCopy).then(function() {
      alert('The text has been copied to the clipboard.');
  }, function(err) {
      alert('An error occurred while copying: ', err);
  });
}