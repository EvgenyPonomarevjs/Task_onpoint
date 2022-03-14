import Header from './components/Header/Header'
import Box1 from './components/Box1/Box1';
import Box2 from './components/Box2/Box2';
import Box3 from './components/Box3/Box3';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel'
import s from './index.css'

function App() {
  return (
    <div className={s.wrap}>
      <div >
        <Header className={s.wrap2}/>
          <Carousel>
            <div className={s.item}><Box1/></div>
            <div className={s.item}><Box2/></div>
            <div className={s.item}><Box3/></div>
          </Carousel>
      <Footer />
      </div>

    </div>
  );
}

export default App;
