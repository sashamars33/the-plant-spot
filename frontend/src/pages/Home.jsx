import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
        <section className="">
            <h1>Welcome to The Plant Spot!</h1>
            <p>A hub for all things botanical. From bryophytes to angiosperms and house plants to bonsai, find advice inspiration for any plant related interest.</p>
            <p>Share you plants and personal advice and create your own plant parent community!</p>
        </section>

        <Link to='/about'>What is The Plant Spot?</Link>

        <section className="">
            <h2>Popular Posts</h2>
        </section>
    </>
  )
}

export default Home