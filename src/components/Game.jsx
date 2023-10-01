import { useState, useEffect } from 'react';
import '../App.css';
import '../loader.css';
import { DATA } from '../DATA';
import ModalWin from '../components/ModalWin';
import ImageContainer from './ImageContainer';
import MenuInfo from './MenuInfo';
import Questions from './Questions';
import NavQuestions from './NavQuestions';
import icon1 from '../Images/ojo-de-ra.png';
import icon2 from '../Images/ladron-y-mayal.png';
function Game() {
  const [shuffledConsignas, setShuffledConsignas] = useState(DATA.consignas);
  const [name, setName] = useState('');
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const [notCorrect, setNotCorrect] = useState(false);
  const [puntos, setPuntos] = useState(0);
  const [win, setWin] = useState(false);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    setShuffledConsignas(DATA.consignas.sort(() => Math.random() - 0.5));
  }, []);

  const consignasData = shuffledConsignas;

  const cantidadPreg = 20;
  ///const cantidadPreg = 3;
  const question = consignasData[index].question;
  const image = consignasData[index].img;
  const answer = consignasData[index].answer;

  /* function quitarAcentos(palabraConAcentos) {
    return palabraConAcentos.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } */

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [index]);

  useEffect(() => {
    if (index === cantidadPreg) {
      setWin(true);
    }
  }, [index, cantidadPreg]);

  const passQuestion = () => {
    setNotCorrect(true);
  };

  const handleNext = () => {
    index === cantidadPreg ? setWin(true) : nextQuestion();
  };

  const nextQuestion = () => {
    setIndex(index + 1);
    setIsCorrect(false);
    setNotCorrect(false);
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const reloaderGame = () => {
    setIndex(0);
    setWin(false);
    setPuntos(0);
    setIsReload((prevState) => !prevState);
  };

  useEffect(() => {
    if (name.toLowerCase().trim() === answer) {
      setIsCorrect(true);
      setPuntos((prevPuntos) => prevPuntos + 1);
    } else {
      setIsCorrect(false);
    }
  }, [name, index, answer]);

  return (
    <>
      <header className='header animate__animated animate__fadeInDown'>
        <h1>
          <img
            style={{ width: '30px', paddingRight: '3px' }}
            src={icon1}
            alt=''
          />
          {DATA.title}

          <img
            style={{ width: '30px', paddingLeft: '3px' }}
            src={icon2}
            alt=''
          />
        </h1>
      </header>
      <main className='mainGame'>
        <MenuInfo
          index={index}
          cantidadPreg={cantidadPreg}
          win={win}
          isReload={isReload}
        />
        {isLoading ? (
          <span className='loader'></span>
        ) : win ? (
          <ModalWin
            puntos={puntos}
            preguntasCant={cantidadPreg}
            reloaderGame={reloaderGame}
          />
        ) : (
          <>
            <ImageContainer
              isCorrect={isCorrect}
              notCorrect={notCorrect}
              name={name}
              image={image}
            />
            <section className='background'>
              <Questions
                question={question}
                isCorrect={isCorrect}
                notCorrect={notCorrect}
                handleSubmit={handleSubmit}
                setName={setName}
                name={name}
                answer={answer}
              />
              <NavQuestions
                isCorrect={isCorrect}
                notCorrect={notCorrect}
                passQuestion={passQuestion}
                handleNext={handleNext}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default Game;
