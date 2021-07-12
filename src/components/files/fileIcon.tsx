import React from 'react';
import { FileType } from '../../store/Files';
import { Image, Videocam, PictureAsPdf } from '@material-ui/icons';

interface Props {
    mime: string,
    className?: string
}

const FileIcon: React.FC<Props> = ({ className, mime }) => {
    return (
        <div className={className}>
            {mime.includes(FileType.Image) ? <Image /> :
                mime.includes(FileType.Video) ? <Videocam /> :
                    mime.includes(FileType.PDF) ? <PictureAsPdf /> : null}
        </div>
    );
}

export default FileIcon;