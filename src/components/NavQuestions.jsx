const NavQuestions = ({ isCorrect, notCorrect, passQuestion, handleNext }) => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
      }}
    >
      {!isCorrect && !notCorrect && (
        <div className='buttonPass' onClick={() => passQuestion()}>
          <h3>Pasar</h3>
        </div>
      )}
      {(isCorrect || notCorrect) && (
        <div className='buttonNext' onClick={handleNext}>
          <h3>{'Siguiente >'}</h3>
        </div>
      )}
    </section>
  );
};

export default NavQuestions;
