function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


// $(document).ready(function() {
//   var urls = ['hmc1.jpeg', 'hmc2.jpeg', 'hmc3.jpeg', 'team-audition.jpeg'];

//   var cout = 1;
//   $('body').css('background-image', 'url("' + urls[0] + '")');
//   setInterval(function() {
//     $('body').css('background-image', 'url("' + urls[cout] + '")');
//     cout == urls.length-1 ? cout = 0 : cout++;
//   }, 5000);

// });


