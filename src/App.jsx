import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'
// import { IoPersonAdd, MdDelete  } from "react-icons/io5";


function App() {
  const [task, setTask] = useState([])

  useEffect(() => {
    getTask()
  }, [])

  async function getTask() {
    const { data, error } = await supabase.from('task').select()

    if (error) {
      console.error(error)
      return
    }

    setTask(data)
  }

  return (
    <section className='mt-6'>
      <div className='mb-4'>
        <span className='text-5xl font-bold'>To-do List</span>
      </div>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr className='text-center font-bold'>
              <th scope="col" className="px-6 py-3 font-medium">
                Título
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Completado
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Creado
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {task.map((task) => (
              <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                <th scope="col" className="px-6 py-3 text-center font-medium"
                  key={task.user_id}>{task.title}
                </th>
                <td className="px-6 py-4 text-center">
                  <a href="#" className="font-medium text-fg-brand hover:underline" key={task.user_id}>{task.completed}</a>
                </td>
                <td className="px-6 py-4 text-center">
                  <a href="#" className="font-medium text-fg-brand hover:underline" key={task.user_id}>{task.created_at}</a>
                </td>
                <div className=''>
                  <td className="px-6 py-4 text-center">
                    <button className='mx-4'>
                      {/* <IoAddCircle /> */}

                      <span>Agregar</span>
                    </button>           
                    <button>
                      {/* <MdDelete /> */}
                      <span>Eliminar</span>
                    </button>     
                    </td>
                  <td className="px-6 py-4 text-center">
                    <a href="#" className="font-medium text-fg-brand hover:underline" key={task.user_id}>{task.created_at}</a>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </section>
  )
}

export default App