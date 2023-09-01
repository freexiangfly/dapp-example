import React from 'react';
import { Input } from 'antd-mobile';
import './common.css';

interface AddressProps {
  onChange: (address: string) => void;
}

const Address: React.FC<AddressProps> = ({ onChange }) => {
    const handleChange = (val: string) => {
        onChange(val);
    };

    return (
        <div className='layout'>
            <label>目标地址:</label>
            <Input placeholder="请输入目标地址" onChange={handleChange}/>
        </div>
    );
};

export default Address;