import { IProfileDto } from '../domain/contracts/IProfileDto'
import { ProfileRepository } from '../repositories/ProfileRepository'
import { AbstractService } from './AbstractService'
import { inject } from 'inversify'
import { IProfile } from '../domain/interfaces/entities/IProfile'

export class ProfileService extends AbstractService<IProfile, ProfileRepository> {
  constructor (
    @inject(ProfileRepository)
    protected readonly repository: ProfileRepository
  ) {
    super()
  }

  getWithRules = async (): Promise<IProfileDto[]> => await this.repository.getProfilesWithRules()
  getByIdWithRules = async (id: number): Promise<IProfileDto> => {
    if (id) {
      return await this.repository.getProfileWithRules(id)
    } else {
      throw new Error('Id is not a number')
    }
  }
}
