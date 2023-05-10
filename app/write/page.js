export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/test" method="POST">
                <label htmlFor="title">글제목</label>
                <input id="title" name="title" />
                <label htmlFor="content">글내용</label>
                <input id="content" name="content" />
                <button type="submit">버튼</button>
            </form>
        </div>
    );
}
