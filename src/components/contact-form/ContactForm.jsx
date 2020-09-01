import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import LinkButton from '../../components/link-button/LinkButton'
import { TextInput } from '../../components/input-text/inputText'
import { InputCheckbox } from '../../components/input-checkbox/InputCheckbox'
import { Label } from '../../components/label/label'

// Style
const Form = styled.form`
  width: 100%;
`

const ContactForm = () => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked(!checked)

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
        Name <small>(Required)</small>
        <TextInput
          placeholder="Your Name"
          type="text"
          name="name"
          id="name"
          required
        />
      </Label>

      <Label htmlFor="email">
        Email <small>(Required)</small>
        <TextInput
          placeholder="your@email.com"
          type="email"
          name="email"
          id="email"
          required
        />
      </Label>

      <InputCheckbox checked={checked} onChange={handleChange} />

      {checked && (
        <>
          <Label>
            Profession
            <TextInput
              placeholder="Researcher, student, CEO, unemployed"
              type="text"
              name="profession"
              id="profession"
            />
          </Label>

          <Label>
            Organization
            <TextInput
              placeholder="University, Industry, Government, Citizen Science etc."
              type="text"
              name="organization"
              id="organization"
            />
          </Label>

          <Label>
            Expertise <small>(Required)</small>
            <TextInput
              placeholder="Data Ingestion, Ocean Science, SDKs, UX/UI"
              type="text"
              name="expertise"
              id="expertise"
              required
            />
          </Label>
        </>
      )}

      <Label htmlFor="subject">
        Subject <small>(Required)</small>
        <TextInput
          placeholder="Hello, Ocean Data Platform team!"
          type="text"
          name="subject"
          id="subject"
          required
        />
      </Label>

      <Label htmlFor="message">
        Message <small>(Required)</small>
        <TextInput
          as="textarea"
          id="message"
          placeholder={
            checked
              ? 'Your message and early adopter request'
              : 'Your shoutout for us'
          }
          name="message"
          rows="10"
          required
        />
      </Label>

      <LinkButton as="button" type="submit" showArrow>
        Send
      </LinkButton>
    </Form>
  )
}

export default ContactForm
