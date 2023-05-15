"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
    let [comment, setComment] = useState("");
    let [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/comment/list?id=${props._id}`)
            .then((r) => r.json())
            .then((result) => {
                console.log(result);
                setData(result);
                console.log(data);
                // setData가 console.log보다 늦게 출력되서 비어있을 수 있음
            });
    }, []);

    return (
        <div>
            <div>댓글목록 보여줄 부분</div>
            <hr />
            {data.length > 0
                ? data.map((d) => (
                      <div key={d._id}>
                          <p>{d.content}</p>
                      </div>
                  ))
                : "Loding..."}
            <input onChange={(e) => setComment(e.target.value)} />
            <button
                onClick={() => {
                    console.log(comment);
                    fetch("/api/comment/new", {
                        method: "POST",
                        body: JSON.stringify({
                            comment: comment,
                            _id: props._id,
                        }),
                    });
                }}
            >
                전송
            </button>
        </div>
    );
}
