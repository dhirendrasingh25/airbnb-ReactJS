import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import './App.css'
import data from './data'

function App() {
  const cards=data.map(item =>{
    return(
      <Card
        img={item.img}
        rate={item.rate}
        cont={item.cont}
        place={item.place}
        title={item.title}
        price={item.price}
       
      />
    )
  })
  return (
    <div >
    <Header />
    <HeaderJoint />
    <section className='cards-list' id='bgc'>
    {cards}
    </section>
   
    </div>
  )
}
function Header() {
  return (
    <nav className='header-logo'>
      <img src="airbnb.svg" />
    </nav>
  )
}
function HeaderJoint() {
  return (
    <div id='h11'>
      <nav className='header-joint'>
      <img src="group.svg" />
      
    </nav>
    <h1 className='h1'>Online Experiences</h1>
    <h2 className='h2'>Join unique interactive activities led by one-of-a-kind hosts, All without leaving home.</h2>
    </div>
    
    
  )
}
export default App

// const firstName = "Joe"
//     const lastName = "Schmoe"
//     /**
//      * Challenge: finish off the h1 below so it says
//      * "Hello Joe Schmoe!"
//      */
//     return (
//         <h1>Hello {firstName} {lastName}!</h1>
// const date = new Date()
//     const hours = date.getHours()
//     let timeOfDay
    
//     if (hours < 12) {
//         timeOfDay = "morning"
//     } else if (hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else {
//         timeOfDay = "night"
//     }
    
//     return (
//         <h1>Good afternoon!</h1>
//     )
/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const squares = nums.map(function(num) {
//     return num * num
// })

// // console.log(squares)



// /*
// Challenge 2:
// Given an array of strings, return an array where 
// the first letter of each string is capitalized
// */

// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here
// const capitalized = names.map(name => (
//     name[0].toUpperCase() + name.slice(1))
// )

// console.log(capitalized)



// /*
// Challenge 3:
// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.

// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// */

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here

// const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

// console.log(paragraphs)