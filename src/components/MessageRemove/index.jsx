/* eslint-disable react/prop-types */
import { X } from "lucide-react";

const MessageRemove = ({ visible, onCancelClick, onConfirmClick }) => {
  return (
    <div className={visible ? "message-remove visible" : "message-remove"}>
      <div className="content">
        <div className="content-header">
          <h2>Tem certeza que deseja remover?</h2>
          <button>
            <X size={20} />
          </button>
        </div>
        <div className="buttons">
          <button onClick={onCancelClick}>Não</button>
          <button onClick={onConfirmClick}>Sim</button>
        </div>
      </div>
    </div>
  );
};

export default MessageRemove;
