"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";

const NAV_ITEMS = [
    { label: "서비스", target: "products" },
    { label: "파트너", target: "customers" },
    { label: "플랜", target: "pricing" },
    { label: "리소스", target: "learn" },
];

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        const rect = el.getBoundingClientRect();
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        const scrollTo = elementTop - windowHeight / 2 + elementHeight / 2;
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
}

// 모달 컴포넌트
function Modal({ open, onClose, children }) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-lg p-8 min-w-[340px] relative">
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-bold"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
}

// 로그인 폼
function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            alert("이메일과 비밀번호를 입력해주세요.");
            return;
        }
        onSubmit?.();
        alert("로그인 성공!");
    }

    function handleSocialLogin(provider) {
        alert(`${provider}로 로그인했습니다.`);
        onSubmit?.();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2 text-secondary">로그인</h2>
            <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 font-semibold hover:bg-gray-100 transition"
            >
                <FaGoogle size={20} />
                Google로 로그인
            </button>
            <button
                type="button"
                onClick={() => handleSocialLogin("Kakao")}
                className="flex items-center justify-center gap-2 border border-yellow-400 bg-yellow-100 rounded-lg py-2 font-semibold hover:bg-yellow-300 transition"
            >
                <Image
                    src="/images/kakao.svg"
                    alt="Kakao"
                    width={30}
                    height={30}
                />
                카카오로 로그인
            </button>
            <button
                type="button"
                onClick={() => handleSocialLogin("Naver")}
                className="flex items-center justify-center gap-2 border border-green-400 bg-green-100 rounded-lg py-2 font-semibold hover:bg-green-200 transition"
            >
                <Image
                    src="/images/naver.png"
                    alt="Naver"
                    width={25}
                    height={20}
                />
                네이버로 로그인
            </button>
            <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-200" />
                <span className="mx-2 text-gray-400 text-xs">또는</span>
                <div className="flex-grow h-px bg-gray-200" />
            </div>
            <input
                type="email"
                placeholder="이메일"
                className="border rounded-lg p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
            />
            <input
                type="password"
                placeholder="비밀번호"
                className="border rounded-lg p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />
            <button
                type="submit"
                className="bg-primary text-white rounded-lg py-2 font-semibold hover:bg-secondary transition"
            >
                로그인
            </button>
        </form>
    );
}

// 회원가입 폼
function SignupForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.trim() || !password.trim() || !confirm.trim()) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        if (password !== confirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        onSubmit?.();
        alert("회원가입 성공!");
    }

    function handleSocialSignup(provider) {
        alert(`${provider}로 회원가입했습니다.`);
        onSubmit?.();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-2 text-secondary">회원가입</h2>
            <button
                type="button"
                onClick={() => handleSocialSignup("Google")}
                className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 font-semibold hover:bg-gray-100 transition"
            >
                <FaGoogle size={20} />
                Google로 회원가입
            </button>
            <button
                type="button"
                onClick={() => handleSocialSignup("Kakao")}
                className="flex items-center justify-center gap-2 border border-yellow-300 bg-yellow-200 rounded-lg py-2 font-semibold hover:bg-yellow-300 transition"
            >
                <Image
                    src="/images/kakao.svg"
                    alt="Kakao"
                    width={30}
                    height={30}
                />
                카카오로 회원가입
            </button>
            <button
                type="button"
                onClick={() => handleSocialSignup("Naver")}
                className="flex items-center justify-center gap-2 border border-green-400 bg-green-100 rounded-lg py-2 font-semibold hover:bg-green-200 transition"
            >
                <Image
                    src="/images/naver.png"
                    alt="Naver"
                    width={25}
                    height={20}
                />
                네이버로 회원가입
            </button>
            <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-200" />
                <span className="mx-2 text-gray-400 text-xs">또는</span>
                <div className="flex-grow h-px bg-gray-200" />
            </div>
            <input
                type="email"
                placeholder="이메일"
                className="border rounded-lg p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
            />
            <input
                type="password"
                placeholder="비밀번호"
                className="border rounded-lg p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
            />
            <input
                type="password"
                placeholder="비밀번호 확인"
                className="border rounded-lg p-3"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-password"
            />
            <button
                type="submit"
                className="bg-primary text-white rounded-lg py-2 font-semibold hover:bg-secondary transition"
            >
                회원가입
            </button>
        </form>
    );
}

export default function Header() {
    const [modal, setModal] = useState(null); // 'login' | 'signup' | null

    return (
        <div>
            <header className="flex items-center px-8 py-4 shadow fixed w-full backdrop-blur-md bg-white/50 z-50">
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
                        <span className="text-secondary hover:text-primary text-xl font-bold">
                            Finpay
                        </span>
                    </div>
                </Link>
                {/* 네비게이션 */}
                <nav className="flex space-x-12 ml-42 gap-8">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.target}
                            type="button"
                            onClick={() => scrollToSection(item.target)}
                            className="text-secondary hover:text-primary font-medium text-lg bg-transparent border-none outline-none cursor-pointer"
                            style={{ background: "none" }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                {/* 로그인/회원가입 버튼 */}
                <div className="flex items-center space-x-3 ml-auto">
                    <button
                        className="px-4 py-2 rounded-xl border-1 border-gray-400 text-gray-700 bg-gray-100 hover:bg-cyan-100 transition"
                        onClick={() => setModal("login")}
                    >
                        로그인
                    </button>
                    <button
                        className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-secondary transition font-semibold"
                        onClick={() => setModal("signup")}
                    >
                        회원가입
                    </button>
                </div>
            </header>

            {/* 모달 */}
            <Modal open={modal === "login"} onClose={() => setModal(null)}>
                <LoginForm onSubmit={() => setModal(null)} />
            </Modal>
            <Modal open={modal === "signup"} onClose={() => setModal(null)}>
                <SignupForm onSubmit={() => setModal(null)} />
            </Modal>
        </div>
    );
}
