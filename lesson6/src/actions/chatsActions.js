export const ADD_CHAT = 'ADD_CHAT'      // Cоздание экшн креэйтеров вручную. с тулкитом это не нужно делать
export const REMOVE_CHAT = "REMOVE_CHAT"

//Action creators
export const addChatAC = (chatArr) =>({
    type: ADD_CHAT,
    payload: chatArr
})
export const removeChatAC = () =>({
    type: REMOVE_CHAT,
})