import { useState, useEffect } from "react";
import { TVariety, IBasicButton } from "./types";

const useBasicButton = (variety: TVariety) => {
  const initialState: IBasicButton = {
    color: "primary",
    title: "save",
    iconName: "Save",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    switch (variety) {
      case "update":
        setState((prevState) => ({
          ...prevState,
          color: "warning",
          title: "update",
        }));
        break;

      default:
        break;
    }
  }, []);

  return {
    data: { ...state },
    methods: {},
  };
};

export default useBasicButton;
