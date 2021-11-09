let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const yes = document.getElementById('yes').value
  const date = document.getElementById('date').value

  console.log(
    'name: ', name,
    '   email: ', email,
    '   sign me up?', yes,
    '   date: ', date,
  )
}
