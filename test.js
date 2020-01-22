document.addEventListener('DOMContentLoaded', function() {

    let myForm = document.querySelector('.choose-crm__input-form');
    myForm.addEventListener('submit', submitForm)

    function submitForm(e) {
        e.preventDefault();
        
        let formData = new FormData(e.target);
        let obj = {};
        formData.forEach((value, key) => obj[key] = value);
        e.target.reset();
        
        let request = new Request(e.target.action, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        fetch(request)
        .then(res => res.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
    }
})
     
