import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
        {/* 上部のナビゲーション */}
        <div className="flex item-center bg-amazon_blue p-1 flex-grow py-2">
            {/* 左のAmazonロゴ */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            {/* 検索窓 */}
            <div className="hidden sm:flex items-center h10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon className="h-12 p-4"/>
            </div>
            
        </div>
        {/* 下部のナビゲーション */}
        <div>

        </div>
    </header>
  )
}

export default Header
