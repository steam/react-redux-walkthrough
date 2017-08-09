import { v4 } from 'uuid'

export const addMessage = text => ({
    type: 'ADD_MESSAGE',
    name: "Sean",
    key: v4(),
    id: v4(),
    time: new Date().toString(),
    avatar: "https://staging.cirrusmd.com/images/default-profile.svg",
    text
})
