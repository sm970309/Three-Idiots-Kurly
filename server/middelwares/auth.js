const jwt =require('../modules/jwt')

const authUtil = {
    checkToken: async (req, res, next) => {
        var token = req.headers.token;
        // 토큰 없음
        if (!token)
            return res.json({'result':'empty'});
        // decode
        const user = await jwt.verify(token);
        // 유효기간 만료
        if (user === TOKEN_EXPIRED)
            return res.json({'result':'expired'});
        // 유효하지 않는 토큰
        if (user === TOKEN_INVALID)
            return res.json({'result':'invalid'});
        if (user.idx === undefined)
            return res.json({'result':'invalid'});
        req.id = user.id;
        next();
    }
}
module.exports = authUtil;