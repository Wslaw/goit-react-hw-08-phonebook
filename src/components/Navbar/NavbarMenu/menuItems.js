import { nanoid } from "@reduxjs/toolkit"


const menuItems = [
    {
        id: nanoid(),
        to: '/',
        text: "HomePage",
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
