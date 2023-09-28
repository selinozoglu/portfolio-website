import React, {useState} from 'react';
import TestingOutput from "../testing-output/testing-output";


const TestingComp = () => {

    const [changedText,setChangedText] = useState(false);

    const changeTextHandler = () =>{
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hi ! My name is Selin</h2>
            {!changedText &&  <TestingOutput>How are you?</TestingOutput>}
            {changedText && <TestingOutput>Changed!</TestingOutput>}
            <button className={'bg-orange-400'} onClick={()=>changeTextHandler()}>Change Text!</button>
        </div>
    );
};

export default TestingComp;