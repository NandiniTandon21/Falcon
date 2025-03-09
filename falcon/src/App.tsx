import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuArrowRightToLine } from "react-icons/lu";
import { BiImages } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { GrLineChart } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { LuPartyPopper } from "react-icons/lu";
import { MdImage } from "react-icons/md";
import { MdOutlineSell } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import Button from "./components/button";
import ChatBubble from "./components/chat-bubble";
import TagSelector from "./components/tag-selector";

const buttonSizes: Array<"small" | "medium" | "large"> = [
  "small",
  "medium",
  "large",
];

const App = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const lastChatBubbleRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  React.useEffect(() => {
    if (isSubmitted && lastChatBubbleRef.current) {
      lastChatBubbleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isSubmitted]);

  return (
    <>
      <div className="p-8 w-fit mx-auto">
        <table className="border-collapse border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 p-4 text-gray-500"></th>
              <th className="border border-gray-300 p-4 text-gray-500">Icon</th>
              <th className="border border-gray-300 p-4 text-gray-500">Non</th>
              <th className="border border-gray-300 p-4 text-gray-500">
                Hover
              </th>
              <th className="border border-gray-300 p-4 text-gray-500">
                Disabled
              </th>
            </tr>
          </thead>
          <tbody>
            {buttonSizes.map((size) => (
              <tr key={size}>
                <td className="border border-gray-300 p-4 capitalize text-gray-500">
                  {size}
                </td>
                {/* Icon */}
                <td className="border border-gray-300 p-4">
                  <Button icon={<FaPlay size={12} />} size={size} />
                </td>

                {/* Non */}
                <td className="border border-gray-300 p-4">
                  <Button
                    text="Play"
                    icon={<FaPlay size={12} />}
                    size={size}
                    hover={false}
                    selected={true}
                  />
                </td>

                {/* Hover */}
                <td className="border border-gray-300 p-4">
                  <Button text="Play" icon={<FaPlay size={12} />} size={size} />
                </td>

                {/* Disabled */}
                <td className="border border-gray-300 p-4">
                  <Button
                    text="Play"
                    size={size}
                    icon={<FaPlay size={12} />}
                    disabled
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-8 w-fit mx-auto">
        {/* The senderName will be the name of the user */}
        <div className="mb-18">
          <ChatBubble
            text="Choose the category of the Post"
            senderName="First Last"
          />
          <div className="ml-7">
            <TagSelector
              tags={[
                { label: "Educational", icon: <GiBrain /> },
                { label: "Promotional", icon: <MdOutlineSell /> },
                { label: "Festival", icon: <LuPartyPopper /> },
                { label: "Trends", icon: <GrLineChart /> },
              ]}
              multiSelect={false}
            />
          </div>
        </div>
        <div className="mb-18">
          <ChatBubble
            text="Choose the Platform you wish to post on"
            senderName="First Last"
          />
          <div className="ml-7">
            <TagSelector
              tags={[
                { label: "Instagram", icon: <FaInstagram /> },
                { label: "Facebook", icon: <ImFacebook2 /> },
                { label: "LinkedIn", icon: <ImLinkedin /> },
              ]}
              multiSelect={true}
            />
          </div>
        </div>
        <div className="mb-18">
          <ChatBubble text="Choose the Type of Post" senderName="First Last" />
          <div className="ml-7">
            <TagSelector
              tags={[
                {
                  label: "Static post",
                  icon: <MdImage color="blue" />,
                  className: "text-gray-900 bg-gray-100 hover",
                  selectedClassName: "bg-gray-400 text-white",
                },
                {
                  label: "Carousal",
                  icon: <BiImages color="green" />,
                  className: "text-gray-900 bg-gray-100",
                  selectedClassName: "bg-gray-400 text-white",
                },
              ]}
              multiSelect={false}
            />
          </div>
          <Button
            text="Submit"
            size="medium"
            icon={<LuArrowRightToLine />}
            iconPosition="right"
            onClick={() => {
              console.log("Submit pressed");
              handleSubmit();
            }}
            className="ml-8 h-10 w-28"
          />
        </div>

        {isSubmitted && (
          <div ref={lastChatBubbleRef} className="mt-4">
            <ChatBubble
              text="You can choose from the suggestions on the right panel or you can suggest me something you have something in your mind."
              senderName="First Name"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
