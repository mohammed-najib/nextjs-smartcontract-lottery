// import ConnectButton from "@web3uikit/web3/dist/lib/ConnectButton/ConnectButton"
import { ConnectWallet } from "@web3uikit/web3"

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex">
            <h1 className="p-4 font-bold text-3xl">Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-4">
                <ConnectWallet moralisAuth={false} />
            </div>
        </div>
    )
}
