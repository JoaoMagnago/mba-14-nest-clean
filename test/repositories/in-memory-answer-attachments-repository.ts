import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachments-repository'
import { AnswerAttachment } from '@/domain/forum/enterprise/entities/answer-attachment'

// eslint-disable-next-line prettier/prettier
export class InMemoryAnswerAttachmentsRepository implements AnswerAttachmentsRepository {
  public items: AnswerAttachment[] = []

  async create(answerAttachment: AnswerAttachment) {
    this.items.push(answerAttachment)
  }

  async delete(answerAttachment: AnswerAttachment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === answerAttachment.id,
    )

    this.items.splice(itemIndex, 1)
  }

  async findManyByAnswerId(answerId: string) {
    const answerAttachments = this.items.filter(
      (item) => item.answerId.toString() === answerId,
    )

    return answerAttachments
  }

  async deleteManyByAnswerId(answerId: string) {
    const answerAttachments = this.items.filter(
      (item) => item.answerId.toString() !== answerId,
    )

    this.items = answerAttachments
  }
}
