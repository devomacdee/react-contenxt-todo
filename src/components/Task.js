import React, { useState } from "react";
import { useTasks } from "../providers/TaskProvider";
import Modal from "./Modal";

export default function Task({ id, task, complete }) {
  const { removeTask, setTaskStatus } = useTasks();
  const [isOpen, setIsOpen] = useState(false);

  const checkTask = (event) => setTaskStatus(id, event.target.checked);
  const openModal = () => setIsOpen(true);
  const dismissModal = () => setIsOpen(false);
  const closeModal = () => {
    removeTask(id);
    setIsOpen(false);
  };

  return (
    <>
      <tr>
        <td>
          <input type="checkbox" checked={complete} onChange={checkTask} />
        </td>
        <td>
          <span className={complete ? "task-done" : ""}>{task}</span>
        </td>
        <td style={{ textAlign: "right" }}>
          <button className="btn" onClick={openModal}>
            x
          </button>
        </td>
      </tr>
      <Modal
        isOpen={isOpen}
        onDismiss={dismissModal}
        onClose={closeModal}
        title="Remove Task"
      >
        <h4>Are you sure you want to delete this task?</h4>
        <div className="button-container">
          <button className="primary" onClick={closeModal}>
            Yes
          </button>
          <button className="cancel" onClick={dismissModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}
