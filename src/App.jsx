import { useState,Suspense,lazy,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const ImageAsset=lazy(()=>
  import('./assets/imageAsset'));
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [renderImageAsset,setImageRender]=useState(false);
    useEffect(()=>{
         setTimeout(() => {
            setImageRender(true);
         }, 1500);
    },[]);
  return (
    <>
    {
      renderImageAsset && (
        <Suspense fallback={<div>Loading..</div>} >
        <ImageAsset/>
        </Suspense>
      )
    }
       
    </>
  )
}

export default App
