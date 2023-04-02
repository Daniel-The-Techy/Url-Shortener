import React from 'react'

function Navbar() {
  return (
    <>
  <div className='container'>
      <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand h2" href="#">Shortlinks</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link Auth" href="#">login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link Auth" href="#">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
    </>
  )
}

export default Navbar
