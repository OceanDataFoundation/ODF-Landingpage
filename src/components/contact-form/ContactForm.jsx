import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import axios from 'axios'
import styled from 'styled-components'

// Style

const Form = styled.form`
  width: 100%;

  input,
  textarea {
    width: 100%;
  }
`

const encode = () => data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const [state, setState] = useState({})

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    axios
      .post('/', {
        body: encode({ 'form-name': form.getAttribute('name'), ...state }),
      })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <Form
      name="contact"
      method="post"
      action="/contact/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          <input
            placeholder="Email Address"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          <textarea
            placeholder="Message"
            name="message"
            onChange={handleChange}
            rows="15"
          />
        </label>
      </p>
      <button type="submit">Send</button>
    </Form>
  )
}

export default ContactForm
