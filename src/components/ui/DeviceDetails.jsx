/* eslint-disable react/prop-types */

const DeviceDetails = ({ device }) => {
    return (
        <div className="my-40 p-5 bg-white rounded-lg shadow-md flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Devices Details</h1>
        {device ? (
          <div>
            <h2 className="text-xl font-bold mb-4">{device.name}</h2>
            <p className="text-gray-700 mb-2">Location: {device.location}</p>
            <p className="text-gray-700 mb-2">Description: {device.description}</p>
            <p className="text-gray-700">Last Result: {device.lastResult}</p>
          </div>
        ) : (
          <p className="text-gray-500">Select a device to view details.</p>
        )}
      </div>
    );
};

export default DeviceDetails;