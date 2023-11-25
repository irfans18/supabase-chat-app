import Avatar from "@mui/material/Avatar";

interface MessageProps {
  message?: string;
  photoURL?: string;
  displayName?: string;
  user?: string | null;
}

export const MessageBubble = (props: MessageProps) => {
  const {
    message = "no message",
    photoURL = "image.png",
    displayName = "Hakim",
    user,
  } = props;

  let color = "bg-blue-200 border-blue-300";
  let position = "";

  if (user === displayName) {
    color = "bg-yellow-200 border-yellow-300";
    position = "justify-end";
  }
  return (
    <div className={`flex ${position}`}>
      <Avatar
        alt={displayName}
        className="rounded-full w-8 h-8 mr-2 ml-1"
        src={photoURL}
      ></Avatar>
      <div>
        <div
          className={`relative ml-1 mb-2 mt-1 p-2 rounded-lg border ${color}`}
        >
          <div>
            <p className="p-0 mb-2">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
