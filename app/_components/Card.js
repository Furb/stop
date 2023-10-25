import { HiArrowNarrowRight } from "react-icons/hi";

function Card() {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__icon'></div>
        <h3 className='card__title'>Er det svindel?</h3>
      </div>
      <div className='card__body'>
        <p className='card__excerpt'>
          Advarselstegn der hjælper dig med at afgøre, om du er stødt på en
          svindler.
        </p>
      </div>
      <div className='card__footer'>
        <button className='card__btn'>
          <div className='card__btn-icon'>
            <HiArrowNarrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Card;
