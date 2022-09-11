import React from 'react';
import data from './data.json';
import img1 from './assets/technology/image-launch-vehicle-landscape.jpg'
import img2 from './assets/technology/image-spaceport-landscape.jpg'
import img3 from './assets/technology/image-space-capsule-landscape.jpg'


 const Technology = ({modal}) => {
    const images = [img1, img2, img3]
    let id = 0
    const [tech, setTech] = React.useState(data.technology[0])
    const [image, setImage] = React.useState(0)

    const styles = {
      background: 'white',
      color: 'black'  
    
    }

    const opaque = {opacity:'.4'}
    
     function handleClick(e){
        id = e.target.id
         setImage(e.target.id)
        setTech(data.technology[id])
      
        
    }

    


     const Buttons = data.technology.map((item)=>{
     
        
      return(
          <button className='tech-btn' key={item.name} onClick={handleClick} id={data.technology.indexOf(item)} style={ item.name === tech.name?styles: null}>
            {data.technology.indexOf(item) + 1}
          </button>

      )
    })
  
  return (
    <>
      <section className='tech' style={modal?opaque:{}}>   
      <img src={images[image]} alt={tech.name} className='tech-img' />

     <div className='container'>
        <h2 className='title'><b style={{opacity: '.4'}}>03</b> space launch 101</h2>
        <div className='btn-container'>
         {Buttons} 
        </div>
         
        <div className='info'>
          
             <h2 style={{
              top: '10%',
              fontSize: '1rem',
              fontWeight: '400'
            }}>THE TERMINOLOGY...</h2>
          
        
        <h2 className='name'>
            {tech.name}
        </h2>
        <p> {tech.description}</p>
        </div>
        </div>
 
        </section>
 
    </>
   
  )
}

export default Technology
 
