import {useState} from 'react'
import "./service.css"
function Service() {
    const[toggleState, setToggleState]= useState(0);
    const toggleTab =(index)=>{
        setToggleState(index)
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i Offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Web <br/> development</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState===1 ? "services__modal active-modal" :"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Web Development</h3>
                        <p className="services__modal-description">Services with more than 1 year of experience  providing
                        quality work to clients and companies
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Building and maintaining websites and web applications
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Writing clean, efficient, and well-documented code
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Collaborating with designers and other stakeholders to implement visually appealing designs
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Ensuring websites and web applications are mobile-responsive and accessible to all users
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">E-commerce <br/> development</h3>
                </div>
                <span className="services__button" onClick={()=> toggleTab(2)}>View More  <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState===2 ? "services__modal active-modal" :"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>
                        <h3 className="services__modal-title">E-Commerce Development</h3>
                        <p className="services__modal-description">Services with more than 1year of experience  providing
                        quality work to clients and companies
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Building and maintaining the e-commerce website or web application
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implementing and customizing e-commerce platforms such as Magento, Shopify, WooCommerce, etc

                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integrating with payment gateway providers such as Stripe, PayPal, etc
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implementing and integrating with inventory management systems
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Content management <br/>system (CMS) </h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState===3? "services__modal active-modal" :"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close"onClick={()=>toggleTab(0)}></i>
                        <h3 className="services__modal-title">Content Management system</h3>
                        <p className="services__modal-description">Services with more than 1 year of experience  providing
                        quality work to clients and companies
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Building and maintaining the CMS website or web application
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Customizing popular CMS platforms such as WordPress, Joomla, Drupal, etc
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Developing and implementing themes and templates for the CMS

                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implementing and integrating with various plugins and add-ons to extend the functionality of the CMS
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service