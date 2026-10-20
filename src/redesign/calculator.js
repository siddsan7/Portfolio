// Progressive enhancement for a clearly labeled model from the Dispatcher source.
export function enhanceCalculators(root = document) {
  for (const form of root.querySelectorAll('[data-net-calculator]')) {
    const fields = ['payout', 'fuel', 'deadhead'].map(name => form.elements.namedItem(name))
    const output = form.querySelector('output')
    const message = form.querySelector('[data-calculator-message]')
    function update() {
      const invalid = fields.filter(field => {
        const valid = field.validity.valid && Number.isFinite(field.valueAsNumber)
        field.setAttribute('aria-invalid', String(!valid))
        return !valid
      })
      if (invalid.length) {
        output.value = 'Check the inputs'
        const labels = { payout: 'Payout', fuel: 'Fuel estimate', deadhead: 'Deadhead' }
        const names = invalid.map(field => labels[field.name])
        message.textContent = `Check ${names.join(', ')}. Use the ranges and precision shown above.`
        return
      }
      const [payout, fuel, deadhead] = fields.map(field => field.valueAsNumber)
      output.value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payout - fuel - deadhead * 1.45)
      message.textContent = 'Fixed deadhead assumption: $1.45 per mile. Demo calculation, not realized profit.'
    }
    form.addEventListener('input', update)
    form.addEventListener('submit', event => { event.preventDefault(); update() })
    // Reset's default action runs after its event listeners and their microtasks.
    form.addEventListener('reset', () => setTimeout(update, 0))
    form.hidden = false
    update()
  }
}
