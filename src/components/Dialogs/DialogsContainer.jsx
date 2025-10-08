import { useContext, useEffect, useState } from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  const store = useContext(StoreContext);
  const [dialogState, setDialogState] = useState(store.getState().dialogPage);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setDialogState(store.getState().dialogPage);
    });

    return unsubscribe;
  }, [store]);

  const onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogPage={dialogState}
    />
  );
};

export default DialogsContainer;
