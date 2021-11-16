import React from "react";

interface Props {
  id: string;
  title: string;
  state: string;
  updatedAt: Date;
  onArchiveTask?: () => void;
  onPinTask?: () => void;
}

export const Task = ({ id, title, state, onArchiveTask, onPinTask }: Props) => {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};
