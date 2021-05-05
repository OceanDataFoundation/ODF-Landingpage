import React, { useState } from 'react'
import styled from 'styled-components'

import { InputCheckbox } from '../../components/input-checkbox/InputCheckbox'
import { TextInput } from '../../components/input-text/inputText'
import { Label } from '../../components/label/label'
// Components
import LinkButton from '../../components/link-button/LinkButton'

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
        Name{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }} aria-hidden="true">
          *
        </span>
        <TextInput
          placeholder="Your Name"
          type="text"
          name="name"
          id="name"
          required
        />
      </Label>

      <Label htmlFor="email">
        Email{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }} aria-hidden="true">
          *
        </span>
        <TextInput
          placeholder="your@email.com"
          type="email"
          name="email"
          id="email"
          required
        />
      </Label>

      <InputCheckbox checked={checked} onChange={handleChange} />

      <div
        style={{
          width: '100%',
          display: checked ? 'inline-flex' : 'none',
          flexDirection: 'column',
        }}>
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
          Expertise{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }} aria-hidden="true">
            *
          </span>
          <TextInput
            placeholder="Data Ingestion, Ocean Science, SDKs, UX/UI"
            type="text"
            name="expertise"
            id="expertise"
            required={checked && true}
          />
        </Label>
      </div>

      <Label htmlFor="subject">
        Subject{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }} aria-hidden="true">
          *
        </span>
        <TextInput
          placeholder="Hello, Ocean Data Platform team!"
          type="text"
          name="subject"
          id="subject"
          required
        />
      </Label>

      <Label htmlFor="message">
        Message{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }} aria-hidden="true">
          *
        </span>
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

      <LinkButton as="button" type="submit">
        Send
      </LinkButton>
    </Form>
  )
}

// Style
const Form = styled.form`
  width: 100%;
`

export default ContactForm

