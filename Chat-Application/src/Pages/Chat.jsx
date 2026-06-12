import Sidebar from "../Components/Sidebar/Sidebar"
import ChatBox from "../Components/ChatBox/ChatBox"

function Chat() {
    return (
<>
<div className="h-screen bg flex">
    <Sidebar/>
    <ChatBox/>
</div>
</>
    )
}

export default Chat 