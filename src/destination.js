import React from 'react';
import data from './data.json';
import img1 from './assets/destination/image-moon.png'
import img2 from './assets/destination/image-mars.png'
import img3 from './assets/destination/image-europa.png'
import img4 from './assets/destination/image-titan.png'

const Destination = ({modal}) => {
    const images = [img1, img2, img3, img4]
    let id = 0
    const [destination, setDestination] = React.useState(data.destinations[0])
    const [image, setImage] = React.useState(0)

    const styles = {
      borderBottom: '1px solid white'
    }


    const opaque = {opacity:'.4'}

     function handleClick(e){
        id = e.target.id
         setImage(e.target.id)
        setDestination(data.destinations[id])
      
        
    }

    


    const Buttons = data.destinations.map((dest)=>{
     
        
      return(
          <button key={dest.name} onClick={handleClick} id ={data.destinations.indexOf(dest)} style={ dest.name === destination.name?styles: null}> {dest.name}
          
          </button>

      )
    })
  
  return (
    <>
      <section className='dest' style={modal?opaque:{}}>  
      <div>
      <h2 style={{margin: '0',
             fontSize: '1rem', 
             color:'white'}}>
         <b style={{opacity: '.4'}}>01</b> PICK YOUR DESTINATION
         </h2>
        <img src={images[image]} alt={destination.name} className="dest-img" />
        </div> 

     <div className='container'>
    
        <div className='btn-container'>
        {Buttons}
        </div>
        <h2 className='name'>
            {destination.name}
        </h2>
        <p> {destination.description}</p>

        <div className='dest-footer'>
          <div>
            <h4>
              AVG. DISTANCE
            </h4>
            <h2>{destination.distance}</h2>
          </div>

          <div>
            <h4>
              EST. TRAVEL TIME
            </h4>
            <h2>{destination.travel}</h2>
          </div>
        </div>
        </div>
        </section>
 
    </>
   
  )
}


export default Destination
