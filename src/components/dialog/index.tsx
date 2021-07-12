import React from 'react';
import DialogHeader from './dialogHeader';
import { Dialog, DialogContent } from '@material-ui/core';


interface Props {
    open: boolean,
    title: string,
    dataPDF?: boolean,
    dataVideo?: boolean,
    onClose: () => void,
    children: React.ReactNode,
}

const MyDialog: React.FC<Props> = ({ open, title, children, dataPDF, dataVideo, onClose }) => {
    return (
        <Dialog data-pdf={dataPDF} data-video={dataVideo} className='dialog' open={open} onClose={onClose}>
            <DialogHeader className='dialog__header' title={title} onClose={onClose} />
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
}

export default MyDialog;