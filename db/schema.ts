import { pgTable, serial, text ,varchar} from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mock_interview',{
    id: serial('id').primaryKey(),
    mockResponse: text('mockResponse').notNull(),
    jobPossition: varchar('jobPossition').notNull(),
    jobDescription: text('jobDescription').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    mockId: varchar('mockId').notNull(),
} )