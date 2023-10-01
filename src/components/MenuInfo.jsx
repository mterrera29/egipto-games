import Time from './Time';

const MenuInfo = ({ index, cantidadPreg, win, isReload }) => {
  return (
    <section className='menu'>
      <div className='tiempo'>
        <h4>
          {index + 1} de {cantidadPreg}
        </h4>
      </div>
      <Time win={win} isReload={isReload} />
    </section>
  );
};

export default MenuInfo;
