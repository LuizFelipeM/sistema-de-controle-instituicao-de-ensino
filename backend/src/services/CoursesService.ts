import { inject } from 'inversify'
import { ICoursesMinifyView } from '../domain/interfaces/contracts/ICoursesMinifyViewDto'
import { ICourse } from '../domain/interfaces/entities/ICourse'
import { CoursesRepository } from '../repositories/CoursesRepository'
import { AbstractService } from './AbstractService'

export class CourseService extends AbstractService<ICourse, CoursesRepository> {
  constructor (
    @inject(CoursesRepository)
    protected readonly coursesRepository: CoursesRepository
  ) { super(coursesRepository) }

  getAllCoursesMinifiedView = (): Promise<ICoursesMinifyView[]> => this.coursesRepository.selectAllCoursesMinifiedView()
}
