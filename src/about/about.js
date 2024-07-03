import './about.css'
import profile from '../images/profile.png'

function About() {
    return(
        <div className='about'>
            <div class="wrapper_mn">
                <div class="Headerrr">
                <div className='first_mn'>
                     <h3> ma.</h3>
                     </div>
                <div className='second_mn'>
                <p class="links" href="">Work</p>
                <p class="links" href="">About</p>
                <p class="links" href="">Playground</p>
                <p class="links" href="">Contact</p>    
                </div>
                </div>
                </div>

        <div className='aboutsSecondDiv'>
            <div>
                <div>
                    <h1 className='main_wr'>Hi I'm Mehmet Akif Karasu, 3D artist & sculptor.</h1>
                </div>
                    <div className='text_and_picture'>
                        <div>
                        <p className='wvnn'>My work is mainly focused on third-dimension modeling, texturing and rendering.
                            I like exploring the creatures with a touch of dark surrealism for characters and production.
                        </p>
                        <p className='wwaw'> Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
                        </p>
                        </div>
                    </div>
             </div>
             <div className='aboutsImgDiv'> 
              <img className='aaat' src={profile}/>
            </div>
       
        </div>
        
           <div className='details'>
           <a    href='' className='ghj'>Main Software</a>
            <p className='wqa'>
                Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
            </p>


           </div>
            <p className='oooo'>Adobe CC, Figma, Ableton</p>
            <div div className='hfgf'>
            <a  href='' className='link_second'>Main Skills</a>
            <p className='text_third'>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design
            </p>
            </div>
            <div className='line'></div>
            <div className='finaly'>
            <p className='pyt'>Mehmet Akif Karasu ⏤ 2020</p> 
            <p className='bkb'>Artstation</p>
            <p className='wxk'>Linkedin</p>
            <p className='lyi'>Twitter</p>
            
            </div>
        </div>
        
       
 );
};

export default About;