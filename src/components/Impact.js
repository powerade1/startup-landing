export default function ImpactSection() {
  return (
    <section className="py-40 px-4 bg-white w-full text-center">
      <div className="max-w-4xl mx-auto">
        <p className=" text-primary font-semibold mb-2">우리의 사명</p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          우리는 수많은 혁신 기업들의 <br className="sm:hidden" /> 성장을 도왔습니다
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          다양한 규모와 산업의 수많은 기업들이 <br className="sm:hidden" /> 우리의 솔루션으로 큰 성과를 만들어냈습니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24">
          <div>
            <h3 className="text-6xl font-bold text-gray-900">24%</h3>
            <p className="mt-4 text-gray-500">매출 성장률</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-gray-900">2.5억</h3>
            <p className="mt-4 text-gray-500">연간 매출(KRW)</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold text-gray-900">10+</h3>
            <p className="mt-4 text-gray-500">운영 지속 개월 수</p>
          </div>
        </div>
      </div>
    </section>
  );
}
