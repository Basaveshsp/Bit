import './Heading-Text-Button.css';

import EveryButton from '../Button';



const headingTextButton = (props) => {




    return (
        <div className={props.class}>
            <div className='heading'>
                <div className='heading1'>{props.heading1}</div>
                <div className='heading2'>{props.heading2}<span className='colored_heading'>{props.colored_heading}</span></div>
            </div>
            <div className='summary-text'>
                <div className='summary1'>{props.summary1}</div>
                <div className='summary2'>{props.summary2}</div>
            </div>
            <EveryButton text={props.text} />

        </div>
        
    )
    // document.getElementsByClassName("")
}

export default headingTextButton;