export default function PlanSection() {
    return (
        <section className="pt-20 px-4 bg-white w-full" id="pricing">
            <div className="max-w-6xl mx-auto">
                <p className="text-gray-500 mb-6 tracking-widest text-center text-lg">
                    플랜 선택
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Plus Plan */}
                    <div className="bg-gray-200 rounded-xl border border-gray-200 p-8 hover:shadow-md transition">
                        <h3 className="text-4xl font-semibold mb-4 text-secondary">
                            Plus
                        </h3>
                        <div className="flex">
                            <p className="mt-20 pb-1 text-2xl font-semibold text-secondary">
                                월 5,900원
                            </p>
                            <div className="text-right justify-end flex-1 self-end">
                                <span className="text-2xl font-semibold text-secondary">
                                    ↗
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="relative rounded-xl bg-primary text-white p-8 overflow-hidden hover:shadow-lg transition">
                        {/* 패턴 배경 (핀테크 느낌, 살짝만 보이게) */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: "url('/images/bg-pattern.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: 0.9, // 패턴이 살짝만 보이게
                                zIndex: 0,
                                backgroundPositionX: "end",
                            }}
                        />
                        <div className="relative z-10">
                            <h3 className="text-4xl font-semibold mb-4">
                                Premium
                            </h3>
                            <div className="flex">
                                <p className="mt-20 pb-1 text-2xl font-semibold">
                                    월 12,900원
                                </p>
                                <div className="text-right justify-end flex-1 self-end">
                                    <span className="text-2xl font-semibold">
                                        {" "}
                                        ↗
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
