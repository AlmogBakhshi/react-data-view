import React from 'react';
import Dialog from '../dialog';
import { URL } from '../../fetch';
import { IFile, FileType } from '../../store/Files';

interface Props {
    file: IFile | null,
    onClose: () => void
}

const FileDialog: React.FC<Props> = ({ file, onClose }) => {
    return (
        <Dialog dataPDF={!!file?.mime.includes(FileType.PDF)} dataVideo={!!file?.mime.includes(FileType.Video)}
            open={!!file} title={file?.name || ''} onClose={onClose}>
            {file?.mime.includes(FileType.Image) ?
                <img src={URL + file?.name} alt={file?.name} /> :
                <iframe src={URL + file?.name} title={file?.name} allowFullScreen ></iframe>}
        </Dialog>
    );
}

export default FileDialog;