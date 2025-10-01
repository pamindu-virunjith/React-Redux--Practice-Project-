import './App.css'
import ButtonComponent from './components/buttonComponent'
import Postlist from './components/postlist'
import SelectedPost from './components/selectedPost'

function App() {

  return (
    <>
     <div className='App'>
      <h1 className='h1'>Redux Practice Project</h1>
      <hr />
      <ButtonComponent/>
      <br />
      <Postlist/>
      <hr />
      <SelectedPost/>
     </div>
    </>
  )
}

export default App
