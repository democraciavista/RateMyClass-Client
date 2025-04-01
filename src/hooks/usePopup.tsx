"use client";
import { useState } from 'react';
function usePopUp() {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    function handleToggle() {
        setOpen((prev) => !prev);
    }

    return{
        open, setOpen,
        handleOpen, handleClose, handleToggle
    }
}
export { usePopUp };
