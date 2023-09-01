import React from 'react';
import { Selector } from 'antd-mobile'
import './common.css';

interface NetworkProps {
  onChange: (network: string) => void;
}

const OPTIONS = [
    {
      label: 'Mainnet',
      value: 'mainnet'
    },
    {
      label: 'Ropsten',
      value: 'ropsten'
    },
    {
      label: 'Rinkeby',
      value: 'rinkeby'
    }
  ]

const Network: React.FC<NetworkProps> = ({ onChange }) => {

      const handleNetworkChange = (value: string[]) => {
        console.log(value[0]);
            onChange(value[0]);
        };

    return (
        <div className='layout'>
            <label>切换网络:</label>
            <Selector
                options={OPTIONS}
                defaultValue={['mainnet']}
                onChange={handleNetworkChange}
            />
        </div>
    );
};

export default Network;