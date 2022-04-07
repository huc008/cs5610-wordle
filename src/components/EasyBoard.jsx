import SingleBox from './SingleBox';

export default function EasyBoard({row, col}) {
    let items = [];
    for (let i = 0; i < row; i++) {
        let rowTemp = []; 
        for (let j = 0; j < col; j++) {
            rowTemp.push(<SingleBox letterPos={j} attemptVal={i} />);
        }
        items.push(<div className="row-container">{rowTemp}</div>);
    }
    return (
        <div>
            {items}
        </div>
    )
}