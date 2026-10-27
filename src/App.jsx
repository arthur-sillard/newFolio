import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <div className="bg-primary-light-1 dark:bg-primary-dark-1 h-dvh flex flex-col items-center">
        <Navbar />
        <div className='w-full h-15'></div>

        <div className='flex w-full md:w-3xl px-4'>
          <Hero />
          
        </div>


      </div>
    </>
  )
}




export default App
