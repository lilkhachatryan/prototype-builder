import React, {useState} from 'react';

import UploadImageFromPC from './UploadImageFromPC/UploadImageFromPC';
import UploadImageByUrl from './UploadImageByUrl/UploadImageByUrl';
import UploadToggler from './UploadToggler/UploadToggler';

const UploadImage = (props) => {

    const [state, setState] = useState({
        uploadFromPc: true
    });

    const toggleChangeHandler = () => {
        let newState = {
            uploadFromPc: !state.uploadFromPc
        };
        setState(newState);
    };

    const {handleAdd} = props;

    return (
        <div>
            <UploadToggler uploadFromPc={state.uploadFromPc} toggleChange={toggleChangeHandler}/>
            {
                state.uploadFromPc ?
                    <UploadImageFromPC handleAdd={handleAdd} panningPosition={props.panningPosition} />
                    : <UploadImageByUrl handleAdd={handleAdd} panningPosition={props.panningPosition} />
            }
        </div>
    );
};


export default UploadImage;
