// GoatCounter visit counter (https://www.goatcounter.com), cookie free.
// Set the code of the GoatCounter site, the part before ".goatcounter.com"; empty disables counting.
const GOATCOUNTER_CODE = 'mizo'

type GoatCounter = { count: (options: { path: string }) => void }

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

let loading: Promise<void> | null = null

// Loads the GoatCounter script once, with automatic counting off since the router changes pages itself.
function load() {
  loading ??= new Promise((resolve) => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://gc.zgo.at/count.js'
    script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
    script.dataset.goatcounterSettings = JSON.stringify({ no_onload: true })
    script.onload = () => resolve()
    script.onerror = () => resolve()
    document.head.appendChild(script)
  })
  return loading
}

// Counts one page view; does nothing in development or without a code.
export async function countVisit(path: string) {
  if (!GOATCOUNTER_CODE || import.meta.env.DEV) return
  await load()
  window.goatcounter?.count({ path: path + location.search })
}
