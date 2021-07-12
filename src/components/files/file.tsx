import React from 'react';
import FileIcon from './fileIcon';
import BytesToSize from '../bytesToSize';
import { IFile } from '../../store/Files';
import { Paper } from '@material-ui/core';
import FileTextDetail from './fileTextDetail';

interface Props {
    file: IFile,
    onClick: (file: IFile) => void
}

const File: React.FC<Props> = ({ file, onClick }) => {
    return (
        <Paper className='file' onClick={() => onClick(file)}>
            <FileIcon className='file__icon' mime={file.mime} />
            <div className='file__details'>
                <div className='file__details__name'>
                    {file.name}
                </div>
                <FileTextDetail className='file__details__detail' file={file} />
            </div>
            <BytesToSize className='file__size' bytes={file.size} />
        </Paper>
    );
}

export default File;