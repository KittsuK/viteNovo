import style from './App.module.css'
import Menu from './components/Menu'

export default function App() {
  return (
      <div className={style['wrap-principal']}>
        <Menu/>
      </div>
  )
}

