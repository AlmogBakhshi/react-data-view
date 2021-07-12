import React from 'react';
import { IFile, FileType } from '../../store/Files';

interface Props {
    file: IFile,
    className?: string
}

const FileTextDetail: React.FC<Props> = ({ className, file }) => {
    return (
        <div className={className}>
            {file.mime.includes(FileType.Image) ? `${file.width} x ${file.height} px` :
                file.mime.includes(FileType.Video) ? `${file.length} seconds` :
                    file.mime.includes(FileType.PDF) ? `${file.pages} pages` : ''}
        </div>
    );
}

export default FileTextDetail;