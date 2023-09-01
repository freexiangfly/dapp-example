import React from 'react';
import { ethers } from 'ethers';
import { Button, Toast } from 'antd-mobile'

interface TransactionProps {
  address: string;
  nonce: string;
  network: string;
}

const Transaction: React.FC<TransactionProps> = ({ address, nonce, network }) => {
    const sendTransaction = async () => {
        try {
            if (address) {
                const regex = /^(0x)?[0-9a-fA-F]{40}$/;
                if (!regex.test(address)) {
                    Toast.show({
                        content: '请输入正确的目标地址'
                    });
                    return;
                }
            }
            else {
                Toast.show({
                    content: '目标地址不能为空！'
                });
                return;
            }
            if (nonce) {
                const reg = /^\d*(\.\d*)?$/;
                if (!reg.test(nonce)) {
                    Toast.show({
                        content: '请输入正确的 Nonce',
                    });
                    return;
                }
            }
            else {
                Toast.show({
                    content: 'Nonce 不能为空！',
                });
                return;
            }
            const providerUrl = `https://${network}.infura.io/v3/da9d7f0db8724a9fa060af165f6d3cfc`;

            const provider = new ethers.providers.JsonRpcProvider(providerUrl);
            const wallet = new ethers.Wallet('PRIVATE_KEY');

            const transaction = {
                to: address,
                nonce: parseInt(nonce),
                gasLimit: ethers.utils.parseUnits('21000', 'wei'),
                gasPrice: ethers.utils.parseUnits('10', 'gwei'),
                value: ethers.utils.parseEther('0.1'),
            };

            const signedTransaction = await wallet.signTransaction(transaction);
            await provider.sendTransaction(signedTransaction);

            Toast.show({
                content: '交易成功！',
            });
        } catch (error) {
            Toast.show({
                content: '交易失败！，原因：' + error,
            });
        }
    }

    return (
        <Button block color='primary' onClick={sendTransaction}>交易</Button>
    );
};

export default Transaction;