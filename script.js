 
// Storage
var b64 = {     i: null,     o: null,     t: null
} 
// Event -> Web-page loading
window.onload = function() {     b64.i = g('i')     b64.i.oninput = b64En     b64.i.focus()     b64.o = g('o')     b64.t = g('s')     b64.t.onchange = clear     screenSize()
} 
// Event -> Web-page resize
window.onresize = screenSize 
// Update selected height size
function screenSize() {     sy = window.innerHeight / 2 - 65     b64.i.style.height = sy + 'px'     b64.o.style.height = sy + 'px'
} 
// Convert Text <==> Base64
function b64En() {     if(b64.t.value === '0') {         b64.o.value = window.btoa(encodeURIComponent(b64.i.value))     } else {         b64.i.value = b64.i.value.replace(/[^a-zA-Z0-9=]/g, '')         if(b64.i.value.length !== 0 && b64.i.value.length % 4 == 0) {             b64.o.value = window.atob(decodeURIComponent(b64.i.value))         } else {             b64.o.value = ''         }     }
} 
// Clear inputs
function clear() {     b64.i.value = ''     b64.o.value = ''
} 
// Get element by id
function g(a) {     return document.getElementById(a)
}
