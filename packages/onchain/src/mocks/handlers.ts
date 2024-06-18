import { handlers as addressHandlers } from "./address";
import { handlers as balanceHandlers } from "./balance";

export const handlers = [...balanceHandlers, ...addressHandlers];
