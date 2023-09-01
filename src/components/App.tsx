import React, { useState } from 'react';
import Address from './Address';
import Nonce from './Nonce';
import Network from './Network';
import Transaction from './Transaction';

const App: React.FC = () => {
    const [address, setAddress] = useState('');
    const [nonce, setNonce] = useState('');
    const [network, setNetwork] = useState('mainnet'); // 默认为主网

    const handleAddressChange = (address: string) => {
        setAddress(address);
    };

    const handleNonceChange = (nonce: string) => {
        setNonce(nonce);
    };

    const handleNetworkChange = (network: string) => {
        setNetwork(network);
    };

    return (
        <div>
        <h1>DApp 示例</h1>
        <Network onChange={handleNetworkChange} />
        <Address onChange={handleAddressChange} />
        <Nonce onChange={handleNonceChange} />
        <Transaction address={address} nonce={nonce} network={network} />
        </div>
    );
};

export default App;