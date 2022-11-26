import React from 'react'
import "./portfolio.css"
import IMG1 from "../assets/quizz.png"
import IMG2 from "../assets/ecommerce.png"
import IMG3 from "../assets/workout_body.png"
import IMG4 from "../assets/tenzies.png"
import IMG5 from "../assets/portfolio.png"
import IMG6 from "../assets/chat_app.png"

function Portfolio() {
  const data = [
    {id: 0, img: IMG1, linkCode: "https://github.com/kindjaev/quizz", linkCodeName: "GitHub", linkLive: "https://quizz-kindjaev.vercel.app", title: "Quizzical"},
    {id: 1, img: IMG2, linkCode: "https://github.com/kindjaev/ecommerce_sanity_stripe", linkCodeName: "GitHub", linkLive: "https://ecommerce-sanity-stripe-kindjaev.vercel.app", title: "Ecommerce Shop"},
    {id: 2, img: IMG3, linkCode: "https://github.com/kindjaev/MERN-frontend", linkCodeName: "GitHub", linkLive: "https://mern-frontend-kindjaev.vercel.app/login", title: "Workout Body"},
    {id: 3, img: IMG4, linkCode: "https://github.com/kindjaev/tenzies", linkCodeName: "GitHub", linkLive: "https://tenzies-dony-kindjaev.vercel.app/", title: "Tenzies"},
    {id: 4, img: IMG5, linkCode: "https://github.com/kindjaev/modern_portfolio", linkCodeName: "GitHub", linkLive: "https://modern-portfolio-kindjaev.vercel.app", title: "Modern Portfolio"},
    {id: 5, img: IMG6, linkCode: "https://github.com/kindjaev/chat-app", linkCodeName: "GitHub", linkLive: "https://chat-app-kindjaev.vercel.app", title: "Chat App"},
  ]
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