import Header from "@/components/Header";
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="light-theme min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center">
                <div className="flex gap-36 mx-12 justify-center items-center">
                    <div className="max-w-xl">
                        <div className="text-7xl text-secondary mb-4 leading-24">
                            <span className="font-semibold whitespace-nowrap">
                                빠른 수금과,
                            </span>{" "}
                            <span className="whitespace-nowrap">
                                스마트한 자금 관리
                            </span>
                        </div>
                        <div className="text-gray-600">
                            간편한 인보이스, 강력한 연동, 현금흐름 관리 도구로
                            소상공인을 지원합니다
                        </div>
                        <div className="relative mt-8 max-w-md w-full">
                            <input
                                type="email"
                                placeholder="비즈니스 이메일을 입력하세요"
                                className="border border-gray-300 rounded-lg p-4 w-full pr-28 text-sm"
                            />
                            <button
                                className="absolute top-0 right-0 bg-primary text-white text-sm font-bold rounded-lg px-4 py-2 hover:bg-secondary z-10"
                                style={{ height: "calc(100%)" }}
                            >
                                시작하기
                                <Image
                                    src={"/images/arrow.png"}
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                    className="inline-block ml-2"
                                />
                            </button>
                        </div>
                        <div className="mt-8 flex gap-8">
                            <Image
                                src={"/images/Klarna.svg"}
                                alt="Klarna"
                                width={150}
                                height={120}
                                className=""
                            ></Image>
                            <Image
                                src={"/images/coinbase.svg"}
                                alt="coinbase"
                                width={180}
                                height={120}
                            ></Image>
                            <Image
                                src={"/images/instacart.svg"}
                                alt="instacart"
                                width={160}
                                height={120}
                            ></Image>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white w-96 rounded-3xl shadow-2xl">
                            <div className="p-8">
                                <div className="flex gap-4 items-center">
                                    <Image
                                        src={"/images/dipa.png"}
                                        alt="dipa-logo"
                                        width={60}
                                        height={60}
                                        className="rounded-xl"
                                    />
                                    <div className="gap-1 flex flex-col">
                                        <div className="font-bold">
                                            Dipa Inhouse
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            dipainhouse@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded-2xl p-4 mb-2 mt-8">
                                    <div className="text-gray-500 text-sm mb-1">
                                        청구서
                                    </div>
                                    <div className="font-bold text-2xl text-secondary">
                                        ₩ 1,876,580
                                    </div>
                                    <div className="text-gray-500">
                                        2025-04-21
                                    </div>
                                </div>
                                <div className="border-2 border-primary rounded-2xl p-4 my-2 flex items-center justify-between">
                                    <div className="flex items-center text-secondary">
                                        <Image
                                            src={"/images/credit-card.png"}
                                            alt="card"
                                            width={24}
                                            height={24}
                                            className="mr-4"
                                        />
                                        신용카드
                                    </div>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        className="w-5 h-5 accent-primary"
                                        defaultChecked
                                    />
                                </div>
                                <div className="border border-gray-300 rounded-2xl p-4 mt-2 mb-4 flex items-center justify-between">
                                    <div className="flex items-center text-secondary">
                                        <Image
                                            src={"/images/bank.png"}
                                            alt="bank"
                                            width={24}
                                            height={24}
                                            className="mr-4"
                                        />
                                        은행 계좌
                                    </div>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank"
                                        className="w-5 h-5 accent-primary"
                                        disabled
                                    />
                                </div>
                                <div className="bg-secondary hover:bg-primary text-white font-bold text-center rounded-2xl p-4 my-2 cursor-pointer">
                                    결제하기
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-16 -right-20 bg-primary w-54 h-80 rounded-3xl flex flex-col shadow-2xl">
                            <div className="p-8">
                                <div className="text-gray-200 text-sm">
                                    신용카드
                                </div>
                                <div className="text-white font-bold text-xl">
                                    2344 **** ****
                                </div>
                            </div>
                            <div className="bg-secondary flex justify-between items-center px-8 py-2 mt-auto rounded-b-3xl">
                                <Image
                                    src={"/images/visa.svg"}
                                    alt="visa-logo"
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    src={"/images/nfc.svg"}
                                    alt="nfc"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
