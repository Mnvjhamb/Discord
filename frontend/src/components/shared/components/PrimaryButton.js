import React from 'react';
import Button from '@mui/material/Button'

export default function PrimaryButton({
    label,
    additionalStyles,
    disabled,
    onClick,
}) {
  return (
    <Button
        variant='contained'
        sx={{
            color: 'white',
            textTransfrom: 'none',
            fontWeight: 500,
            width: '100%',
            height: '40px',
            bgcolor: '#5865F2',
            fontSize: '16px'
        }}

        style={additionalStyles ? additionalStyles : {}}
        disabled={disabled}
        onClick={onClick}
    >
        {label}
    </Button>
  )
}
