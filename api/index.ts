import fastify from "fastify"

const build = () => {
    const app = fastify({
        logger: true
    });

    app.get('/', async (req, res) => {
        const { name = "World" } = req.query;
        req.log.info({ name }, "hello, world!");
        return `Hello, ${name}`;
    });

    return app;
};

const app = build();

module.exports = async (req: any, res: any) => {
    await app.ready();
    app.server.emit("request", req, res);
};

