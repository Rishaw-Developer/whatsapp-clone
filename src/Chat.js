import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
// import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
// import { SearchOutlined } from '@material-ui/icons';

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("Youy typed >>>", input);

    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Rishaw Kumar</span>
          Hey Guys!
          <span className="chat__timestamp">3:52pm</span>
        </p>
          
        
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} 
          onChange= {(e) => setInput(e.target.value)}
          placeholder="Type a message" 
          type="text" />
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;

