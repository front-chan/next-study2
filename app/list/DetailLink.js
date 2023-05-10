"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
    let router = useRouter();
    let a = usePathname();
    let b = useSearchParams();
    // query string
    let c = useParams();
    // 유저가 [dynamic route] 입력한거 출력
    return (
        <button
            onClick={() => {
                router.push("/");
                // router.prefetch('/detail/dsfdawer')
            }}
        >
            버튼
        </button>
    );
}

// 여러 페이지를 만들려면 [dynamic Route]
// 현재 url이 뭔지 궁금하면 props / useRouter
// 페이지 이동, prefetch(이동할 페이지 미리 로딩 / Link에 내장되어 있음) 등은 useRouter
