import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented } from './features/counter/counter-slice'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(incremented())
  }

  return (
    <>
      <h1>Redux Toolkit Demo</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
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
