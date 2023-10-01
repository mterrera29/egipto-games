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
          <h4>Pasar</h4>
        </div>
      )}
      {(isCorrect || notCorrect) && (
        <div className='buttonNext' onClick={handleNext}>
          <h4>{'Siguiente>'}</h4>
        </div>
      )}
    </section>
  );
};

export default NavQuestions;
