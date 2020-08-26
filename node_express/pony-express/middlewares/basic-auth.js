const basicAuth = (req, res, next) => {
    const header = req.headers.authorization || '';
    const [type, payload] = header.split(' ');

    console.log(`AUTH LOG type: ${type}`);
    console.log(`AUTH LOG payload: ${payload}`);

    next();
}

module.exports = basicAuth;
