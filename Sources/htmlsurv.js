function showAuthors() {
      geid('menu-authors').style.visibility = 'visible';
      geid('menu1').style.visibility = 'hidden';
}
function returnMenu() {
      geid('menu-authors').style.visibility = 'hidden';
      geid('menu-load').style.visibility = 'hidden';
      geid('menu1').style.visibility = 'visible';
}
function gotoLoading() {
      geid('menu-load').style.visibility = 'visible';
      geid('menu1').style.visibility = 'hidden';
      easterEggActive = false;
}
function startNew() {
      easterEggActive = false;

}