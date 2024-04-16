import { useParams } from "react-router-dom"

const Chat = ({chat}) => {
    console.log(chat.messages)
    return (
        <div className="chatItems">
            {
                chat.messages.map((e,i)=>
                    <div className="messageItem">
                        <h3>{e.author}</h3>
                        <p>{e.text}</p>
                        <p>{e.date}</p>
                    </div>
                )
            }
        </div>
    )
}
export default Chat