var navLinksElement = document.getElementById('navLinks');

function ShowMenu(){
  navLinksElement.style.right = "0";
  navLinksElement.style.display = "block";
  document.getElementById('showMenuIcon').style.display = "none";
}
function HideMenu(){
  navLinksElement.style.right = "-55vw";
  navLinksElement.style.display = "none";
  document.getElementById('showMenuIcon').style.display = "block";
}

$(".gallery-container img").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});
