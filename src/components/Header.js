import Image from "next/image";

function Header() {
  return (
    <header>
        {/* 上部のナビゲーション */}
        <div className="flex item-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            
        </div>
        {/* 下部のナビゲーション */}
        <div>

        </div>
    </header>
  )
}

export default Header
