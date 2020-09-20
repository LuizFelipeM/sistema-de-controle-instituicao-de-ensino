import { Container } from 'inversify'
import { ProfileRepository } from './repositories/ProfileRepository'
import { RuleRepository } from './repositories/RuleRepository'
import { StudentsRepository } from './repositories/StudentRepository'
import { UserRepository } from './repositories/UserRepository'
import { ProfileService } from './services/ProfileService'
import { RuleService } from './services/RuleService'
import { StudentService } from './services/StudentService'
import { UserService } from './services/UserService'

export const DIContainer = new Container()

/**
 * Container REPOSITORIES configuration binding
 */
DIContainer.bind<UserRepository>(UserRepository).toSelf()
DIContainer.bind<RuleRepository>(RuleRepository).toSelf()
DIContainer.bind<ProfileRepository>(ProfileRepository).toSelf()
DIContainer.bind<StudentsRepository>(StudentsRepository).toSelf()

/**
 * Container SERVICES configuration binding
 */
DIContainer.bind<StudentService>(StudentService).toSelf()
DIContainer.bind<ProfileService>(ProfileService).toSelf()
DIContainer.bind<RuleService>(RuleService).toSelf()
DIContainer.bind<UserService>(UserService).toSelf()
