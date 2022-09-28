const rsvpSelect = document.getElementById('#submitButton')

async function submitRSVP() {
    const arrayOfRadios = document.getElementsByName('RSVP')
    let result;
    for (i = 0; i < arrayOfRadios.length; i++) {
        if (arrayOfRadios[i].checked) {
            result = arrayOfRadios[i].value
        }
    }
    try{
        const res = await fetch('/rsvp', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'rsvpAnswer': result
            })
        })
        const data = await res.json()
        console.log(data)
        alert(data)
        // window.location.href("http://localhost:9000/success")
        window.location.replace("/success")
    } catch (err) {
        console.log(err)
    }
}
