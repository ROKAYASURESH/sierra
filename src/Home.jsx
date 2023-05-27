import React from 'react'
import ContactCommon from './ContactCommon'
import Card from './Card';
import {Data} from "./Data"
export default function Home() {
  return (
    <>
    <section id='header' className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-11 mx-auto ">
                    <div className="row">
                        <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column fix">
                            <h1>Choose a powerful design <strong className="brand-name">for your business</strong></h1>
                            <h4>Get your Freebi Templete Now!!</h4>

                            <div className="mt-3">
                                <a href="#" className='btn'>Discover</a>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 animated">
                            <img src="https://preview.colorlib.com/theme/sierra/img/home-slider/slider-m-1.png" alt="" className='img-fluid animated' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      
        
        <div className="container-fluid md-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            {
              Data.map((r)=>(
                <Card
                   image={r.image}
                   heading={r.heading}
                   paragraph={r.Paragraph}
                   button={r.Button}
                
                />
              ))
            }

          </div>
        </div>
      </div>
    </div>

    <ContactCommon/>
    </>
  )
}
