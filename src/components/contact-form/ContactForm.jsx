import React from 'react'
import styled from 'styled-components'

// Utils
import { space } from '../../utils/configs/confSpace'
import { typeScale } from '../../utils/configs/confTypeScale'
import { borderRadius } from '../../utils/tokens/tokenBorderRadius'
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Style
const Form = styled.form`
  width: 100%;

  label {
    display: block;
    padding-bottom: ${space[6]};
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid ${colorNeutral.NEUTRAL_TINT_55};
    border-radius: ${borderRadius.BORDER_RADIUS_2};
    padding: ${space[3]};

    ${typeScale.TEXT_PRESET_2};

    :focus {
      border-color: ${colorBrandGreen.GREEN_TINT_50};
    }
  }

  button {
    padding: ${space[3]};
    border-radius: ${borderRadius.BORDER_RADIUS_2};
    border-style: hidden;
    background: ${colorBrandGreen.GREEN_TINT_80};

    text-transform: uppercase;
    font-weight: 600;
  }
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

      <label>
        <input placeholder="Name" type="text" name="name" />
      </label>

      <label>
        <input placeholder="Email Address" type="email" name="email" />
      </label>

      <label>
        <input placeholder="Subject" type="text" name="subject" />
      </label>

      <label>
        <textarea placeholder="Message" name="message" rows="10" />
      </label>

      <button type="submit">Send</button>
    </Form>
  )
}

export default ContactForm
