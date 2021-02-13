import { Subject } from "./subjects";

export interface UserCreatedEvent {
  subject: Subject.UserCreated;
  data: {
    id: string;
    lastSeenPriority?: number;
    lastUpdate?: Date;
    newWordsPerSession?: number;
    version: number;
  };
}
