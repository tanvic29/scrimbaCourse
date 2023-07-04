import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/*import Navbar from './components/Navbar'
import Main from './components/Main'
import Card from './components/Cards'*/
import Joke from './Jokes'
import Header from './components/Header'
import Form from './components/Form'
export default function App() {
  // const cards=Joke.map(item =>{
  //   return(
  //     <Card
  //       img={item.img}
  //       rating={item.rating}
  //       reviewCnt={item.reviewCnt}
  //       country={item.country}
  //       title={item.title}
  //       price={item.price}/>
  //   )
  // })
  // return(
  //   <div>
  //     <Navbar/>
  //     <Main/>
  //    <section className='cards--list'>{cards}</section>
      
  //   </div>
  // )
  return  <div>
    <Header/>
    <Form/>
    
  </div>
}


// export default function App(props)
// {
//   const [squares,setsquares]=React.useState(boxes)

// const styles={
//   backgroundColor: props.darkMode ? "#22222" : "#cccccc"
// }
// const squareElements=square.map(square => (
//   <div style={styles} className='box' key={square.id}></div>
// ))
// return(
//   <main>
//     {squareElements}
//   </main>
// )
// }