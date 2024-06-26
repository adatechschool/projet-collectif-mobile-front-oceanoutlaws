"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const data_module_1 = require("./data/data.module");
async function bootstrap() {
    const data = await core_1.NestFactory.create(data_module_1.DataModule);
    await data.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map