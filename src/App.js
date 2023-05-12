/* eslint-disable */
import { useRef, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [soundInit, setSoundInit] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState(false);
  const heart = useRef(null);
  const tapper = useRef(null);
  const memories = useRef(null);
  const poem = useRef(null);
  const preloader = useRef(null);
  const sounder = () => {
    setSoundInit(true);
    if(!soundInit){
      toast.dismiss('toasty');  
      memories.current.play()
      memories.current.pause()
      toast('Thank you 👏🏽', {
        id:'toast',
        duration: 1000,
      });
    }
    tapper.current.removeEventListener('click', sounder);
  };
  useEffect(() => {
    const toast1 = () => {
      toast('Tap the screen for sound 😉', {
        id:'toasty',
        duration: 6000,
      });
      tapper.current.addEventListener('click', sounder)
    };
    const stanzas = document.querySelectorAll('.stanza');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          // console.log(entry);
          if(entry.target.dataset.mood === 'Hollow Coves'){
            setTitle(true);
            if (!playing) {
              memories.current.volume = 0.5;
              memories.current.play();
              setPlaying(true);
            }
          }
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }else{
          // console.log(entry);
          if (entry.target.dataset.mood === "Hollow Coves") {
            setTitle(false);
          }
          entry.target.style.opacity = '0';
          entry.target.style.transform = 'translateY(60px)';
        }
      })
    }, {
      root: poem.current
    })
    stanzas.forEach(el => {
      observer.observe(el);
    })
    toast1();
  }, [])
  return (
    <>
      <div ref={tapper} className="App">
        <audio
          onEnded={() => {
            setPlaying(!playing);
          }}
          ref={memories}
          src="https://res.cloudinary.com/jedstroke/video/upload/v1660959435/Hollow_Coves_-_These_Memories_tlcjqg.mp3"
        ></audio>
        <div ref={preloader} className="preloader">
          <div className="preloaderContent">
            <div>
              <img
                className="heart"
                ref={heart}
                src="https://res.cloudinary.com/jedstroke/image/upload/v1661012008/heart_3_ihwvqu.png"
                alt=""
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Mellow Bold', 'Trebuchet MS', sans-serif",
                  fontDisplay: "swap"
                }}
              >
                For Joan
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <h1 id={`${title ? "hideTitle" : "showTitle"}`} className="title">
            For Joan
          </h1>
          <div className="overlay">
            <div ref={poem} className="poem">
              <div className="pushBox"></div>
              <div data-mood="stanza 1" className="stanza">
                <p className="line">I came to you bare and naked</p>
                <p className="line">You clothe me with love so sacred</p>
                <p className="line">I bet we’re on God’s favorite TV series</p>
              </div>
              <div data-mood="stanza 2" className="stanza">
                <p className="line">
                  I didn’t know I had <span className="anote">arrhythmia</span>
                </p>
                <p className="line">Until I met you. You’re my redeemer</p>
                <p className="line">I’m laid-back, and I chase no Maybach</p>
              </div>
              <div data-mood="Hollow Coves" className="stanza">
                <p className="line">
                  But <span className="anote">aurora-dreams</span> for Joan
                </p>
                <p className="line">In mid-night sun I’ll ask to be your man</p>
                <p className="line">
                  Life has been hell but you’ve been my{" "}
                  <span className="anote">novocaine</span>
                </p>
              </div>
              <div data-mood="stanza 4" className="stanza">
                <p className="line">When I fall apart you keep me sane</p>
                <p className="line">
                  Space or time can’t take you from my astral plane
                </p>
                <p className="line">
                  And when we have a kid I think I will name him{" "}
                  <span className="anote">Gekyume</span>
                </p>
              </div>
              <div data-mood="stanza 5" className="stanza">
                <p className="line">Because you were, and are my first love,</p>
                <p className="line">
                  <span className="anote">Back and forward propagation</span>, I
                  want to be the <span className="anote">model</span> you love.
                </p>
                <p className="line">
                  I’m soleless, but on bare feet & soulful, I’ll chase our
                  dreams <span className="anote">greater than Gatsby.</span>
                </p>
              </div>
              <br />
              <div className="author">
                —{" "}
                <a className="authorTxt" href="https://instagram.com/jedstroke">
                  Jedidiah Gabriel
                </a>
              </div>
              <br />
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/jedstroke/image/upload/v1661032883/IMG_20220612_103555_500_2_1_yhshji.jpg"
            alt=""
            onLoad={() => {
              if (window.innerWidth > window.innerHeight) {
                toast("Use a portrait screen 🙏🏽", {
                  duration: 10000,
                  style: {
                    width: "fit-content",
                    whiteSpace: "nowrap",
                  },
                });
                return;
              }
              heart.current.classList.add("heartZoom");
              setTimeout(() => {
                preloader.current.classList.add("fadeOut");
                setTimeout(() => {
                  preloader.current.style.display = "none";
                  poem.current.scrollTo(0, 100);
                  setTimeout(() => {
                    poem.current.scrollTo(0, -100);
                  }, 500);
                }, 500);
              }, 5000);
            }}
          />
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "'Mellow', 'Trebuchet MS', sans-serif",
            fontDisplay: "swap",
            fontWeight: "500",
            color: "#424449",
            textAlign: "center",
            padding: "2px",
            fontSize: "18px",
            wordBreak: "keep-all",
            whiteSpace: "nowrap",
          },
        }}
      />
    </>
  );
}

export default App;
