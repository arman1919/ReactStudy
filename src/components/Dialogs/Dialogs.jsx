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
                    {props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
                </div>
                <div className={s.messages}>    
                    {props.state.messages.map(m => <Message key={m.id} message={m.message}/>)}
                </div>
            </div>
        </div>
    );
}


export default Dialogs;
