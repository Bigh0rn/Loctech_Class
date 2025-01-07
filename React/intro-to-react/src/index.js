import React from 'react'
import ReactDOM from 'react-dom/client'
import Image from './Images/frontend_technologies.jpg'
import DejiImg from './Images/Deji.png'
const headerStyles = {
    backgroundColor: '#f0f',
    fontFamily: 'Montserrat',
    padding: 10,
    lineHeight: 1,
}
const h1style = {
    fontSize: 70,
    fontWeight: 300,
  }
  const h2style = {
        fontWeight: 300,
      }
const header = (
    <header style={headerStyles}>
      <div className='header-wrapper'>
        <h1 style={h1style}>Learning React</h1>
        <h2 style={h2style}>Getting Started React</h2>
        <h3 style={h2style}>JavaScript Library</h3>
        <p>Rotifa Deji</p>
        <small>Dec 17, 2024</small>
      </div>
    </header>
  )
  const mainstyle = {
    color: '#555',
    padding: 10,
    paddingBottom: 60,
  }
  const ulstyle = {
    marginLeft: 15,
  }

 const ulListyle = {
    listStyle: 'none',
  }
  const main = (
    <main style={mainstyle}>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul style={ulstyle}>
          <li style={ulListyle}>HTML</li>
          <li style={ulListyle}>CSS</li>
          <li style={ulListyle}> JavaScript</li>
        </ul>
      </div>
    </main>
  )
  const frontEndIcons = (
    <div style={{marginBottom: 35}}>
        <img src= {Image} alt='Frontend Icons' style={{maxWidth: '100%'}}></img>
    </div>
  )
  const skillsStyle = {
    backgroundColor: '#00ccff', borderRadius:'12%',
    padding: 5,
    margin: 5,
    color: 'white',
  }
  const userCard = (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap:'1%'}}>
    <div style={{marginBottom: 35, padding: 10, border:10, backgroundColor: '#D1C7B7', borderRadius: '5%'}}>
      <img src={DejiImg} alt='Rotifa Deji' style={{
        borderRadius: '50%',
        width: '20vw',
        height: '20vw',
        }}>
      </img>
      <p><strong style={{paddingLeft: 20}}>ROTIFA DEJI </strong><span style={{ backgroundColor: '#00ccff', color:'white', fontSize: '12px', borderRadius:'50%'}}>✓</span></p>
      <p style={{paddingLeft: 20, fontWeight: 300}}>Developer, Nigeria</p>
      <p style={{fontWeight: 700, paddingLeft: 20}}>SKILLS</p>
      <div style={{display: 'flex', paddingLeft: 25}}>
        <small>
      <span style={skillsStyle}>HTML</span>
      <span style={skillsStyle}>CSS</span>
      <span style={skillsStyle}>JS</span>
      <span style={skillsStyle}>React</span>
      <span style={skillsStyle}>Git</span>
      </small>
      </div>
      <p><small style={{paddingLeft: 20}}>🕑	Joined December, 2024</small></p>
    </div>
    <div style={{marginBottom: 35, padding: 10, border:10, backgroundColor: '#D1C7B7', borderRadius: '5%', alignContent: 'center', textAlign: 'center'}}>
        <h3>SUBSCRIBE</h3>
        <p><small>Sign up with your email address to recieve news and updates</small></p>
        <input type='Name' placeholder='First Name' style={{borderRadius: 5, height: 14, margin: 5}}></input>
        <input type='Name' placeholder='Last Name' style={{borderRadius: 5, margin: 5}} ></input>
        <input type='email' placeholder='email address' style={{borderRadius: 5, margin: 5}}></input>
        <button type='button' placeholder='Subscribe' style={{display: 'block', placeSelf: 'center', width: 175, borderRadius: 5, margin: 5, backgroundColor: '#FF6347', color: 'white'}}>Subscribe</button>
    </div>
    </div>
  )
  const footerstyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 40,
    background: '#f0f',
    fontWeight: 100,
    textAlign: 'right',
  }
const BarChart = () => {
  const tenHighestPopulation = [
    { country: "World", population: 8197956105 },
    { country: "India", population: 1450935791 },
    { country: "China", population: 1419321278 },
    { country: "United States", population: 345426571 },
    { country: "Indonesia", population: 283487931 },
    { country: "Pakistan", population: 251269164 },
    { country: "Nigeria", population: 232679478 },
    { country: "Brazil", population: 211998573 },
    { country: "Bangladesh", population: 173562364 },
    { country: "Russian Federation", population: 144820423 },
    { country: "Ethiopia", population: 132059767 },
  ];

  const maxPopulation = tenHighestPopulation[0].population;

  return (
    <div style={{fontFamily: "Arial, sans-serif", marginBottom: 40 }}>
      <h2>Ten Highest Populations</h2>
      <div>
        {tenHighestPopulation.map(({ country, population }) => (
          <div
            key={country}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap:'1%',margin: '1%'
            }}
          >
            <div style={{fontWeight: 'lighter'}}>{country}</div>
            <div
              style={{
                height: "20px",
                width: `${(population / maxPopulation) * 100}%`,
                backgroundColor: "#4caf50",
              }}></div>
            <div>{population.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
const footer = (
    <footer style={footerstyle}>
      <div className='footer-wrapper'>
        <p>Rotifa Deji 2024©</p>
      </div>
    </footer>
  )  
const rootElement = document.getElementById('root')
const app = <div>
    {header}
    {main}
    {footer}
    {frontEndIcons}
    {userCard}
    <BarChart/>
</div>
const root = ReactDOM.createRoot(rootElement)
root.render(app)