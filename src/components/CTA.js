export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-white w-full">
      {/* CTA Section */}
      <div className="max-w-5xl mx-auto mt-20 bg-slate-900 text-white rounded-xl p-10 text-center">
        <p className="text-sm text-teal-400 uppercase tracking-wide mb-2">지금 사용해보세요</p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          결제 프로세스를 한 단계 업그레이드해보세요
        </h2>
        <p className="text-gray-300 mb-8">
          간편한 인보이스, 강력한 통합 기능, 그리고 자금 흐름 관리 도구로 <br className="sm:hidden" /> 소상공인을 지원합니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-6 rounded-full font-medium">
            지금 시작하기
          </button>
          <button className="border border-white text-white py-2 px-6 rounded-full font-medium hover:bg-white hover:text-slate-900 transition">
            자세히 알아보기 ↗
          </button>
        </div>
      </div>
    </section>
  );
}
