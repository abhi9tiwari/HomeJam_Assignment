import React from 'react'
import ReactPropTypes from 'react'

function Studio(props) {
  return (
    <div className='studio'>
    <div className="container">
      <h1>STUDIO</h1>
      <hr />
      <br/>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src="../simages/mappa.jpg"
            alt=""
          />
          <br/>
          <br/>
    
          <h2>{props.StudioOne}</h2>
          <p>
            MAPPA Co., Ltd. (Japanese: 株式会社MAPPA, Hepburn: Kabushiki-gaisha
            Mappa) is a Japanese animation studio. It was founded on June 14,
            2011, by Masao Maruyama, a founder and former producer of
            Madhouse,[2] and has produced anime works including Kids on the
            Slope, Terror in Resonance, Yuri!!! on Ice, In This Corner of the
            World, Kakegurui, Banana Fish, Jujutsu Kaisen and the final season
            of Attack on Titan.
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src="../simages/ufo.jpg"
            alt=""
          />
          <br/>
          <br/>

          <h2>{props.StudioTwo}</h2>
          <p>
            Ufotable, Inc. (Japanese: ユーフォーテーブル有限会社, Hepburn:
            Yūfōtēburu yūgen-gaisha) is a Japanese animation studio founded in
            October 2000 by former staff of the TMS Entertainment subsidiary
            Telecom Animation Film and located in Suginami, Tokyo. A unique
            hallmark seen in many of their works (Ninja Nonsense, Futakoi
            Alternative, Coyote Ragtime Show, Gakuen Utopia Manabi Straight!,
            Tales of Symphonia.
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src="../simages/sg.png"
            alt=""
          />
          <br/>
          <br/>

          <h2>{props.StudioThree}</h2>
          <p>
            Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn:
            Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio
            headquartered in Koganei, Tokyo.[1] The studio is best known for its
            animated feature films, and has also produced several short
            subjects, television commercials, and one television film. The
            studio's mascot and most recognizable symbol is a character named
            Totoro..
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
      </div>
    </div>

    <br/>

    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src="../simages/bones.jpg"
            alt=""
          />
          <br/>
          <br/>

          <h2>{props.StudioFour}</h2>
          <p>
            Bones Inc. (stylized in lowercase as bones inc.) (Japanese: 株式会社 ボンズ, Hepburn: Kabushiki gaisha Bonzu) is a Japanese animation studio. It has produced numerous series, including RahXephon, No. 6, Wolf's Rain, Scrapped Princess, Eureka Seven, Angelic Layer, Darker than Black, Soul Eater, Ouran High School Host Club, two adaptations of the Fullmetal Alchemist manga, Star Driver, Gosick, Mob Psycho 100, Space Dandy, Sk8 the Infinity, Noragami, and My Hero Academia. Its headquarters are located in Igusa, Suginami, Tokyo.[2] .
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src="../simages/kyoani.jpg"
            alt=""
          />
          <br/>
          <br/>

          <h2>{props.StudioFive}</h2>
          <p>
            Kyoto Animation Co., Ltd. (Japanese: 株式会社京都アニメーション, Hepburn: Kabushiki-gaisha Kyōto Animēshon), often abbreviated KyoAni (京アニ, Kyōani), is a Japanese animation studio and light novel publisher located in Uji, Kyoto Prefecture. Founded in 1981 by Yoko and Hideaki Hatta, it has produced anime works including The Melancholy of Haruhi Suzumiya (2006), Clannad (2007), K-On! (2009), Free! (2013), Sound! Euphonium (2015), A Silent Voice (2016), and Violet Evergarden (2018). 
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        <div className="col-lg-4">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src="../simages/wit.png"
            alt=""
          />
          <br/>
          <br/>

          <h2>{props.StudioSix}</h2>
          <p>
            WIT STUDIO, Inc. (Japanese: 株式会社ウィットスタジオ, Hepburn: Kabushiki-gaisha Witto Sutajio) is a Japanese animation studio founded on June 1, 2012 by producers at Production I.G as a subsidiary of IG Port. It is headquartered in Musashino, Tokyo with Production I.G producer George Wada as president and Tetsuya Nakatake, also a producer at Production I.G., as a director of the studio. The studio gained notability for producing the first three seasons of Attack on Titan.[1] 
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
      </div>
    </div>
    <br/>
    {/* < hr/> */}
    </div>
  )
}

export default Studio