import './BlurCardContainer.css';

function BlurCardContainer({children}){
    return(
      <div className="blurCardsGrid">
        <div className="blurCardsContentContainer">
          {children}
        </div>
      </div>
    );
}

export default BlurCardContainer;
