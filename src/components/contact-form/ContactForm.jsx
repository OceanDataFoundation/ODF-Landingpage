import React from 'react'
import styled from 'styled-components'

// Components
import LinkButton from '../../components/link-button/LinkButton'
import { TextInput } from '../../components/input-text/inputText'
import { Label } from '../../components/label/label'

// Style
const Form = styled.form`
  width: 100%;
`

const ContactForm = () => {
  return (
    <Form
      name="contact"
      method="post"
      action="/contact/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <Label htmlFor="name">
        Name
        <TextInput placeholder="Your Name" type="text" name="name" id="name" />
      </Label>

      <Label htmlFor="email">
        Email
        <TextInput
          placeholder="you@email.com"
          type="email"
          name="email"
          id="email"
        />
      </Label>

      <Label htmlFor="subject">
        Subject
        <TextInput
          placeholder="Hello Ocean Data Platform"
          type="text"
          name="subject"
          id="subject"
        />
      </Label>

      <Label htmlFor="message">
        Message
        <TextInput
          as="textarea"
          id="message"
          placeholder="Hello..."
          name="message"
          rows="10"
        />
      </Label>

      <LinkButton as="button" type="submit" showArrow>
        Send
      </LinkButton>
    </Form>
  )
}

export default ContactForm
