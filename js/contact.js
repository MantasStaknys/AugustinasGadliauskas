const form=document.getElementById('form')
const errorText = document.getElementsByClassName('error-text')
const fields=[
    document.getElementById('name'),
    document.getElementById('number'),
    document.getElementById('email'),
    document.getElementById('message')
]
form.addEventListener('submit', function(event){
    event.preventDefault()
    let validCount = 0

    fields.forEach((field, index) => {
        if (field.value.length == 0){
            field.classList.add('error')
            errorText[index].style.display='block'
            validCount = 0
        }
        else{
            field.classList.remove('error')
            validCount++
            errorText[index].style.display='none'
        }
    })
    if (validCount == 4) { 
        alert('Thank you for contacting us!')
        location.reload()
    }
    
})

