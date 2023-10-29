import app from './app';
import { Config } from './config';

const startServer = () => {
    const PORT = Config.PORT;

    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Listening on ${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            // eslint-disable-next-line no-console
            console.log(error.message);
            process.exit(1);
        }
    }
};

startServer();
