import './Layout.css';

function Layout({children}){
    return(
      <div className="gridContainer">
        <div className="blurCardsContentContainer">
          <div className="blurCardsGrid">
            {children}
          </div>
        </div>
      </div>

    );
}

export default Layout;
