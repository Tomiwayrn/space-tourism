import React from 'react';
import data from './data.json';
import img1 from './assets/crew/image-douglas-hurley.png'
import img2 from './assets/crew/image-mark-shuttleworth.png'
import img3 from './assets/crew/image-victor-glover.png'
import img4 from './assets/crew/image-anousheh-ansari.png'

const Crew = ({modal}) => {
    const images = [img1, img2, img3, img4]
    let id = 0
    const [crew, setCrew] = React.useState(data.crew[0])
    const [image, setImage] = React.useState(0)

    const styles = {
      background: 'white'
    
    }

    const opaque = {opacity:'.9'}

     function handleClick(e){
        id = e.target.id
         setImage(e.target.id)
        setCrew(data.crew[id])
      
        
    }

    


    const Buttons = data.crew.map((item)=>{
     
        
      return(
          <button className='crew-btn' key={item.name} onClick={handleClick} id={data.crew.indexOf(item)} style={ item.name === crew.name?styles: null}>
      
          </button>

      )
    })
  
  return (
    <>
      <section className='crew' style={modal?opaque:{}}> 
      <img src={images[image]} alt={crew.name} className='crew-img' />  
     <div className='container'>

      <h3 style={{margin: '0',
                  
             fontSize: '1rem', 
             color:'white'
             }}><b style={{opacity: '.5'}}>02</b> MEET YOUR CREW</h3>
      
        <div className='btn-container   crew-bt'>
        {Buttons}
        </div>
        <h3 className='sub-header'>{crew.role}</h3>
        <h2 className='name'>
            {crew.name}
        </h2>
        <p> {crew.bio}</p>
        </div>
        </section>
 
    </>
   
  )
}


export default Crew
