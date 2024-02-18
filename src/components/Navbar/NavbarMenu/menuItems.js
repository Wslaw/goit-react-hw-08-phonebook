import { nanoid } from "@reduxjs/toolkit"


const menuItems = [
    {
        id: nanoid(),
        to: '/',
        text: "Home page",
        private: false,
    },
    {
        id: nanoid(),
        to: '/contacts',
        text: "Contacts",
        private: true,
    },
]

export default menuItems;
