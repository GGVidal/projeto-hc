import { useState } from "react";

import { TractorListItem } from "./TractorListItem";
import { TractorList } from "./TractorList";
interface AddTaskFormProps {
  onSubmit: (description: string) => void;
}

function AddTaskForm({ onSubmit }: AddTaskFormProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onSubmit(description);
    setDescription("");
  };

  return (
    <>
      <TractorList />
      {/* <TractorListItem />
      <TractorListItem /> */}
    </>
  );
}

export default AddTaskForm;
