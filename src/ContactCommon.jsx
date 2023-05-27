import React from 'react'

export default function ContactCommon() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 mx-auto my-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row g-5">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Last name" />
                            </div>
                            </div>
                            <div className="col-12 mt-5">
                            <input type="text" className="form-control" id="inputAddress" placeholder="Subject *" />
                            </div>

                                <div className="form-floating mt-5">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 200}} defaultValue={""} />
                                <label htmlFor="floatingTextarea2">Comments</label>
                                </div>

                                <button type="button" class="btn btn-primary p-3 mt-5 rounded-pill btn-lg">Large button</button>


                        </div>
                        <div className="col-lg-6 gy-5 ps-5">
                            <img src="https://preview.colorlib.com/theme/sierra/img/icon/title-icon.png" alt="" />
                            <h4>SAY HELLO</h4>
                            <h1>Get in touch, send us an e-mail or call us</h1>
                            <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum.</p>
                            <h4 className='text-primary' >Call us now</h4>
                            <h4>+997 984232389893</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
