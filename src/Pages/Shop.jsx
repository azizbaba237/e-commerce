import Hero from '../Compoments/Hero/Hero'
import NewCollections from '../Compoments/NewCollection/NewCollections'
import NewsLetter from '../Compoments/NewsLetter/NewsLetter'
import Offers from '../Compoments/Offers/Offers'
import Popular from '../Compoments/Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop