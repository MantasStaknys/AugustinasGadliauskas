const form=document.getElementById('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    alert('Thank you for contacting us!')
    location.reload()
})
