"use client";

import Link from "next/link";

export default function ListItem(props) {
    return (
        <div>
            {props.result.map((r) => (
                <div className="list-item" key={r._id}>
                    <Link href={`/detail/${r._id}`}>
                        <h4>{r.title}</h4>
                    </Link>
                    <Link href={`/edit/${r._id}`}>🖍️</Link>
                    <span
                        onClick={(e) => {
                            fetch("/api/post/delete", {
                                method: "POST",
                                body: r._id,
                            })
                                // .then((r) => r.json())
                                .then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display =
                                            "none";
                                    }, 1000);
                                });
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
