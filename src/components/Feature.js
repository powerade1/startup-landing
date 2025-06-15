import Image from "next/image";

export default function FeatureSection() {
    return (
        <section className="my-56 bg-white w-10/12 max-w-7xl p-28 rounded-3xl shadow-lg">
            <div className="flex gap-8">
                <div className="basis-1/2">
                    <div className="text-primary text-lg mb-2">스마트 결제</div>
                    <div className="font-bold text-4xl leading-16">
                        비즈니스 성장에 따라 <br />
                        진화하는 금융 경험을 누려보세요
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="text-gray-500 text-xl justify-self-center mt-8 leading-8">
                        비즈니스에 적합한 금융 운영 체제를 설계하고
                        <br />
                        현금 흐름을 간소화합니다
                    </div>
                </div>
            </div>
            <div className="flex mt-16 justify-between">
                <div className="flex flex-col w-72">
                    <Image
                        src={"/images/transfer-card.png"}
                        alt="transfer-card"
                        width={80}
                        height={56}
                        className="inline-block my-2"
                    />
                    <div className="text-2xl mt-4 mb-2 font-semibold">
                        무료 이체
                    </div>
                    <div className="text-gray-500 leading-6 break-keep">
                        재무 경험을 향상시키고 반복 결제를 예약하여 자동화된
                        구매 환경을 제공합니다.
                    </div>
                </div>
                <div className="flex flex-col w-72">
                    <Image
                        src={"/images/bank2.png"}
                        alt="bank"
                        width={80}
                        height={60}
                        className="inline-block mb-2"
                    />
                    <div className="text-2xl mt-4 mb-2 font-semibold">
                        다중 계정
                    </div>
                    <div className="text-gray-500 leading-6 break-keep">
                        필요한 현금은 바로 사용하고, 남은 자금은 자동으로 수익을
                        만들어드립니다
                    </div>
                </div>
                <div className="flex flex-col w-72">
                    <Image
                        src={"/images/security.png"}
                        alt="bank"
                        width={80}
                        height={60}
                        className="inline-block mb-2"
                    />
                    <div className="text-2xl mt-4 mb-2 font-semibold">
                        강력한 보안
                    </div>
                    <div className="text-gray-500 leading-6 break-keep">
                        다단계 인증, 카드 제어, 계정별 권한 관리로 회사 자산을
                        안전하게 보호합니다
                    </div>
                </div>
            </div>
        </section>
    );
}
