const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker =0
function onKeyDownHandler(event) {
  const key = parseInt(event.detail || event.which)
  if (tracker ===code.length){
    window.alert("You found it")
  }
  // Write your JavaScript code inside the init() function

}