import { useState } from "react";

import { TractorListItem } from "../components/TractorListItem";
import { TractorList } from "../components/TractorList";
import { Input } from "../components/Input";
import { AddTractor } from "./AddTractor";
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
      <AddTractor />
      {/* <TractorListItem />
      <TractorListItem /> */}
    </>
  );
}

export default AddTaskForm;
