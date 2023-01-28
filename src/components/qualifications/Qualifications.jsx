import  "./qualification.css"
import { useState } from "react";
function Qualifications() {
    const[toggleState, setToggleState]= useState(1);
    const toggleTab =(index)=>{
        setToggleState(index)
    }
  return (
   <section className="qualification section">
      <h2 className="section__title ">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className={toggleState ===1
                 ?"qualification__button qualification__active  button--flex"
                 :"qualification__button button--flex"}   onClick={()=>toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification__icon"></i>{""} Education
            </div>
            <div className={toggleState ===2
                 ?"qualification__button qualification__active  button--flex"
                 :"qualification__button button--flex"}   onClick={()=>toggleTab(2)}> 
                <i className="uil uil-briefcase-alt qualification__icon"></i>{""} Experience
            </div>
        </div>
      </div>
      <div className="qualification__sections">
        <div className={toggleState==1 ? 
        "qualification__content qualification__content-active":
        "qualification__content"}
      >

            <div className="qualification__data">
             <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Traversy Media</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i> 2020 -2021
                </div>
               </div>
               <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
            </div>


            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
             <div>
                <h3 className="qualification__title">Backend Development</h3>
                <span className="qualification__subtitle">Academind</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i>  2021-2022
                </div>
               </div>
              
            </div>

            <div className="qualification__data">
             <div>
                <h3 className="qualification__title">UI Ux designer</h3>
                <span className="qualification__subtitle">Daniel Walter Academy</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i> 2022 -2023
                </div>
               </div>
               <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
            </div>


            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
             <div>
                <h3 className="qualification__title">Blockchain Development</h3>
                <span className="qualification__subtitle">Udacity Nano degree</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i>  2021 -2022
                </div>
               </div>
              
            </div>
        </div>

        <div  className={toggleState==2 ? 
        "qualification__content qualification__content-active":
        "qualification__content"}>
            <div className="qualification__data">
             <div>
                <h3 className="qualification__title">FrontEnd Development</h3>
                <span className="qualification__subtitle">Traversy Media</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i> 2020 -2022
                </div>
               </div>
               <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
            </div>


            <div className="qualification__data">
                <div></div>
                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
             <div>
                <h3 className="qualification__title">Ux Designer</h3>
                <span className="qualification__subtitle">Daniel Walter Scott</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i>  2021-2022
                </div>
               </div>
              
            </div>

            <div className="qualification__data">
             <div>
                <h3 className="qualification__title">MERN Stack</h3>
                <span className="qualification__subtitle">ZinoTrust Academy Academy</span>
                <div className="qualification__calender">
                 <i className="uil uil-calender-alt"></i> 2021 -2022
                </div>
               </div>
               <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
               </div>
            </div>

        </div>
      </div>
   </section>
  )
}

export default Qualifications