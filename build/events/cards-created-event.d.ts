import { Subject } from "./subjects";
export interface CardsCreatedEvent {
    subject: Subject.CardsCreated;
    data: {
        lastSeenPriority: number;
        version: number;
    };
}
