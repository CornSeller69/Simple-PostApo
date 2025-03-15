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
      geid('menu1').style.visibility = 'hidden';
      geid('charname').value = '';
      geid('chargender-a').checked = false;
      geid('chargender-b').checked = false;
}

function startGame() {
      if (!geid('charname').value == '') {
            playername = geid('charname').value;
            l(playername);
      } else {w("Nazwa postaci zdefaultowana do: " + playername);}
      if (geid('chargender-a').checked) {playersex = 0;} else if (geid('chargender-b').checked) {playersex = 1;}
      startGame2();
}

function startGame2() {
      geid('game-area').style.visibility = 'visible';
      geid('menu-newgay').style.visibility = 'hidden';
      if (houseRenovated) {
            geid('gamescreen').src = 'Materials/GameAreas/house2.png';
      }
      mus_home.play();
}