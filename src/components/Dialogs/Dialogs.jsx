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
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="John" id={1}/>
                    <DialogItem name="Jane" id={2}/>
                    <DialogItem name="Jim" id={3}/>
                </div>
                <div className={s.messages}>    
                    <Message message="Hello" />
                    <Message message="How are you?" />
                    <Message message="I'm fine, thank you!" />
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
