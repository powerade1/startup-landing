export default function CTASection() {
    return (
        <section className="py-20 px-4 bg-white w-full">
            {/* CTA Section */}
            <div className="max-w-6xl mx-auto mt-20 text-white rounded-xl p-10 flex" style={{
                background:
                    " linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(2, 51, 71, 1) 100%)",
            }}>
                <div className="basis-1/2">
                    <p className="text-sm text-primary uppercase tracking-wide mb-4">
                        TRY IT NOW
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-2 leading-12">
                        결제 프로세스를 <br /> 한 단계 업그레이드해보세요
                    </h2>
                    <p className="text-gray-300 mb-8">
                        간편한 인보이스, 강력한 통합 기능, 그리고 자금 흐름 관리
                        도구로 <br /> 소상공인을 지원합니다.
                    </p>
                </div>
                <div className="flex sm:flex-row gap-4 mx-auto w-full sm:w-1/2 p-8">
                    <button className="bg-primary hover:bg-[#34aec2] text-white p-6 rounded-xl font-medium text-lg my-auto flex-1">
                        지금 시작하기
                    </button>
                    <button className="border border-gray-400 text-white p-6 rounded-xl font-medium text-lg hover:bg-white/90 hover:text-slate-900 transition my-auto whitespace-nowrap flex-1">
                        자세히 알아보기 ↗
                    </button>
                </div>
            </div>
        </section>
    );
}
