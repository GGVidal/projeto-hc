import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from "react-native";
import { TractorListHeader } from "./TractorListHeader";
import { TractorListItem } from "./TractorListItem";

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
      <TractorListHeader />
      <TractorListItem />
      <TractorListItem />
    </>
  );
}

export default AddTaskForm;
