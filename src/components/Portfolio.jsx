import React from 'react'
import "./portfolio.css"


import {data} from "../Db/data"

function Portfolio() {
 
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <h5>My recent works</h5>

      <div className="container container_portfolio">
        {data.map(card => 
          <article className="portfolio_card" key={card.id}>
            <div className="portfolio_card-img">
              <img src={card.img} alt="" />
            </div>
            <div className="card_info">
              <h3>{card.title}</h3>
            </div>
              <div className="card_btn">
                <a href={card.linkCode} className="btn_1" target="_blank">{card.linkCodeName}</a>
                <a href={card.linkLive} className="btn_2" target="_blank">Live Demo</a>
              </div>
          </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio