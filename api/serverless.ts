const build = require("./index")

const app = build();

module.exports = async (req: any, res: any) => {
    await app.ready();
    app.server.emit("request", req, res);
};

