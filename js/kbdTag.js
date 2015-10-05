/* Author: hsinjungwu
 *
 * This is inspired by [keyboardkey](https://github.com/rcmdnk/keyboardkey) 
 *
 * To use it in a post as follows:
 *
 * <kbd>H i</kbd>
 *
 * Then it will convert to <kbd>H</kbd><kbd> i </kbd>
 */

function RenderKbdTag() {
  $('kbd').each(function(){
    var t = $(this).text().split(' ');
    var r = "";
    for (var i = 0; i < t.length; i++) 
      r += "<kbd>"+GetIcon(t[i])+"</kbd>";
    $(this).replaceWith(r);
  });
}

function GetIcon(t) {
    var r = t;
    if (t == 'apple') r = '\uf8ff';
    else if ( t == 'cmd') r = '\u2318'; 
    else if ( t == 'command') r = '\u2318';
    else if ( t == 'option') r = '\u2325';
    else if ( t == 'shift') r = '\u21e7';
    else if ( t == 'ctrl') r = '\u2303';
    else if ( t == 'tab') r = '\u21e5';
    else if ( t == 'esc') r = '\u238b';
    else if ( t == 'backspace') r = '\u232b';
    else if ( t == 'return') r = '\u23ce';
    else if ( t == 'enter') r = '\u23ce';
    else if ( t == 'delete') r = '\u2326';
    else if ( t == 'clear') r = '\u2327';
    else if ( t == 'eject') r = '\u23cf';
    else if ( t == 'capslock') r = '\u21ea';
    else if ( t == 'pageup') r = '\u21de';
    else if ( t == 'pagedown') r = '\u21df';
    else if ( t == 'home') r = '\u2196';
    else if ( t == 'end') r = '\u2198';
    else if ( t == 'left') r = '\u21e0';
    else if ( t == 'up') r = '\u21e1';
    else if ( t == 'right') r = '\u21e2';
    else if ( t == 'down') r = '\u21e3';
    else if ( t == 'clock') r = '\u231a';
    else if ( t == 'gear') r = '\u2699';
    else if ( t == 'space') r = '\u00a0';
    else if ( t == 'check') r = '\u2713';
    else if (t == 'copy') r = '\u00a9';
    else if ( t == 'at') r = '\u0040';
    return r;
}
