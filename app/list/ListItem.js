"use client";

import Link from "next/link";
// import { useEffect } from "react"

export default function ListItem(props) {
    // useEffect(() => {
    //   result =
    // }, [])

    return (
        <div>
            {props.result.map((r) => (
                <div className="list-item" key={r._id}>
                    <Link href={`/detail/${r._id}`}>
                        <h4>{r.title}</h4>
                    </Link>
                    <Link href={`/edit/${r._id}`}>🖍️</Link>
                    <span
                        onClick={() => {
                            fetch("/api/post/delete", {
                                method: "POST",
                                body: r._id,
                            }).then(() => console.log("삭제완료"));
                        }}
                    >
                        {" "}
                        🗑️{" "}
                    </span>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    );
}
