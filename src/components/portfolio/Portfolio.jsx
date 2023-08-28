import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'
import shapeOne from '../../assets/shape-1.png';
import './Portfolio.css'

const allNavlist = ['all' , ...new Set(projects.map((project) => project.category))]


const Portfolio = () => {
    const [projectItems, setMenuItems] = useState(projects)
    const [navList, setCategories] = useState(allNavlist)

    const filterItems = (category) => {
      if(category === 'all') {
        setMenuItems(projects)
        return;
      }      
      const newProjectItems = projects.filter(
        (item) => item.category === category
        )

      setMenuItems(newProjectItems)
    }
  
    return (
    <>
      <section className='portfolio section' id='projects'>
      <h2 className="section__title text-cs">
          Portfolio
        </h2>
        <p className="section__subtitle">
          My <span>Projects</span>
        </p>

        <List list={navList} filterItems={filterItems}/>

        <div className="portfolio__container container grid">
            <AnimatePresence initial={false}>
            <Items projectItems={projectItems}/>
            </AnimatePresence>
        </div>

        <div className="section__deco deco__right">
        <img src={shapeOne} className='shape' alt="" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Portfolio</span>
       </div>
      </section>
    </>
  )
}

export default Portfolio
