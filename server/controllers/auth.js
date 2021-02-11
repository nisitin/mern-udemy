import User from "../models/User";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;

    if (!name) return res.status(400).send('名前は必須項目です')
    if (!password || password.length < 6)
        return res.status(400).send('パスワードは必須です。　パスワードは六文字以上の入力をお願いします')
    let userExits = await User.findOne({ email }).exec()//execは指定した文字が入るかどうかを確認するためのもの
    if (userExits) return res.status(400).send('email is taken')
    // register
    const user = new User(req.body)
    try {
        await user.save();
        console.log("USER CREATED", user);
        return res.json({ ok: true })
    } catch (err) {
        console.log("CREATE USER FAILED", err);
        return res.status(400).send('もう一度お試しください')
    }
}


export const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        // check if user with that email exist
        let user = await User.findOne({ email }).exec();
        // console.log("USER EXIST", user);
        if (!user) res.status(400).send("User with that email not found");
        // compare password
        user.comparePassword(password, (err, match) => {
            console.log("COMPARE PASSWORD IN LOGIN ERR", err);
            if (!match || err) return res.status(400).send("Wrong password");
            // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
            let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });
            res.json({
                token, user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    created: user.createdAt,
                    updateAt: user.updateAt
                }
            });
        });
    } catch (err) {
        console.log("LOGIN ERROR", err);
        res.status(400).send("Signin failed");
    }
};
