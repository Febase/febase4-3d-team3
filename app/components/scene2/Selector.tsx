import { FC } from "react";
import Option from "./Option";
import options from "./options";
import * as styles from   './Selector.css';

const Selector: FC = ({}) => (
    <div>
        {Object.keys(options).map((type) => <Option type={type} />) }
    </div>
)
export default Selector;