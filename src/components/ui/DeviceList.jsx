/* eslint-disable react/prop-types */


const DeviceList = ({ devices, onDeviceClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {devices.map((device) => (
                <div
                    key={device.name}
                    className="m-5 cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    onClick={() => onDeviceClick(device)}
                >
                    <div>
                        <p className="font-bold text-lg">{device.name}</p>
                        <p className="text-gray-500">{device.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DeviceList;