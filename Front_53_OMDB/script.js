document.getElementById('changeBtn').addEventListener('click', changeTheme)
function changeTheme() {
    let changeBtn = document.getElementById('changeBtn')
    changeBtn.classList.toggle('active')
}