import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "John"},
        {id: 2, name: "Jane"},
        {id: 3, name: "Jim"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Bob"},
        {id: 6, name: "Charlie"},
        {id: 7, name: "David"},
        {id: 8, name: "Ethan"},
        {id: 9, name: "Frank"},
        {id: 10, name: "George"},
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I'm fine, thank you!"},
        {id: 4, message: "What are you doing?"},
        {id: 5, message: "I'm doing nothing."},
    ]

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
                </div>
                <div className={s.messages}>    
                    {messagesData.map(message => <Message message={message.message}/>)}
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
