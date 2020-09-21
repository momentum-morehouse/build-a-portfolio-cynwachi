const form = document.querySelector("#submitIt")
console.log(form)
form.addEventListener("submit", (event) => {
    // const
    event.preventDefault(); 
    const firstName = document.querySelector("#fname");
    const lastName = document.querySelector("#lname");
    const eMail = document.querySelector("#email");
    const subjectIn = document.querySelector("#subject");
    console.log({
            id: 1, 
            firstName: firstName.value, 
            lastName: lastName.value, 
            email: eMail.value, 
            subjectIn: subjectIn.value })
})