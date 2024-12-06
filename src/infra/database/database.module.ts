import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaAnswerAttachmentsRepository } from "./prisma/repositories/prisma-answer-attachments-repository";
import { PrismaAnswerCommentsRepository } from "./prisma/repositories/prisma-answer-comments-repository";
import { PrismaAnswersRepository } from "./prisma/repositories/prisma-answers-repository";
import { PrismaQuesionCommentsRepository } from "./prisma/repositories/prisma-question-comments";
import { PrismaQuesionAttachmentsRepository } from "./prisma/repositories/prisma-question.attachment";
import { PrismaQuestionsRepository } from "./prisma/repositories/prisma-questions-repository";

@Module({
  providers: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuesionCommentsRepository,
    PrismaQuesionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository
  ],
  exports: [
    PrismaService,
    PrismaQuestionsRepository,
    PrismaQuesionCommentsRepository,
    PrismaQuesionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository
  ]
})
export class DatabaseModule {

}