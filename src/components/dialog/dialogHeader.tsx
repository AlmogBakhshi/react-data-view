import React from 'react';
import { Close } from '@material-ui/icons';
import { DialogTitle, Typography, IconButton } from '@material-ui/core';

interface Props {
    title: string,
    className?: string,
    onClose: () => void
}

const DialogHeader: React.FC<Props> = ({ className, title, onClose }) => {
    return (
        <DialogTitle className={className} disableTypography >
            <Typography variant='h6' >{title}</Typography>
            <IconButton onClick={onClose}>
                <Close />
            </IconButton>
        </DialogTitle>
    );
}

export default DialogHeader;