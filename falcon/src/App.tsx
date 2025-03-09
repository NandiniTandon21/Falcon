import { FaPlay } from "react-icons/fa";
import Button from "./components/button";

const buttonSizes: Array<"small" | "medium" | "large"> = [
  "small",
  "medium",
  "large",
];

const App = () => {
  return (
    <div className="p-8 w-fit mx-auto">
      <table className="border-collapse border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="border border-gray-300 p-4 text-gray-500"></th>
            <th className="border border-gray-300 p-4 text-gray-500">Icon</th>
            <th className="border border-gray-300 p-4 text-gray-500">Non</th>
            <th className="border border-gray-300 p-4 text-gray-500">Hover</th>
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
  );
};

export default App;
