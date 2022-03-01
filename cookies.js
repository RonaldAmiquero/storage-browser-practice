document.getElementById('create').addEventListener('click', create)
document.getElementById('read').addEventListener('click', read)
document.getElementById('update').addEventListener('click', update)
document.getElementById('remove').addEventListener('click', remove)

const maxAge = 'max-age = 60*60*24'
/*
    si no definimos el tiempo de expiracion solo durara hasta que cerremos el navegador( puedes utilizar expires o max-age son casi lo mismo)
 */
function create(e) {
  document.cookie =
    'usuario=ronald; expires=Thu,3 Dec 2022 12:00:00 UTC; path=/'
  console.log('pase')
}
function read(e) {
  alert(document.cookie)
}
function update(e) {
  document.cookie =
    'usuario=ronald123; expires=Thu,3 Dec 2022 12:00:00 UTC ; path=/'
}
function remove(e) {
  document.cookie = 'usuario = ; expires=Thu,3 Dec 2021 12:00:00 UTC ; path=/'
}
