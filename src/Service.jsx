import React from 'react';
import Card from './Card';
import CData from './CData';

const Service = () => {
  return (
    <>
    <br /><br /><br /><h3 className="text-center">Services</h3><br />
    <div className="container mb-5">
        <div className="col-12 mx-auto">
          <div className="row">
                {
                  CData.map((val, ind) =>{
                    return <Card key={ind}
                    imgsrc ={val.imgsrc}
                    title={val.title}
                    />
                  })
                }
          </div>
        </div>
    </div>
    <br /> <hr />
    </>
  );
}

export default Service;
