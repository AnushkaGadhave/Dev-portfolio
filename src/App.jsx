import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'

function App() {


  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="" />
          <img id='navy-pier' src="/navy-pier.png" alt="" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="" />
          <img id='phone' src="/phone.png" alt="" />
          <img id='kikk' src="/kikk.png" alt="" />
          <img id='kennedy' src="/kennedy.png" alt="" />
          <img id='opera' src="/opera.png" alt="" />
        </div>
        <Canvas
          id='canvas-elem'
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
          }} >
          <Dog />
        </Canvas>
        <section id='section-1' >
          <nav>
            <div className="nav-elem">
              <span className="brand-logo">ADARSH<span>.DEV</span></span>
            </div>
            <div className="nav-elem">
              <i className="ri-arrow-right-s-line"></i> My Showreel
            </div>
            <div className="nav-elem">
              <i className="ri-menu-3-line"></i>
            </div>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>I <br /> Make <br /> Good <br />Shit</h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>
                I am an independent creative developer <br />
                crafting bespoke digital experiences at the <br />
                intersection of art, 3D design and code.
              </p>
            </div>
          </div>

          <div className="first-line"></div>
          <div className="second-line"></div>

        </section>
        <section id='section-2' >
          <div className="titles">
            <div img-title="tomorrowland" className="title">
              <small>CREATIVE DIRECTION / 3D</small>
              <h1>Tomorrowland</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>WEBGL / INTERACTION</small>
              <h1> Navy Pier</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>3D EXPERIENCE / DEV</small>
              <h1>  MSI Chicago</h1>
            </div>
            <div img-title="phone" className="title">
              <small>CREATIVE ENGINEERING</small>
              <h1>This Was Louise’s Phone</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>INTERACTIVE ARTWORK</small>
              <h1>KIKK Festival</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>EXPERIENTIAL WEB</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div img-title="opera" className="title">
              <small>DIGITAL ARCHITECTURE</small>
              <h1>Royal Opera Of Wallonia</h1>
            </div>
          </div>


        </section>
        <section id='section-3' ></section>
      </main>
    </>
  )
}

export default App
