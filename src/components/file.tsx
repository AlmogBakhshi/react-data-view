import React from 'react';
import { IFile } from '../store/Files';
import { Paper } from '@material-ui/core';
import { Image, Videocam, PictureAsPdf } from '@material-ui/icons';

interface Props {
    file: IFile,
    onClick: (file: IFile) => void
}

const File: React.FC<Props> = ({ file, onClick }) => {
    const HandleFileIcon = () => {
        return file.width && file.height ? <Image /> :
            file.length ? <Videocam /> :
                file.pages ? <PictureAsPdf /> : null;
    }

    const fileTextDetail = () => {
        return file.width && file.height ? `${file.width} x ${file.height} px` :
            file.length ? `${file.length} seconds` :
                file.pages ? `${file.pages} pages` : '';
    }

    const bytesToSize = (bytes: number) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`);
        return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
    }

    return (
        <Paper className='file' onClick={() => onClick(file)}>
            <div className='file__icon'>
                <HandleFileIcon />
            </div>
            <div className='file__details'>
                <div className='file__details__name'>
                    {file.name}
                </div>
                <div className='file__details__detail'>
                    {fileTextDetail()}
                </div>
            </div>
            <div className='file__size'>
                {bytesToSize(file.size)}
            </div>
        </Paper>
    );
}

export default File;