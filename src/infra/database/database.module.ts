import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaAnswerAttachmentsRepository } from "./prisma/repositories/prisma-answer-attachments-repository";
import { PrismaAnswerCommentsRepository } from "./prisma/repositories/prisma-answer-comments-repository";
import { PrismaAnswersRepository } from "./prisma/repositories/prisma-answers-repository";
import { PrismaQuesionCommentsRepository } from "./prisma/repositories/prisma-question-comments";
import { PrismaQuestionAttachmentsRepository } from "./prisma/repositories/prisma-question.attachment";
import { PrismaQuestionsRepository } from "./prisma/repositories/prisma-questions-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository
    },
    PrismaQuestionsRepository,
    PrismaQuesionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    PrismaQuesionCommentsRepository,
    PrismaQuestionAttachmentsRepository,
    PrismaAnswersRepository,
    PrismaAnswerAttachmentsRepository,
    PrismaAnswerCommentsRepository
  ]
})
export class DatabaseModule {

}