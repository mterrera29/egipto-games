import correct from '../Images/correct2.png';
import incorrect from '../Images/incorrect2.png';

const ImageContainer = ({ isCorrect, notCorrect, name, image }) => {
  const headerName = name.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
    letra.toUpperCase()
  );
  return (
    <section className='imageContainer'>
      <section className='image'>
        {isCorrect && <img className='respuestaIcon' src={correct} alt='' />}
        {notCorrect && <img className='respuestaIcon' src={incorrect} alt='' />}
        <img className='imageQuestion' src={image} alt='' />
        <header className='answerHeader'>
          <h3 className='answerImg'>{headerName}</h3>
        </header>
      </section>
    </section>
  );
};

export default ImageContainer;
