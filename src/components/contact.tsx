import * as React from "react";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export default class Contact extends React.Component {  
    render() {
    return (
      <div>
        <div
          css={css`
            margin: 0 auto;
            max-width: 500;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
            background-color: #434343;
            text-align: center;
          `}
        >
          <h1>Contact</h1>

          <h3>Get in touch!</h3>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
          {/* The hidden field is used for spam filtering */}
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" />
            </label>
          </p>
            <p>
              <label>
                <input
                  css={css`
                    width: 300px;
                    min-width: 38%;
                    max-width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                  `}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </label>
            </p>
            <p>
              <label>
                <input
                  css={css`
                    width: 300px;
                    min-width: 38%;
                    max-width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                  `}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </label>
            </p>
            <p>
              <label>
                <textarea
                  css={css`
                    width: 300px;
                    min-width: 38%;
                    max-width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                    height: 200px;
                  `}
                  name="message"
                  placeholder="Your Message"
                />
              </label>
            </p>
            <p>
              <button type="submit"
              css={css`
              width: 8em;
              padding: 14px 20px;
              margin: 8px 0;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              border-radius: 5em;
              background:#1AAB8A;
              font-size: 1.2rem;
              font-weight: 700;
              `}
              >SUBMIT</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
