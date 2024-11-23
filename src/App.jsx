import { useState,Suspense,lazy,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const ImageAsset=lazy(()=>
  import('./assets/imageAsset'));
// import ImageAsset from './assets/imageAsset';
import './App.css'
const LazyLoading=lazy(()=> import('./components/LazyLoading'));
// import LazyLoading from './components/LazyLoading';

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
        // <ImageAsset/>
        // <Suspense fallback={<div>Loading..</div>} >
        // <ImageAsset/>
        // </Suspense>
        <Suspense fallback={<div>Loading..</div>}>
                 <LazyLoading/>
        </Suspense>
        
      )
    }
       
    </>
  )
}

export default App
