async function postData()
{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneno = document.getElementById('phoneno').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('mainmessage').value;

    const url = 'https://auto-wizzard-api.herokuapp.com/api/sendmessage';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        payLoad: {
          name: name,
          email: email,
          phoneno: phoneno,
          subject: subject,
          message: message
        }
      }),
      headers: {'Content-Type': 'application/json; charset=UTF-8'}
    })
    if(!response.ok)
    {
      document.getElementById('errorMessage').innerHTML = 'Error Occurred';
    }
    else
    {
      document.getElementsByClassName('email-form')[0].reset();
      document.getElementsByClassName('sent-message')[0].style.display = "block";

      setTimeout(function () {
        document.getElementsByClassName('sent-message')[0].style.display = "none";
      }, 3000);
    }
}
