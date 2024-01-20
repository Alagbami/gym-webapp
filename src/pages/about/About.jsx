import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


import './about.css'




const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Officia accusamus eos aperiam ad. Voluptate dolorem quia minus,
      consequatur animi vel.
    </Header>
    
    <section className='about__story'>
      <div className='container about__story-container'>
      <div className='about__section-image'>
          <img src={StoryImage} alt='the story image' />
        </div>
        <div className="about__section-content">
          <h1>our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia nesciunt incidunt commodi consectetur maxime distinctio 
            ea reprehenderit, minima ex corporis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet odit similique temporibus libero voluptatem nam 
            nisi molestias corporis magni velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Adipisci modi repellendus reiciendis. Veniam.
          </p>
        </div>
      </div>
    </section>
    
    <section className='about__vision'>
      <div className='container about__vision-container'>
        <div className="about__section-content">
          <h1>our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste expedita asperiores ea earum nam rem. Eveniet, asperiores labore? Tempora quos
            quis culpa ad temporibus nostrum nemo nisi atque possimus pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet odit similique temporibus libero voluptatem nam 
            nisi molestias corporis magni velit.
          </p>
        </div>
        <div className='about__section-image'>
          <img src={VisionImage} alt='the vision image' />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className='container about__mission-container'>
      <div className='about__section-image'>
          <img src={MissionImage} alt='the mission image' />
        </div>
        <div className="about__section-content">
          <h1>our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia nesciunt incidunt commodi consectetur maxime distinctio 
            ea reprehenderit, minima ex corporis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet odit similique temporibus libero voluptatem nam 
            nisi molestias corporis magni velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Adipisci modi repellendus reiciendis. Veniam.
          </p>
        </div>
      </div>
    </section>

    </>
 )
}

export default About