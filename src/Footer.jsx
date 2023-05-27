import React from 'react'

export default function Footer() {
  return (
   <>
   <div className="container-fluid">
    <div className="row">
        <div className="col-lg-12 bg-primary ">
            <div className="col-lg-10 mx-auto">
                <div className="row g-5">
                    <div className="col-lg-4 ">
                        <img src="https://preview.colorlib.com/theme/sierra/img/footer-logo.png" alt="" />
                        <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum.</p>

                    </div>
                    <div className="col-lg-4  ">
                        <h1>Instagram</h1>
                        <img src="https://preview.colorlib.com/theme/sierra/img/instagram/ins-5.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/sierra/img/instagram/ins-5.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/sierra/img/instagram/ins-5.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/sierra/img/instagram/ins-5.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/sierra/img/instagram/ins-5.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/sierra/img/instagram/ins-5.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 ">
                        <h2>Subscribe to newsletter</h2>
                        <form action="">
                            <input type="text" placeholder='Your email address here' />
                            
                        </form>
                        <button className='btn bg-danger'>Suscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}
