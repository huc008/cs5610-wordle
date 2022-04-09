import SingleBox from './SingleBox';

export default function GridBoard({row, col}) {
    let items = [];
    for (let i = 0; i < row; i++) {
        let rowTemp = []; 
        for (let j = 0; j < col; j++) {
            rowTemp.push(<SingleBox y_pos={j} x_pos={i} />);
        }
        items.push(<div className="row-container">{rowTemp}</div>);
    }
    return (
        <div>
            {items}
        </div>
    )
}