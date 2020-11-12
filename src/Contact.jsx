import React, { useState } from 'react';

const Contact = () => {
  const [data ,setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    msg:'',
  });
  const InputEvent = (event) =>{
    const{name,value} = event.target; 
    setData((preVal)=>{
      return {
        ...preVal,
        [name] : value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My Name is ${data.fullName}, My phone Number is ${data.phone}, My email is ${data.email}, Here is what I want to say ${data.msg}`);
    setData({
      fullName: '',
      phone: '',
      email: '',
      msg:'',
    });
  }
  return (
      <>
        <div className="my-5 section-title">
          <h2 className="text-center"> Contact Us </h2>
        </div>
        <div className="container contact_div mb-5">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Ex.Jhon" />
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">Your Phone</label>
                  <input type="number" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Ex.01800000000" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">Message</label>
                  <textarea className="form-control" name="msg" value={data.msg} onChange={InputEvent} id="message" rows="3"></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-outline-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
  );
}
export default Contact;