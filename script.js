//Jquery
const insert = $("#insert");

$(window).keydown((e) => {
  const keyDisplay = `
      <div class='key'>
        ${
        e.key === " " ? e.code : e.key
      }
      <small>event.key</small></div>
      <div class='key'>${e.keyCode}<small>event.keyCode</small></div>
      <div class='key'>${e.code}<small>event.code</small></div>
    `;

  insert.html(keyDisplay);

});

//Vanilla Js
// const insert = document.getElementById("insert");

// window.addEventListener("keydown", (e) => {
//   insert.innerHTML = `<div class='key'>${
//     e.key === " " ? "Space" : e.key
//   }<small>event.key</small></div>
//       <div class='key'>${e.keyCode}<small>event.keyCode</small></div>
//       <div class='key'>${e.code}<small>event.code</small></div>
//     `;
// });