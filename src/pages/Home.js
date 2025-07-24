import React from 'react'
import Nav from './Nav'
import './home.css'
import data from './data'

function Home() {
  return (
    <div className='main'>
      <Nav />
      <div className='hmain'>
      <div className='hd1'>
        <div>
          <h1 className='hdh1'>DESIGN</h1>
          <h1 className='hdh2'> & FREEDOME</h1>
        </div>
      </div>
      <div className='hd2'>
        {
          data.map((k) => {
            return (

              <div className='hd21'>
                <h3>{k.heading}</h3>
                <p>{k.name}</p>
              </div>

            )
          })
        }
      </div>
      <div className='hd3'>
        {
          data.map((k) => {
            return (

              <div className='hd31'>
                <div><p>{k.hd3txt}</p></div>
                <div><h1>{k.hd3num}</h1></div>
              </div>

            )
          })
        }
      </div>


      <div className='hd4'>
        <div className='hd4txt'>
          <div className='hd411'>
            <h4>ABOUT</h4>
            <h1>WHERE FASHION MEETS FREEDOM</h1>
          </div>
          <div className='hd412'>
            <p>Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels. </p>
            <p>Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels. </p>
          </div>
        </div>

        <div className='hd4img'>
            
        </div>
      </div>


      <div className='hd5'>


        <div className='hd5our'>
          <h1>OUR ADVANTAGE</h1>
        </div>

        <div className='hd51'>

          <div className='hd5img'>
            {/* bag women */}
          </div>

          <div className='hd5txt'>
            <div className='hd5txt1'>
              <p>Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels. </p>
            </div>

            <div className='hd5txt1'>
                <p>Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels. </p>
            </div>
          </div>
          
        </div>

      </div>
                {/* https://i.pinimg.com/564x/45/4e/30/454e3030255aa63a459fae526e5d4d3b.jpg */}



      <div className='hd6'>
         <div className='hd61'>

          <div className='hd5txt'>
            <div className='hd5txt1'>
              <p>Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels. </p>
            </div>


            <div className='hd5txt1'>
                <p>Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels Initiatives like Fashion 4 Freedom focus on alleviating poverty through ethical
              manufacturing and preserving ancestral craftsmanship, as seen in the work of woodcarvers for exquisitely carved heels. </p>
            </div>
          </div>

          <div className='hd6img'>
            {/* bag women */}
          </div>
          
        </div>

      </div>


    </div>

    </div>  )
}

export default Home
