import { Link } from 'react-router-dom';
import './MainGame.css';
import { DATA } from '../DATA';

const MainGame = () => {
  return (
    <>
      <header className='mainTitle animate__animated animate__fadeInDown'>
        <h1>{DATA.title}</h1>
      </header>
      <main className='mainGame'>
        <section className='mainContainer'>
          <Link to='/game' className='linkWithoutStyles'>
            <div className='btnMain'>Iniciar Juego!</div>
          </Link>
          <Link to='/points' className='linkWithoutStyles'>
            <div className='btnMain'>Puntajes</div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default MainGame;
