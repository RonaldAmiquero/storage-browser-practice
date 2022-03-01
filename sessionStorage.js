document.getElementById('create').addEventListener('click', create);
document.getElementById('read').addEventListener('click', read);
document.getElementById('update').addEventListener('click', update);
document.getElementById('remove').addEventListener('click', remove);

function create(e) {
  window.sessionStorage.setItem('token', 'token-value1');
}
function read(e) {
  alert(window.sessionStorage.getItem('token'));
}
function update(e) {
  window.sessionStorage.setItem('token', 'token-value2');
}
function remove(e) {
  window.sessionStorage.removeItem('token');
}
