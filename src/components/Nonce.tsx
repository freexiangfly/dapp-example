import React from 'react';
import { Input } from 'antd-mobile';
import './common.css';

interface NonceProps {
    onChange: (nonce: string) => void;
}

const Nonce: React.FC<NonceProps> = ({ onChange }) => {
    const handleChange = (val: string) => {
        onChange(val);
    };

    return (
    <div className='layout'>
        <label>Nonce:</label>
        <Input placeholder="请输入Nonce" onChange={handleChange}/>
    </div>
    );
};

export default Nonce;