// Functions for each action-command.

function help(){
  return "<pre>Usage:\n\
   \nall\t\t\t\tGive me the complete picture\
   \nabout\t\t\t\tEverything you ever wanted to know about John Smith\
   \ncontact\t\t\t\tHow to get in touch with John Smith\
   \nlinks\t\t\t\tSee what links John Smith wants you to click on\
   \nskills\t\t\t\tGet to know how good John Smith is at stuff\
   \ncv\t\t\t\tDownload John Smith's CV</pre>";
}

function contact(){
  return "<pre><span style=\"color:#cc6666;\">Contact:</span>\n\
   \n  Email:\t\t<a href=\"mailto:john.smith@emailprovider.com\">john.smith@emailprovider.com</a>\n\
   \n  Telephone:\t\t<a href=\"tel:+45-657-56234\">+45-657-56234</a>\n\
   \n  Address:\t\tJohn Smith\
   \n\t\t\t205 Autumn Street\
   \n\t\t\t5472\
   \n\t\t\tLondon\
   \n\t\t\tUK</pre>";
}

function skills(){
  return "<pre><span style=\"color:#81a2be;\">Skills:</span>\n\n\
  Photoshop\t\t[============        ] 60%\n\
  HTML\t\t\t[==========          ] 50%\n\
  Premiere Pro\t\t[================    ] 80%\n\
  Rickrolling\t\t[====================] 100%\n\
  </pre>";
}

function about(){
  return "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
}

function cv(){
  return "<pre><span style=\"color:#8abeb7;\">CV:</span>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</pre>";
}

function credits(){
  return "<pre>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></pre>";
}

function links(){
  return "<pre><span style=\"color: #b5bd68;\">Links:</span>\n\n\
  <a href=\"https://www.linkedin.com\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a>\n\
  <a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a>\n\
  <a href=\"https://www.twitter.com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a>\n\
  <a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fab fa-facebook\"></i> Facebook</a>\n\
  </pre>";
}

function rickroll(){
  return "<pre>We're no strangers to love\n\
    You know the rules and so do I\n\
    A full commitment's what I'm thinking of\n\
    You wouldn't get this from any other guy\n\
    \n\
    I just wanna tell you how I'm feeling\n\
    Gotta make you understand\n\
    \n\
    Never gonna give you up\n\
    Never gonna let you down\n\
    Never gonna run around and desert you\n\
    Never gonna make you cry\n\
    Never gonna say goodbye\n\
    Never gonna tell a lie and hurt you\n\
    \n\
    We've known each other for so long\n\
    Your heart's been aching, but\n\
    You're too shy to say it\n\
    Inside, we both know what's been going on\n\
    We know the game and we're gonna play it\n\
    \n\
    And if you ask me how I'm feeling\n\
    Don't tell me you're too blind to see\n\
    \n\
    Never gonna give you up\n\
    Never gonna let you down\n\
    Never gonna run around and desert you\n\
    Never gonna make you cry\n\
    Never gonna say goodbye\n\
    Never gonna tell a lie and hurt you\n\
    \n\
    Never gonna give you up\n\
    Never gonna let you down\n\
    Never gonna run around and desert you\n\
    Never gonna make you cry\n\
    Never gonna say goodbye\n\
    Never gonna tell a lie and hurt you\n\
    \n\
    (Ooh, give you up)\n\
    (Ooh, give you up)\n\
    Never gonna give, never gonna give\n\
    (Give you up)\n\
    Never gonna give, never gonna give\n\
    (Give you up)\n\
    \n\
    We've known each other for so long\n\
    Your heart's been aching, but\n\
    You're too shy to say it\n\
    Inside, we both know what's been going on\n\
    We know the game and we're gonna play it\n\
    \n\
    I just wanna tell you how I'm feeling\n\
    Gotta make you understand\n\
    \n\
    Never gonna give you up\n\
    Never gonna let you down\n\
    Never gonna run around and desert you\n\
    Never gonna make you cry\n\
    Never gonna say goodbye\n\
    Never gonna tell a lie and hurt you\n\
    \n\
    Never gonna give you up\n\
    Never gonna let you down\n\
    Never gonna run around and desert you\n\
    Never gonna make you cry\n\
    Never gonna say goodbye\n\
    Never gonna tell a lie and hurt you\n\
    \n\
    Never gonna give you up\n\
    Never gonna let you down\n\
    Never gonna run around and desert you\n\
    Never gonna make you cry\n\
    Never gonna say goodbye\n\
    Never gonna tell a lie and hurt you</pre>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "rickroll") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
