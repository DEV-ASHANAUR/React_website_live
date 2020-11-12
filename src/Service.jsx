import React from 'react';
// import web from './img/service.jpg';
import Sdata from './Sdata';
import Card from './Card';
const Service = () => {
  return (
      <>
        <div className="my-5 section-title">
          <h2 className="text-center"> Our Service </h2>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                      {
                        Sdata.map((val,index)=>{
                          return (
                            <>
                              <Card 
                              key={index}
                              id={val.id}
                              title={val.title}
                              imgsrc={val.imgsrc}
                              />
                            </>
                          );
                        })
                      }
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}
export default Service;