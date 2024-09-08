import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { amountAdded, incremented } from './features/counter/counter-slice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
