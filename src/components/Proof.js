import Image from "next/image";
import Chart from "@/components/chart.js";

export default function SocialProofSection() {
    return (
        <section className="w-full px-6 pt-32 pb-40 bg-white" id="customers">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <p className=" text-primary font-semibold tracking-wide mb-8">
                    WHY US
                </p>
                <h2 className="text-4xl font-semibold mt-2">
                    기업들이 핀페이를 선택하는 이유
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6">
                {/* Top Left Box */}
                <div className="bg-slate-50 p-12 rounded-xl text-left">
                    <p className="text-8xl font-bold text-primary mb-8">3k+</p>
                    <p className="text-3xl font-semibold text-gray-800">
                        3,000개 이상의 기업이 핀페이와 함께합니다.
                    </p>
                </div>

                {/* Top Right Box */}
                <div className="bg-slate-50 p-12 rounded-xl text-left flex flex-col justify-between">
                    <p className="text-3xl font-semibold text-gray-800 mb-8">
                        언제든지 즉시 출금 가능
                    </p>
                    <div className="flex items-center gap-8 justify-center mb-4">
                        <Image
                            src={"/images/navi.png"}
                            alt="navi-logo"
                            width={70}
                            height={70}
                            className="rounded-2xl"
                        />
                        <Image
                            src={"/images/arrow2.svg"}
                            alt="arrow2"
                            width={70}
                            height={70}
                        />
                        <Image
                            src={"/images/bank3.png"}
                            alt="bank3"
                            width={70}
                            height={70}
                        />
                    </div>
                </div>

                {/* Bottom Left Box */}
                <div className="bg-slate-50 rounded-xl flex col-span-2">
                    <div className="p-12 text-left flex flex-col items-start justify-center gap-2">
                        <p className="text-3xl font-semibold text-gray-800 mb-2">
                            안정적인 자산 관리
                        </p>
                        <p className="text-gray-600 w-80 break-keep">
                            별도 투자 없이 보유 현금으로 수익 창출 또는 투자
                            부담 없이 유휴자금으로 수익을 만드세요.
                        </p>
                    </div>

                    {/* Bottom Right Box */}
                    <div className="bg-white p-6 rounded-t-xl text-left mt-12 w-full mr-12">
                        <p className="text-sm text-gray-500 mb-1">요약</p>
                        <p className="text-3xl font-semibold text-secondary mb-2">
                            ₩ 1,876,580
                        </p>
                        <Chart/>
                        <p className="text-sm text-right text-gray-500 mt-1">
                            6 개월
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
