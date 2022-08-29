export default function Main () {
    return (
      <div>
        <section className="home-section" id="Home">
          <h1 className="hero-heading">
            KINSIONA MFINDA <br /> Clément
            <span>
              Développeur Web Junior <br />
              Paris, France
              <br />
              <br />
              mon cv
              <img src="svg/qr_code.svg" alt="my_resume" className="qr_code" />
            </span>
          </h1>
          <img
            src="svg/sound.on.svg"
            alt="logo sound on"
            id="music"
            height="30"
          />
          <img
            src="svg/sound_off.svg"
            alt="logo sound off"
            id="music_off"
            height="30"
          />
          <img src="img/moi.png" alt="moi" className="home-img" />
        </section>
      </div>
    )
} 