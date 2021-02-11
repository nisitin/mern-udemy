const LoginForm = ({
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword
}) => {
    return (

        <form onSubmit={handleSubmit} className="mt-3">


            <div className="form-group mb-3">
                <label>Your email</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button disabled={!email || !password} className="btn btn-primary">送信</button>
        </form >
    )
}

export default LoginForm;