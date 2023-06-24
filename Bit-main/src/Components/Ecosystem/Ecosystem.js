import './Ecosystem.css';

import './Ecosystem.css';
import EveryButton from '../Button';


const ecoSystemTypes = (props) => {
    return (
        <div className={props.class}>
            <div className='type-name'>{props.type}</div>
            <div className='type-summary'>{props.summary}</div>
            <EveryButton text="Learn More" />
        </div>
    )
}

export default ecoSystemTypes;