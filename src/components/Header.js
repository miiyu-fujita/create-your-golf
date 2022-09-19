import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>YOURGOLF</div>
        <nav>
          <ul>
            <li>
              <a href='#colors'>our colors</a>
            </li>
            <li>
              <a href='/'>customize</a>
            </li>
            <li>
              <a href='/'>testimonials</a>
            </li>
            <li className='btn'>
              <a href='/'>create</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}