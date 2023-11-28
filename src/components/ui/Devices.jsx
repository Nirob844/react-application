import { useEffect, useState } from 'react';
import DeviceDetails from './DeviceDetails';
import DeviceList from './DeviceList';
import SearchBar from './SearchBar';

const Devices = () => {
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Tehnix/c9d53939b2ed600b321fed8e1898f3a7/raw/dfe7adaf6f73e320ae4ed42761d6b50cf25eb569/devices.json');
                const data = await response.json();
                setDevices(data.devices);
            } catch (error) {
                console.error('Error fetching devices data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log(devices);

    const handleDeviceClick = (device) => {
        setSelectedDevice(device);
    };

    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };
    const handleReset = () => {
        setSearchTerm('');
        setSelectedDevice(null);
      };

    // Filter devices based on the search term
    const filteredDevices = devices.filter(
        (device) =>
            device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            device.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex">
            <div className="w-3/4 p-4">
            <SearchBar onSearchChange={handleSearchChange} onReset={handleReset} />
                <DeviceList devices={filteredDevices} onDeviceClick={handleDeviceClick} />
            </div>
            <div className="w-1/4 p-4">
                <DeviceDetails device={selectedDevice} />
            </div>
        </div>
    );
};

export default Devices;