import classes from './BlurCard.css'

function BlurCard(props) {
  return (
    <div className="blurCardGrid">
      <div>
      <img className="blurCardImage" draggable="false" alt="blur card img" src={props.thumbnailImage}></img>
      <div className="blurTextContent">
        <p>{props.blurTitleText}</p>
        <p className="blurTextContentTitle">{props.blurChannelName}</p>
        <p className="blurTextContentTitle">{props.viewsNumber} views . {props.timeAgoPosted} ago</p>
      </div>
    </div>
    </div>
  );
}

export default BlurCard;
