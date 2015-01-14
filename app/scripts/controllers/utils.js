function toggleFullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}


function beautifyNumber(num){
    var aux = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    aux = aux.substring(0, aux.length - 3);
    return aux;
}

function transformOld(tipPosition, w, h) {
    var width = 150;
    var height = 150;
    var minHeight = 100;
    var ftx = tipPosition[0];
    var fty = tipPosition[1];
    ftx = (ftx > width ? width - 1 : (ftx < -width ? -width + 1 : ftx));
    fty = (fty > 2*height ? 2*height - 1 : (fty < minHeight ? minHeight + 1 : fty));
    var x = THREE.Math.mapLinear(ftx, -width, width, 0, w);
    var y = THREE.Math.mapLinear(fty, 2*height, minHeight, 0, h);
    return [x, y];
}

function transform(tipPosition, w, h) {
    var width = 150;
    var height = 150;
    // Inverse Axis for HMD
    var ftx = tipPosition[0];
    var ftz = tipPosition[2];
    ftx = (ftx > width ? width - 1 : (ftx < -width ? -width + 1 : ftx));
    ftz = (ftz > height ? height - 1 : (ftz < -height ? -height + 1 : ftz));
    var x = THREE.Math.mapLinear(ftx, -width, width, 0, w);
    var z = THREE.Math.mapLinear(ftz, -height, height, 0, h);
    return [x, z];
}

function getFingers(frame){
    var fls = 0;
    frame.pointables.forEach(function(item){
        if(item.extended) fls++;
    });
    return fls;
}


function getCoordinatesFromHand(frame, container){
    var hl = frame.hands.length;
    if (hl >= 1) {
        var hand = frame.hands[0];
        var coords = transform(hand.palmPosition, container.width(), container.height());
        return coords;
    }
    return [0,0];
}

function getCoordinatesFromTip(frame, container){
    var hl = frame.hands.length;
    var fl = frame.pointables.length;
    if (hl >= 1 && fl >= 1) {
        var f = frame.pointables[0];
        var coords = transform(f.tipPosition, container.width(), container.height());
        return coords;
    }
    return [0,0];
}

function showCursorInScreen(fingers, coords, container){
    var cursor = $("#cursorLeft");
    var cursorRight = $("#cursorRight");

    // Si no se esta interactuando con el Leap, eliminamos el cursor de la pantalla
    if(fingers == 0 && coords[0] == 0) {
        cursor.css('left', -1000);
        cursor.css('top', -1000);
        cursor.empty();cursor.css('left', -1000);
        cursorRight.css('left', -1000);
        cursorRight.css('top', -1000);
        cursorRight.empty();
        return;
    }

    var offset = container.offset();

    cursor.css('left', offset.left + coords[0] - ((cursor.width() - 1)/2 + 1));
    cursor.css('top', offset.top + coords[1] - ((cursor.height() - 1)/2 + 1));

    var coordXForRight = coords[0] + container.width();
    cursorRight.css('left', offset.left + coordXForRight - ((cursorRight.width() - 1)/2 + 1));
    cursorRight.css('top', offset.top + coords[1] - ((cursorRight.height() - 1)/2 + 1));

    cursor.empty();
    if (fingers == 0){
        cursor.html("<img class=\"indicadores\" src=\"images/nodedo.png\"></img>");
        cursorRight.html("<img class=\"indicadores\" src=\"images/nodedo.png\"></img>");
    }
    else if(fingers <= 1) {
        cursor.html("<img class=\"indicadores\" src=\"images/1dedo.png\"></img>");
        cursorRight.html("<img class=\"indicadores\" src=\"images/1dedo.png\"></img>");
    }
    else if(fingers <= 4){
        cursor.html("<img class=\"indicadores\" src=\"images/3dedos.png\"></img><p style='color: #9EACD1'>seleccionar</p>");
        cursorRight.html("<img class=\"indicadores\" src=\"images/3dedos.png\"></img><p style='color: #9EACD1'>seleccionar</p>");
    }
    else if(fingers <= 5){
        cursor.html("<img class=\"indicadores\" src=\"images/5dedos.png\"></img><p style='color: #9EACD1'>zoom</p>");
        cursorRight.html("<img class=\"indicadores\" src=\"images/5dedos.png\"></img><p style='color: #9EACD1'>zoom</p>");
    }
}
