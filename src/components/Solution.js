export default function SolutionSection() {
    return (
        <section className="bg-secondary text-white py-40 px-4 w-full">
            <div className="max-w-6xl mx-auto">
                <p className="text-primary font-semibold mb-2">STEP</p>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-10 leading-16">
                    계좌 하나로 수익까지, <br /> 지금 시작하세요
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Step 1 */}
                    <div className="bg-[#0b3a4f] rounded-lg p-6 gap-4 flex flex-col">
                        <div className="text-5xl font-bold text-white/20 mb-2 ">
                            1
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1 text-xl">
                                계좌 개설하기
                            </h3>
                            <p className="text-white/60 break-keep">
                                핀페이에 가입하고 대시보드에서 계좌를 설정하세요
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-[#0b3a4f] rounded-lg p-6 gap-4 flex flex-col">
                        <div className="text-5xl font-bold text-white/20 mb-2">
                            2
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1 text-xl">
                                자금 이체하기
                            </h3>
                            <p className="text-white/60 break-keep">
                                다른 계좌에서 자금을 이체하고 수익 창출을
                                시작하세요
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-[#0b3a4f] rounded-lg p-6 gap-4 flex flex-col">
                        <div className="text-5xl font-bold text-white/20 mb-2">
                            3
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-1 text-xl">
                                불어나는 잔고를 확인하세요
                            </h3>
                            <p className="text-white/60 break-keep">
                                언제든 즉시 사용 가능하며 시장 변동성으로부터
                                안전합니다
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
