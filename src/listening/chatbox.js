export {
    chatbox
}

var chatbox={
    receiverMessage:(event)=>{
        window.dispatchEvent(new CustomEvent('receiverMessage', {
            detail: {
                data: event
            }
        }))
    },

    groupChatMessage:(event)=>{
        window.dispatchEvent(new CustomEvent('groupChatMessage', {
            detail: {
                data: event
            }
        }))
    }
}