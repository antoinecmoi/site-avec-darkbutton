const darkbutton = document.getElementById('dark')
const dark = document.body

darkbutton.addEventListener('click', function() { 
dark.classlist.toggle('dark')
})