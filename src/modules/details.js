import { getClients } from "../services/clients";

const form = document.querySelector('form')
const input = document.getElementById('card-id')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    const clientDetails = await getClients({ id: data['card-id'] })

    const { name, clientSince, appointmentHistory, image, loyaltyCard } = clientDetails
    const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard

    alert(name)
})

input.addEventListener('input', (event) => {
  let value = event.target.value.replace(/\D/g, '');

  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1-$2-$3-$4');

  value = value.substring(0, 15);

  event.target.value = value;
})