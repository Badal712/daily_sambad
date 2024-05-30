import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../components/Logo/Daily Sambad Light.png";
import LogoDark from "../components/Logo/Daily Sambad Dark.jpg";
import GitLight from "../components/Logo/github Light.png";
import GitDark from "../components/Logo/github Dark.png";
import LiDark from "../components/Logo/linkedin Dark.png";
import LiLight from "../components/Logo/linkedin Light.png";
import XLight from "../components/Logo/twitter Light.png";
import XDark from "../components/Logo/twitter Dark.png";

export class footer extends Component {
  render() {
    const { mode } = this.props;
    const logoSrc = mode === "light" ? LogoDark : LogoLight;
    const gitSrc = mode === "light" ? GitLight : GitDark;
    const liSrc = mode === "light" ? LiLight : LiDark;
    const xSrc = mode === "light" ? XLight : XDark;
    return (
      <div>
        <footer
          className={`bd-footer py-5 mt-5 bg-${
            this.props.mode === "light" ? "dark" : "light"
          }`}
          style={{ color: this.props.mode === "light" ? "white" : "black" }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3 mb-3">
                <Link
                  className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
                  href="/"
                  aria-label="Bootstrap"
                >
                  <img
                    src={logoSrc}
                    width="40"
                    height="32"
                    className="d-block me-2"
                    alt="Daily_Sambad"
                  />
                  <span
                    className="fs-5"
                    style={{
                      color: this.props.mode === "light" ? "white" : "black",
                    }}
                  >
                    Daily Sambad
                  </span>
                </Link>
                <p
                  className="info"
                  style={{
                    color: this.props.mode === "light" ? "white" : "black",
                  }}
                >
                  Daily Sambad is committed to providing essential news,
                  analysis, and inspiring stories to shape perspectives and
                  drive change, ensuring you stay informed about important
                  events.
                </p>
              </div>
              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5>Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/docs/5.0/">Docs</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/docs/5.0/examples/">Examples</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://themes.getbootstrap.com/">Themes</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://blog.getbootstrap.com/">Blog</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="https://cottonbureau.com/people/bootstrap">
                      Swag Store
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between py-4 my-4 border-top">
                <p>Copyright © 2024 Daily Sambad. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <Link
                      className="link-dark"
                      href="https://github.com/Badal712/daily_sambad"
                    >
                      <img src={gitSrc} alt="Github" />
                    </Link>
                  </li>
                  <li className="ms-3">
                    <Link
                      className="link-dark"
                      href="https://www.linkedin.com/in/badal-sahoo-a45b73231/"
                    >
                      <img src={liSrc} alt="Linkedin" />
                    </Link>
                  </li>
                  <li className="ms-3">
                    <Link
                      className="link-dark"
                      href="https://x.com/BadalSa38607542?t=hjP7EbsLhfToGay0-6gt0g&s=08"
                    >
                      <img src={xSrc} alt="X" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
