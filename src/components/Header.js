import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div>
            <header className="flex items-center px-8 py-4 shadow">
                {/* 로고 및 서비스명 */}
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <Image
                            src={"/images/finpay.png"}
                            width={30}
                            height={30}
                            alt="Finpay Logo"
                            className="inline-block"
                        />
                        <span className="text-secondary hover:text-primary text-xl font-bold">Finpay</span>
                    </div>
                </Link>
                {/* 네비게이션 */}
                <nav className="flex space-x-12 ml-30">
                    <Link
                        href="/products"
                        className="text-secondary hover:text-primary font-normal"
                    >
                        서비스
                    </Link>
                    <Link
                        href="/customers"
                        className="text-secondary hover:text-primary font-normal"
                    >
                        파트너
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-secondary hover:text-primary font-normal"
                    >
                        플랜
                    </Link>
                    <Link
                        href="/learn"
                        className="text-secondary hover:text-primary font-normal"
                    >
                        리소스
                    </Link>
                </nav>
                {/* 로그인/회원가입 버튼 */}
                <div className="flex items-center space-x-3 ml-auto">
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-xl border-1 border-gray-400 text-gray-700 bg-gray-100 hover:bg-cyan-100 transition"
                    >
                        로그인
                    </Link>
                    <Link
                        href="/signup"
                        className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-secondary transition font-semibold"
                    >
                        회원가입
                    </Link>
                </div>
            </header>
        </div>
    );
}
