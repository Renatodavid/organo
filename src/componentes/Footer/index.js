import React from "react";
import "./Footer.css";

export default function index() {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/image/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/image/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/image/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/image/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Renato David</p>
      </section>
    </footer>
  );
}
