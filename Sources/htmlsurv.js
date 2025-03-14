function showAuthors() {
      geid('menu-authors').style.visibility = 'visible';
      geid('menu1').style.visibility = 'hidden';
}
function returnMenu() {
      geid('menu-authors').style.visibility = 'hidden';
      geid('menu-load').style.visibility = 'hidden';
      geid('menu1').style.visibility = 'visible';
      geid('menu-newgay').style.visibility = 'hidden';
}
function gotoLoading() {
      geid('menu-load').style.visibility = 'visible';
      geid('menu1').style.visibility = 'hidden';
      easterEggActive = false;
}
function startNew() {
      easterEggActive = false;
      geid('menu-newgay').style.visibility = 'visible';
}

function startGame() {
      if (!geid('charname').value == '') {
            playername = geid('charname').value;
            l(playername);
      } else {w("Nazwa postaci zdefaultowana do: " + playername);}
      if (geid('chargender-a').checked) {playersex = 0;} else if (geid('chargender-b').checked) {playersex = 1;}
      
}