import React from "react";
import { BiImages } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { GrLineChart } from "react-icons/gr";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { MdImage, MdOutlineSell } from "react-icons/md";
import { FaPlay, FaInstagram, FaCodeBranch } from "react-icons/fa";
import { LuPartyPopper, LuArrowRightToLine } from "react-icons/lu";

import Timer from "./components/timer";
import Button from "./components/button";
import Square from "./components/square";
import ChatBubble from "./components/chat-bubble";
import TagSelector from "./components/tag-selector";

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = React.useState("buttons");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const lastChatBubbleRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      lastChatBubbleRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const buttonSizes: Array<"small" | "medium" | "large"> = [
    "small",
    "medium",
    "large",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Component Library
        </h1>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {["buttons", "chat", "tags", "timer", "misc"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Component Display Area */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Button Components */}
          {activeTab === "buttons" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Button Components
                </h2>
                <div className="text-sm text-gray-500">Interactive Demo</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Button Variants */}
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    Icon Only
                  </h3>
                  <div className="flex flex-col space-y-4 items-center">
                    {buttonSizes.map((size) => (
                      <div
                        key={size}
                        className="flex items-center justify-between w-full"
                      >
                        <span className="text-sm text-gray-500 capitalize">
                          {size}:
                        </span>
                        <Button icon={<FaPlay size={12} />} size={size} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    Standard
                  </h3>
                  <div className="flex flex-col space-y-4 items-center">
                    {buttonSizes.map((size) => (
                      <div
                        key={size}
                        className="flex items-center justify-between w-full"
                      >
                        <span className="text-sm text-gray-500 capitalize">
                          {size}:
                        </span>
                        <Button
                          text="Play"
                          icon={<FaPlay size={12} />}
                          size={size}
                          selected={true}
                          hover={false}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    With Hover
                  </h3>
                  <div className="flex flex-col space-y-4 items-center">
                    {buttonSizes.map((size) => (
                      <div
                        key={size}
                        className="flex items-center justify-between w-full"
                      >
                        <span className="text-sm text-gray-500 capitalize">
                          {size}:
                        </span>
                        <Button
                          text="Play"
                          icon={<FaPlay size={12} />}
                          size={size}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    Disabled
                  </h3>
                  <div className="flex flex-col space-y-4 items-center">
                    {buttonSizes.map((size) => (
                      <div
                        key={size}
                        className="flex items-center justify-between w-full"
                      >
                        <span className="text-sm text-gray-500 capitalize">
                          {size}:
                        </span>
                        <Button
                          text="Play"
                          size={size}
                          icon={<FaPlay size={12} />}
                          disabled
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chat UI Components */}
          {activeTab === "chat" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Chat UI Components
                </h2>
                <div className="text-sm text-gray-500">Interactive Demo</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 max-w-2xl mx-auto">
                <div className="mb-6">
                  <ChatBubble
                    text="Choose the category of the Post"
                    senderName="First Last"
                  />
                  <div className="ml-10 mt-2">
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

                <div className="mb-6">
                  <ChatBubble
                    text="Choose the Platform you wish to post on"
                    senderName="First Last"
                  />
                  <div className="ml-10 mt-2">
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

                <div className="mb-6">
                  <ChatBubble
                    text="Choose the Type of Post"
                    senderName="First Last"
                  />
                  <div className="ml-10 mt-2">
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

                  <div className="ml-7 mt-4">
                    <Button
                      text="Submit"
                      size="medium"
                      icon={<LuArrowRightToLine />}
                      iconPosition="right"
                      onClick={handleSubmit}
                      className="h-10 w-28 ml-4"
                    />
                  </div>
                </div>

                {isSubmitted && (
                  <div ref={lastChatBubbleRef} className="mt-4 animate-fadeIn">
                    <ChatBubble
                      text="You can choose from the suggestions on the right panel or you can suggest me something you have something in your mind."
                      senderName="First Name"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Timer Component */}
          {activeTab === "timer" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Timer Component
                </h2>
                <div className="text-sm text-gray-500">Interactive Element</div>
              </div>

              <div className="flex flex-col items-center p-8 border border-gray-200 rounded-lg bg-gray-50">
                <p className="text-gray-600 mb-6">
                  Countdown timer with customizable duration
                </p>
                <Timer label="Espress" maxTime={30} />
              </div>
            </div>
          )}

          {/*Square component */}
          {activeTab === "misc" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Miscellaneous Components
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    Square Component
                  </h3>
                  <Square />
                </div>
              </div>
            </div>
          )}

          {activeTab === "tags" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Tag Selector Component
                </h2>
                <div className="text-sm text-gray-500">
                  Interactive Selection
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    Single Select
                  </h3>
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

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-md font-medium mb-4 text-gray-700">
                    Multi Select
                  </h3>
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
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Components Under Development
          </h2>
          <p className="text-gray-600 mb-4">
            These components can actively evolve and be open for further
            customization. Each component is built with modularity in mind,
            allowing for extensive styling variations and functional adaptations
            to fit your specific needs.
          </p>

          <div className="mt-6 border-t pt-4 border-gray-200">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Component Versatility
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium text-sm mb-2">Adaptable Styling</h4>
                <p className="text-sm text-gray-600">
                  Components accept custom classNames and style props, allowing
                  them to match any design system.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium text-sm mb-2">
                  Configurable Behavior
                </h4>
                <p className="text-sm text-gray-600">
                  Control component states, animations, and interactions through
                  simple prop changes.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium text-sm mb-2">
                  Extensible Architecture
                </h4>
                <p className="text-sm text-gray-600">
                  Core components can be combined or extended to create more
                  complex UI patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              text="Contribute"
              size="medium"
              icon={<FaCodeBranch size={12} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
