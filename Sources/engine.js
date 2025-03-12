console.info("Uses Move v1.2 by CornSeller");

function geid(id) {
    return document.getElementById(id);
}
function gec(classN) {
    return document.getElementsByClassName(classN);
}
function moveTarget(mt) {
    return mTarget = geid(mt);
}
function  cls() {
    return console.clear();
}
function l(a) {
    return console.log(a);
}
function e(a) {
    return console.error(a);
} 
function i(a) {
    return console.info(a);
}
function w(a) {
    return console.warn(a);
}
function d(a) {
    return console.debug(a);
}
function setSprite(a, b) {
    if (b) {mTarget.backgroundColor = 'rgba(0, 0, 0, 0)';}
    mTarget.style.backgroundSize = 'cover'; // upewnia sie że całe zdjecie weźmie w kadr backgroundu
    mTarget.style.backgroundImage = 'url("' + a + '")';
    return;
}
function alis(a, b, c) {
    return addEventListener(a, b, c);
}
function rlis(a, b, c) {
    return removeEventListener(a, b, c);
}
function setT(b, c) {
    return setTimeout(b, c);
}
function setI(b, c) {
    return setInterval(b, c);
}
function remI(b, c) {
    return removeInterval(b, c);
}

/*var Sprites = {
    spriteUp: undefined,
    spriteDown: undefined,
    spriteLeft: undefined,
    spriteRight: undefined
};

function setSprites(a, b, c, d) {

}         #TO BE ADDED#         */

addEventListener('keydown', function(event){
    switch(event.key) {
        case 'w':
            movement(mTarget, true, false, false, false);
            break;
        case 'a':
            movement(mTarget, false, false, true, false);
            break;
        case 's':
            movement(mTarget, false, true, false, false);
            break;
        case 'd':
            movement(mTarget, false, false, false, true);
            break;
    }
});

function movement(mTarget, moveUp, moveDown, moveLeft, moveRight) {
    if (!mTarget) { return;}
    if (moveUp) { move(1);}
    else if (moveDown) { move(2);}
    else if (moveLeft) { move(3);}
    else if (moveRight) { move(4);}
    else {console.error('Move v1.0: Something went wrong during movement!');}

    function move(parimeter) {
        const currentTop = parseInt(mTarget.style.top || 0, 10);
        const currentLeft = parseInt(mTarget.style.left || 0, 10);
        switch (parimeter) {
            case 1:
                mTarget.style.top = (currentTop - 15) + 'px';
                break;
            case 2:
                mTarget.style.top = (currentTop + 15) + 'px';
                break;
            case 3:
                mTarget.style.left = (currentLeft - 15) + 'px';
                break;
            case 4:
                mTarget.style.left = (currentLeft + 15) + 'px';
                break;
            default:
                console.error('Move v1.0: Something went wrong during movement!');
                break;
        }
    }
}


    function move(parimeter) {
        const currentTop = parseInt(moveTarget.style.top || 0, 10);
        const currentLeft = parseInt(moveTarget.style.left || 0, 10); //  na przyszłość: parseInt zamienia string na integer, wpierw sprawdza czy przypisać jako liczba wartość a jak tej wartości nie ma oddaje zero a nastepnie ", 10" oznacza ustawianie liczb jako Base 10 (system liczbowy dziesiętny czyli zwykły).
        //console.log('moveTarget moved!');
        switch (parimeter) {
            case 1:
                moveTarget.style.top = (currentTop - 15) + 'px';
                break;
            case 2:
                moveTarget.style.top = (currentTop + 15) + 'px';
                break;
            case 3:
                moveTarget.style.left = (currentLeft - 15) + 'px';
                break;
            case 4:
                moveTarget.style.left = (currentLeft + 15) + 'px';
                break;
        }
    }

function preventOOB() {}