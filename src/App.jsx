import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'

function App() {
  const [instruments, setInstruments] = useState([])

  useEffect(() => {
    getInstruments()
  }, [])

  async function getInstruments() {
    const { data, error } = await supabase.from('instruments').select()

    if (error) {
      console.error(error)
      return
    }

    setInstruments(data)
  }

  return (
    <section>
      <div >
        <span>hola</span>
      </div>

      <ul>
        {instruments.map((instrument) => (
          <li key={instrument.id}>{instrument.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default App