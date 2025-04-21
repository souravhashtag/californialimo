import React from 'react'
import Ourvehicles from '../component/Home/Ourvehicles'

const ExecutiveSprinters = () => {
  return (
    <div>
    <header className="page-header" data-stellar-background-ratio="0.8">
        <div className="container">
            <h1>Our Vehicles</h1>
        </div>
    </header>
    <section className="content-section">
        <div className="container">
            <Ourvehicles />
        </div>
    </section>
    </div>
  )
}

export default ExecutiveSprinters
