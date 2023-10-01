import { useEffect, useState } from 'react';

const Questions = ({
  question,
  isCorrect,
  notCorrect,
  handleSubmit,
  setName,
  name,
  answer,
}) => {
  const [emoji, setEmoji] = useState('none');
  const [faltaAcento, setFaltaAcento] = useState(false);

  const quitarAcentos = (palabraConAcentos) => {
    return palabraConAcentos.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  useEffect(() => {
    if (!name) {
      setEmoji('none');
    } else if (
      name.trim().toLowerCase().substring(0, 3) ===
      answer.toLowerCase().substring(0, 3)
    ) {
      setEmoji('third');
    } else if (
      name.trim().charAt(0).toLowerCase() !== answer.charAt(0).toLowerCase()
    ) {
      setEmoji('fail');
    } else if (
      name.trim().charAt(0).toLowerCase() === answer.charAt(0).toLowerCase()
    ) {
      setEmoji('first');
    } else {
      setEmoji('none');
    }
  }, [name, answer]);

  useEffect(() => {
    const namePlano = quitarAcentos(name);
    const answerPlano = quitarAcentos(answer);
    if (namePlano.toLowerCase().trim() === answerPlano) {
      setFaltaAcento(true);
    } else {
      setFaltaAcento(false);
    }
  }, [answer, name]);

  return (
    <>
      <section className='questions'>
        <h4>{question} </h4>
        <section className='inputs'>
          {!isCorrect && !notCorrect && (
            <section>
              <form onSubmit={handleSubmit} className='inputForm'>
                <div className='input-respuesta'>
                  <h3>Respuesta:</h3>
                </div>
                <article className='inputText'>
                  <input
                    className='input-style'
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                  />
                  <h2 className='emoji'>
                    {emoji === 'fail'
                      ? '🥱'
                      : emoji === 'first'
                      ? '😉'
                      : emoji === 'third'
                      ? '😃'
                      : ''}{' '}
                  </h2>
                </article>
                {faltaAcento && (
                  <h4 style={{ color: 'var(--warning2)' }}>
                    Esa palabra lleva acento!
                  </h4>
                )}
              </form>
            </section>
          )}
          {isCorrect && (
            <h2 style={{ fontSize: '40px', color: 'rgb(72, 187, 72)' }}>
              ¡Correcto!
            </h2>
          )}
        </section>
      </section>
    </>
  );
};

export default Questions;
