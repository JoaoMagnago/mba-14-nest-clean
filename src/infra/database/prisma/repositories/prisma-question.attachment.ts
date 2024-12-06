import { PaginationParams } from "@/core/repositories/pagination-params";
import { QuestionAttachmentsRepository } from "@/domain/forum/application/repositories/question-attachments-repository";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";
import { Injectable } from "@nestjs/common";


@Injectable()
export class PrismaQuesionAttachmentsRepository implements QuestionAttachmentsRepository {
  create(questionAttachment: QuestionAttachment): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(questionAttachment: QuestionAttachment): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<QuestionAttachment | null> {
    throw new Error("Method not implemented.");
  }

  findManyByQuestionId(questionId: string, params: PaginationParams): Promise<QuestionAttachment[]> {
    throw new Error("Method not implemented.");
  }

}