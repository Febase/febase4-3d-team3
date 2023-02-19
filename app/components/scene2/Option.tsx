import { FC } from "react";
import * as optionStyle from   './Option.css';


interface OptionProps{
    type: string;
}

const optionType = {
    'type1': {
        color: '#EECCE9'
    },
    'type2': {
        color: '#FFBAAB'
    },
    'type3': {
        color: '#FCEB97'
    },
    'type4': {
        color: '#D0EE88'
    }
}

const Option: FC<OptionProps>= ({type}) => (
    <div className={optionStyle.option}>
        
    </div>
)
export default Option;