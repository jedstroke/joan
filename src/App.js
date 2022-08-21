import { useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
function App() {
  const heart = useRef(null);
  const poem = useRef(null);
  const preloader = useRef(null);
  const toast1 = () => {
    toast('Wait for it 👏🏽', {
      id:'toast one',
      duration: 1500
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        console.log(`${entry.target}: ${intersecting} `);
      })
    })
    observer.observe(poem.current);
    toast1();
  }, [])
  return (
    <>
    <div className="App">
      <div ref={preloader} className='preloader'>
        <div className='preloaderContent'>
          <div>
          <img className='heart' ref={heart} src="https://res.cloudinary.com/jedstroke/image/upload/v1661012008/heart_3_ihwvqu.png" alt="" />
          </div>
          <div>
          <p>For Joan</p>
          </div>
        </div>
      </div>
      <div className='content'>
      <div className='overlay'>
      <div ref={poem} className='poem'>

      </div>
      </div>
      <img src="https://res.cloudinary.com/jedstroke/image/upload/v1661032883/IMG_20220612_103555_500_2_1_yhshji.jpg" alt="" onLoad={() => {
        heart.current.classList.add('heartZoom');
        setTimeout(() => {
          console.log('2');
            preloader.current.classList.add('fadeOut');
            setTimeout(() => {
              console.log('3');
              preloader.current.style.display = 'none';
            }, 2000)
        }, 5000)
      }} />
      </div>
    </div>
    <Toaster toastOptions={{
    style: {
      fontFamily: 'Mellow',
      color: '#424449',
      fontWeight:'bold',
      padding: '2px',
      fontSize:'18px'
    },
  }}/>
    </>
  );
}

export default App;
