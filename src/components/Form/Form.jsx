import "./FormStyle.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" />
            <label htmlFor="name">Email</label>
            <input id="name" type="text" />
            <label htmlFor="name">Subject</label>
            <input id="name" type="text" />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" placeholder="Type Your Message Here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
