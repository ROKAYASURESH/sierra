import React from 'react'

export default function Common(props) {
  return (
   <>
   <div className="container-fluid">
    <div className="row">
        <div className="col-lg-10 mx-auto mt-5 ">
          <div className="col-lg-5 all-home ">
            <h1>{props.Name}</h1>
            <h4>{props.title}</h4>
            <div className=" col-md-4 col line"></div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
