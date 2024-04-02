
import './App.css'
import Card from './components/Card'

function App() {

  let myobj = {
    name:'sagar',
    age:22,
    address: {
      city:'tirupati',
      state:'Andhra Pradesh',
      country: 'india'
    }
  }
  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
        <h1 className='text-3xl bg-green-300 rounded-md text-cyan-900'>Vite with Tailwind</h1>
        <Card userName='sagar' post='Manager' myArr={newArr}/>
        <Card userName='vidya' post='HR'/>
        <Card />
    </>
  )
}

export default App
