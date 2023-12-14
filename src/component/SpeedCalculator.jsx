import { useState } from "react";

const SpeedCalculator = () => {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");
  const [speed, setSpeed] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedDistance = parseFloat(distance);
    const parsedTime = parseFloat(time);

    if (isNaN(parsedDistance) || isNaN(parsedTime)) {
      setError(true);
      return;
    }

    const calculatedSpeed = parsedDistance / 100 / (parsedTime / 1000);
    setSpeed(calculatedSpeed / 10);
    setError(false);
  };

  function calculateSpeedInKmph(speedInMps) {
    return (speedInMps * 3600) / 1000;
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Speed Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="distance"
          >
            Distance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="distance"
            type="text"
            placeholder="Enter distance in meters.centimeters"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="text"
            placeholder="Enter time in seconds.miliseconds"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Calculate Speed
          </button>
        </div>
      </form>
      {speed && (
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-5">Result</h2>
          <p className="text-gray-700">
            The speed of the object in meters: {speed.toFixed(2)} meters per
            second.
          </p>
          <p className="text-gray-700">
            The speed of the object in kilometers:{" "}
            {calculateSpeedInKmph(speed).toFixed(2)} kilometers per hour.
          </p>
        </div>
      )}
      {error && (
        <div className="mt-5">
          <p className="text-red-500">
            Error: Please enter valid distance and time.
          </p>
        </div>
      )}
    </div>
  );
};

export default SpeedCalculator;
