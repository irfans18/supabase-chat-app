import LoadingButton from "@mui/lab/LoadingButton";
import { IBasicButton, TIconComponent } from "./types";
import useBasicButton from "./hooks";
import * as Icons from "@mui/icons-material";

const BasicButton = (props: IBasicButton) => {
  const {
    customTitle = "Save",
    isLoading = false,
    onClick = () => {},
    variety = "save",
  } = props;

  const {
    data: { color, iconName = "Save", title },
  } = useBasicButton(variety);

  const IconComponent: TIconComponent = ({ iconName }) => {
    const Icon = Icons[iconName];
    return <Icon />;
  };

  return (
    <LoadingButton
      color={color}
      onClick={onClick}
      loading={isLoading}
      loadingPosition="start"
      startIcon={<IconComponent iconName={iconName} />}
      variant="contained"
      {...props}
    >
      <span>{title}</span>
    </LoadingButton>
  );
};

export default BasicButton;
