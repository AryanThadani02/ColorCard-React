import React from "react";
import ColorCard from "./components/ColorCard";

const colors = [
  { title: "Red", color: "#FF0000" },
  { title: "Green", color: "#00FF00" },
  { title: "Blue", color: "#0000FF" },
  { title: "Yellow", color: "#FFFF00" },
  { title: "Cyan", color: "#00FFFF" },
  { title: "Magenta", color: "#FF00FF" },
  { title: "Orange", color: "#FFA500" },
  { title: "Purple", color: "#800080" },
  { title: "Pink", color: "#FFC0CB" },
  { title: "Brown", color: "#A52A2A" },
  { title: "Lime", color: "#00FF00" },
  { title: "Maroon", color: "#800000" },
  { title: "Navy", color: "#000080" },
  { title: "Olive", color: "#808000" },
  { title: "Teal", color: "#008080" },
  { title: "Turquoise", color: "#40E0D0" },
  { title: "Violet", color: "#EE82EE" },
  { title: "Gold", color: "#FFD700" },
  { title: "Silver", color: "#C0C0C0" },
  { title: "Coral", color: "#FF7F50" },
  { title: "Indigo", color: "#4B0082" },
  { title: "Ivory", color: "#FFFFF0" },
  { title: "Khaki", color: "#F0E68C" },
  { title: "Lavender", color: "#E6E6FA" },
  { title: "LavenderBlush", color: "#FFF0F5" },
  { title: "LightBlue", color: "#ADD8E6" },
  { title: "LightCoral", color: "#F08080" },
  { title: "LightCyan", color: "#E0FFFF" },
  { title: "LightGoldenRodYellow", color: "#FAFAD2" },
  { title: "LightGray", color: "#D3D3D3" },
  { title: "LightGreen", color: "#90EE90" },
  { title: "LightPink", color: "#FFB6C1" },
  { title: "LightSalmon", color: "#FFA07A" },
  { title: "LightSeaGreen", color: "#20B2AA" },
  { title: "LightSkyBlue", color: "#87CEFA" },
  { title: "LightSlateGray", color: "#778899" },
  { title: "LightSteelBlue", color: "#B0C4DE" },
  { title: "LightYellow", color: "#FFFFE0" },
  { title: "MediumAquaMarine", color: "#66CDAA" },
  { title: "MediumBlue", color: "#0000CD" },
  { title: "MediumOrchid", color: "#BA55D3" },
  { title: "MediumPurple", color: "#9370DB" },
  { title: "MediumSeaGreen", color: "#3CB371" },
  { title: "MediumSlateBlue", color: "#7B68EE" },
  { title: "MediumSpringGreen", color: "#00FA9A" },
  { title: "MediumTurquoise", color: "#48D1CC" },
  { title: "MediumVioletRed", color: "#C71585" },
  { title: "MidnightBlue", color: "#191970" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Color Picker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colors.map((colorItem, index) => (
          <ColorCard
            key={index}
            color={colorItem.color}
            title={colorItem.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
