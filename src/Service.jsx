import React from 'react'
import Common from './Common';


import {ServiceData} from './Data'
import Card from './Card'


export default function Service() {
  return (
<>
    <Common Name="Services" title="See what we do best"/>


    <div className="container-fluid md-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="row gy-5">
            {
              ServiceData.map((t=>(
                <Card
                   image={t.image}
                   heading={t.heading}
                   paragraph={t.Paragraph}
                   button={t.Button}
                
                />
              )))
            }

          </div>
        </div>
      </div>
    </div>
  
   

</>
  )
}
