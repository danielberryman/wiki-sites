import { useState } from "react";

export default function GridToolbar({
  state,
  setState,
}: any) {
  const {
    grid,
  } = state;

  useEffect(() => {
    if 
  }, [grid])

  return (
    <div className="p-4 rounded-xl shadow-md bg-white space-y-4 w-full max-w-xl">
      <div className="space-y-2">
        <label className="block font-medium">Grid Column Type</label>
        <select
          className="border p-2 w-full rounded"
          onChange={(e) => console.log(e.target.value)} // replace with your state handler
          value={grid}
          defaultValue="1fr"
        >
          <option value="auto">auto</option>
          <option value="fr">fr</option>
          <option value="px">px</option>
          <option value="%">%</option>
          <option value="minmax()">minmax()</option>
        </select>
      </div>
      
      {/* Aspect Ratio Control */}
      {/* <div className="space-y-2">
        <label className="block font-medium">Aspect Ratio</label>
        <input
          className="border p-2 w-full rounded"
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
        />
      </div> */}

      {/* Width & Height */}
      {/* <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Width</label>
          <input
            className="border p-2 w-full rounded"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium">Height</label>
          <input
            className="border p-2 w-full rounded"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div> */}

      {/* Overflow */}
      {/* <div className="space-y-2">
        <label className="block font-medium">Overflow</label>
        <div className="flex gap-2">
          {["visible", "auto", "scroll", "hidden"].map((opt) => (
            <button
              key={opt}
              className={`px-3 py-1 rounded border ${overflow === opt ? "bg-blue-500 text-white" : "bg-white"}`}
              onClick={() => setOverflow(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div> */}

      {/* Viewport Bounding */}
      {/* <div className="space-y-2">
        <label className="block font-medium">Viewport Bounded</label>
        <button
          className={`px-4 py-2 rounded border ${viewportBounded ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setViewportBounded(!viewportBounded)}
        >
          {viewportBounded ? "Enabled" : "Disabled"}
        </button>
      </div> */}

      {/* {viewportBounded && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Min Width (px)</label>
            <input
              type="range"
              min={100}
              max={1000}
              step={10}
              value={minWidth}
              onChange={(e) => setMinWidth(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm">{minWidth}px</div>
          </div>
          <div>
            <label className="block font-medium">Max Width (px)</label>
            <input
              type="range"
              min={100}
              max={1200}
              step={10}
              value={maxWidth}
              onChange={(e) => setMaxWidth(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-sm">{maxWidth}px</div>
          </div>
        </div>
      )} */}

      {/* Preview */}
    </div>
  );
}