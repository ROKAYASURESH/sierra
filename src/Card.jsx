import React from 'react'

export default function Card(props) {
  return (
    <>

                <div className="col-lg-4 mx-auto ">
                   <div className="card">
                      <img src={props.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{props.heading}</h5>
                        <p className="card-text">{props. paragraph}</p>
                        <a href="#" className="btn">{props.button}</a>
                      </div>
                    </div>
                </div>
    </>
  )
}
