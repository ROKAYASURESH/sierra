import React from 'react'
import Common from './Common'

export default function About() {
  return (
    <>
        <Common Name="About US" title="Get to know us"/>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 ms-auto mt-5">
               <div className="row">
                <div className="col-lg-6 mt-5">
                    <img src="https://preview.colorlib.com/theme/sierra/img/icon/title-icon.png" alt="" />
                    <h4>DISCOVER THE FEATURES</h4>
                    <h1>We don’t hide, we stand tall in front of chalenge</h1>
                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices.</p>
                    <div className="btn"><img src="https://preview.colorlib.com/theme/sierra/img/icon/video-icon.png" alt="" /> See How we work</div>
                </div>

                <div className="col-lg-6 mt-5 shadow">
                  <img  src="https://preview.colorlib.com/theme/sierra/img/popup-photo.jpg" alt="" width="100%" />
                </div>
               </div>
            </div>
          </div>
        </div>
    </>
  )
}
