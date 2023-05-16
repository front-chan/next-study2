"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkMode() {
    let router = useRouter();
    useEffect(() => {
        let modeCookie = ("; " + document.cookie)
            .split(`; mode=`)
            .pop()
            .split(";")[0];
        if (modeCookie) {
            document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        }
    }, []);

    return (
        <span
            style={{ cursor: "pointer" }}
            onClick={() => {
                let modeCookie = ("; " + document.cookie)
                    .split(`; mode=`)
                    .pop()
                    .split(";")[0];
                if (modeCookie === "light") {
                    document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                } else {
                    document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                }
            }}
        >
            {" "}
            🌙{" "}
        </span>
    );
}
