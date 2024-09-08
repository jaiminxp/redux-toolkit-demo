import { useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { amountAdded, incremented } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const [numDogs, setNumDogs] = useState(10)
  const { data = [] } = useFetchBreedsQuery(numDogs)

  function handleClick() {
    dispatch(incremented())
  }

  function handleAddAmountClick() {
    dispatch(amountAdded(5))
  }

  return (
    <>
      <h1>Redux Toolkit Demo</h1>
      <div className="card">
        <div className="btn-container">
          <button onClick={handleClick}>count is {count}</button>
          <button onClick={handleAddAmountClick}>Increment by 5</button>
        </div>
      </div>
      <div className="card">
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
