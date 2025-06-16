"use client";

export default function EmailForm() {
    function handleSubmit(event) {
        event.preventDefault();
        const email = event.target.email?.value?.trim();

        if (!email) {
            alert("이메일을 입력해주세요.");
            return;
        }
        // 간단한 이메일 형식 체크 (선택)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("올바른 이메일 형식을 입력해주세요.");
            return;
        }

        event.target.reset();
        alert("시작되었습니다!");
    }
    return (
        <form className="relative mt-8 max-w-md w-full" onSubmit={handleSubmit}>
            <input
                type="email"
                name="email" // name 속성 추가
                placeholder="비즈니스 이메일을 입력하세요"
                className="border border-gray-400 rounded-lg p-4 w-full pr-28 text-sm"
                autoComplete="email"
            />
            <button
                className="absolute top-0 right-0 bg-primary text-white text-sm font-bold rounded-lg px-4 py-2 hover:bg-secondary z-10"
                style={{ height: "calc(100%)" }}
                type="submit"
            >
                시작하기 <span className="ml-2">↗</span>
            </button>
        </form>
    );
}
