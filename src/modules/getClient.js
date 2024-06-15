import { getClientById } from "../services/clientById.js"
import { clientCard } from "./clientCard.js"
import { fidelityCard } from "./fidelityCard.js"
import { historyCard } from "./historyCard.js"
import { progressCard } from "./progressCard.js"

const form = document.querySelector('form')
const input = document.getElementById('card-id')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const client = await getClientById({ id: data['card-id'] })

    const { name, clientSince, appointmentHistory, image, loyaltyCard } = client
    const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard

    clientCard({ name, clientSince, image })
    fidelityCard({ id: data['card-id'], cutsNeeded, totalCuts })
    historyCard({ appointmentHistory })
    progressCard({ totalCuts, cutsNeeded, cutsRemaining })
})

input.addEventListener('input', (event) => {
  let value = event.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1-$2-$3-$4');
  value = value.substring(0, 15);
  event.target.value = value;
})