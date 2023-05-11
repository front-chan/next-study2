export default function Signup() {
    return (
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/auth/signup" method="POST">
                <input name="name" type="text" placeholder="이름" />
                <input name="email" type="text" placeholder="이메일" />
                <input name="password" type="password" placeholder="비밀번호" />
                <button type="submit">가입</button>
            </form>
        </div>
    );
}
