import Thumbnail from '../images/Thumbnail.png';
import './home.css';
import first from '../images/first.png'
import { NavLink } from 'react-router-dom';

function Home() {
    return(
        <div className='home'>
            <div class="main__wrapper">
                <div class="Header">
                <div className='first'> <h2  >ma.</h2></div>
                <div className='second'>
                   <a class="links" href="">Work</a>
                   <NavLink to='/about'>
                   <a class="links" href="">About</a>
                    </NavLink>
                    <a class="links"  href="">Playground</a>
                    <a class="links" href="">Contact</a>    
                </div>
                
                    </div>
                </div>
                <div class="first__section">
                    
                    <div className='wrapper'>
                    <h1 class="main__lilie">Hello, I’m Mehmet Akif. </h1>
                    <h2 className='left'>A senior-year design student who trying to specialize in 3D modeling & texturing. </h2>
                    </div>
                    <img width="55" height="54" src={first}/>
                    <div className='picture'>
                    <div>
                    <p className='klkj'>01 / PROJECT NAME </p>      
                    <p className='text_t'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development. </p> 
                    <p className='something'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
                    <a  class='link' href='' className='ddd'>More shots from this project ↗</a>   
                    </div>
                    <img className='nmnm' width="640" height="340" src={Thumbnail}/>
                
                    </div>
                    <div className='line'>

            </div>
            <div className='ttt'> 
            <div>
            <h4 className='name'>02 / PROJECT NAME</h4>
            <p className='texttt'> Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.</p>

            </div> 

            <div className='ggg'>
            <img width="640" height="340" src={Thumbnail}/>
            </div>
            </div>
            <a  class='link' href='' className='kkk'>See case study →</a>  
            <div className='line'>
            </div>
            <div className='project'>

            <div>
            <p  className='mmm'>03 / PROJECT NAME</p>
            <p className='sss'>Experimental creature modeling for school project.</p>
            <div style={{marginTop:'230px'}}>
            <a  class='link'  href='' className='yyy'>Project WIP</a>  
            </div>
            </div>
            <div className='zzz'>
            <img width="640" height="340" src={Thumbnail}/>

            </div>

            <div/>


            </div>
            <div className='line'></div>
            <div className='wrapper_items'>
                
            <p className='ppp'>Mehmet Akif Karasu ⏤ 2020</p> 
            <p className='bbb'>Artstation</p>
            <p className='khk'>Linkedin</p>
            <p className='ioi'>Twitter</p>
            
            </div>
            </div>
        </div>
    )
}

export default Home;