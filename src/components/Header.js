import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>YOURGOLF</div>
        <nav>
          <ul>
            <li>
              <a href='/colors'>our colors</a>
            </li>
            <li>
              <a href='/customize'>customize</a>
            </li>
            <li>
              <a href='/cta'>testimonials</a>
            </li>
            <li className='btn'>
              <a href='/colors'>create</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}