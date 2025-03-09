import React from "react";

interface ChatBubbleProps {
  text: string;
  avatarUrl?: string;
  senderName: string;
  maxLines?: number;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  avatarUrl,
  senderName,
}) => {
  return (
    <div className="flex mb-4 items-start">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-8 h-8 rounded-full mr-2"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 mt-6"></div>
      )}
      <div className="flex flex-col">
        <span className="text-sm text-gray-400 mb-1 ml-3">{senderName}</span>
        <div className="relative max-w-xs p-4 rounded-3xl bg-gray-200 text-gray-700">
          <p className="text-sm text-gray-500">{text}</p>
          <div className="absolute bottom-[-2px] left-[-7px] h-[20px] border-l-[20px] border-l-gray-200 rounded-br-[16px_14px] transform translate-y-[-2px]"></div>
          <div className="absolute bottom-[-2px] left-[4px] w-[26px] h-[20px] bg-white rounded-br-[10px] transform translate-x-[-30px] translate-y-[-2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
