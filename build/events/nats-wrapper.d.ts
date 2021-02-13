import nats from "node-nats-streaming";
export declare class NatsWrapper {
    private _client?;
    get client(): nats.Stan;
    connect(clusterID: string, clientID: string, url: string): Promise<void>;
}
