import React from 'react';
import convert from 'color-convert';
let staticData = {
    heading: "Choose your color",
    chooseTxt: 'You have selected $displayName'
}
class Pallete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorPicked: null,
            showModal: false
        }
        this.colorPick = this.colorPick.bind(this);
    }
    colorPick(color) {
        this.setState({
            colorPicked: color
        });
    }
    render() {
        let { heading, chooseTxt } = staticData, { colorData } = this.props, { colorPicked, showModal } = this.state;
        return (<div className='palette'>
            <div className='header'>{heading}</div>
            <div className='color-palette'>{colorData.map((color) => {
                let { displayName, hexCode } = color;
                return (<div className='color-container'>
                    <div className={colorPicked && colorPicked.displayName == displayName ? 'color-picker selected' : 'color-picker'} style={{ backgroundColor: hexCode }} onClick={() => { this.colorPick(color) }}></div>
                    <div className='color-name'>{displayName}</div>
                </div>)
            })}
            </div>
            {colorPicked && <div
                className='choose-text' style={{ backgroundColor: colorPicked.hexCode }}>{chooseTxt.replace('$displayName', colorPicked.displayName)}</div>}
            <img className='avatar' style={{ filter: `hue-rotate(${convert.hex.hsl(colorPicked && colorPicked.hexCode ? colorPicked.hexCode : 0)[0]}deg)`}} src='https://www.temptalia.com/wp-content/uploads/2016/06/mac_sushikiss001-760x760.jpg' alt='face img' />
            {showModal && (<div className='modal'>
                <div className='content'>
                    <div onClick={()=> this.setState({ showModal: false })} className='close'>X</div>
                    {colorPicked && <div
                    className='choose-text'>{chooseTxt.replace('$displayName', colorPicked.displayName)}</div>}
                 <button type='button' onClick={()=> this.setState({ showModal: false })} className='btn'>CLOSE</button>
                </div>
            </div>)}
        </div>)
    }
}
export default Pallete;