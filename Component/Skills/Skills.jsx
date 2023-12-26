import React from 'react'
import './Skills.css'
import ux from '../../image/ux.jpg'
import webdesign from '../../image/webdesign.png'
import appdesign from '../../image/appdesign.png'
const Skils = () => {
  return (
    <section id="skills">
      <span className="skillstittle">What I do</span>
     <div className="skillss">
     <span className="skillsdesc">I am skilled and passionate designer with experience in abobe photoshop Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo ab id incidunt, pariatur architecto iste, possimus libero aliquam sint eligendi sequi accusantium optio, esse qui temporibus non quod sed.
      Tenetur in, quos enim illum repellendus veritatis nobis perferendis tempore, tempora vero error minima delectus odio exercitationem maiores magnam doloribus unde, alias ipsum sapiente? </span>
     </div>
      <div className="skillsbars">

      <div className="skillline">
          <img src={ux} alt="ui/ux" className="skilllineimg" />
          <div className="skillbartext">
            <h2>UI/UX design</h2>
            <p>This is a demo  text , you can write your own  content here</p>
          </div>

        </div><div className="skillline">
          <img src={webdesign} alt="webdesign" className="skilllineimg" />
          <div className="skillbartext">
            <h2>Website design</h2>
            <p>This demo text can be changed while making the producton ready website .</p>
          </div>
          
        </div><div className="skillline">
          <img src={appdesign} alt="appdesign" className="skilllineimg" />
          <div className="skillbartext">
            <h2>App Design</h2>
            <p>you can write text related to mobile app development</p>
          </div>
        </div>
        
       
      </div>
    </section>
  )
}

export default Skils
