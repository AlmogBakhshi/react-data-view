import React from 'react';
import { IFile } from '../store/Files';
import { Close } from '@material-ui/icons';

interface Props {
    file: IFile | null,
    onClose: () => void
}

const ViewFile: React.FC<Props> = ({ file, onClose }) => {
    return (
        file ? <div className='view_file' >
            <div className='view_file__container' style={{ width: file.pages && '90%', height: file.pages && '90%', maxWidth: '885px' }}>
                <div className='view_file__container__header'>
                    <div className='view_file__container__header__title'>
                        {file.name}
                    </div>
                    <Close className='view_file__container__header__close' onClick={onClose} />
                </div>
                <hr />
                <div className='view_file__container__body'>
                    {file.mime.includes('image') ?
                        <img src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} alt={file.name} /> :
                        <iframe src={`https://mighty-sierra-05836.herokuapp.com/${file.name}`} title={file.name} />}
                </div>
            </div>
        </div> : null
    );
}

export default ViewFile;