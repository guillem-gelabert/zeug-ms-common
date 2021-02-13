import { Message, Stan } from "node-nats-streaming";
import { Subject } from "./subjects";
export interface Event {
    subject: Subject;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    protected client: Stan;
    abstract subject: T["subject"];
    abstract onMessage(event: T["data"], msg: Message): void;
    abstract queueGroupName: string;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
