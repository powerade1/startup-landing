import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f9fbfb] text-gray-700 text-sm py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-12">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center gap-2 mb-40">
                    <Image
                        src={"/images/finpay.png"}
                        alt="finpay-logo"
                        width={20}
                        height={20}
                        style={{ width: 24, height: 24, objectFit: "contain" }} // 정사각형 & 비율 유지
                    />
                    <h1 className="text-2xl font-semibold text-secondary">
                        Finpay
                    </h1>
                </div>

                {/* Link Groups */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-lg">
                    <div>
                        <h4 className="font-semibold mb-3 text-secondary">
                            솔루션
                        </h4>
                        <ul className="space-y-2">
                            <li>소상공인</li>
                            <li>프리랜서</li>
                            <li>고객사</li>
                            <li>세금</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-secondary">
                            회사
                        </h4>
                        <ul className="space-y-2">
                            <li>회사 소개</li>
                            <li>채용</li>
                            <li>문의</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-secondary">
                            자료
                        </h4>
                        <ul className="space-y-2">
                            <li>블로그</li>
                            <li>전자책</li>
                            <li>가이드</li>
                            <li>템플릿</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-secondary">
                            소셜
                        </h4>
                        <div className="flex space-x-4 mt-2">
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-primary text-secondary"
                            >
                                <FaTwitter size={40} />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="hover:text-primary text-secondary"
                            >
                                <FaLinkedin size={40} />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="hover:text-primary text-secondary"
                            >
                                <FaFacebook size={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider & Copyright */}
            <div className="border-t mt-12 pt-6 text-center text-primary">
                © Finpay 2025. All Rights Reserved.
            </div>
        </footer>
    );
}
