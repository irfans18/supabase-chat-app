import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface TextInputProps {
  onSubmit: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form
      className="flex justify-center w-full mx-auto"
      onSubmit={handleFormSubmit}
    >
      <TextField
        id="standard-text"
        type="text"
        placeholder="send your message.."
        className="w-full px-2 py-1 border border-gray-300"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button type="submit" color="primary">
        <SendIcon />
      </Button>
    </form>
  );
};
