import { Stan } from "node-nats-streaming";
import { Event } from "./listener-class";
export declare abstract class Publisher<T extends Event> {
    protected client: Stan;
    abstract subject: T["subject"];
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}
