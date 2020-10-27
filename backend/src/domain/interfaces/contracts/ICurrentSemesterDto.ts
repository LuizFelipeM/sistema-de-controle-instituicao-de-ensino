import { Override } from '../../../@types/override'
import { ISemester } from '../entities/ISemester'
import { IcalendarDto } from './ICalenderDto'
import { IDisciplineDto } from './IDiciplineDto'

export type ICurrentSemesterDto = Override<ISemester, {
    currentSemester: ICurrentSemesterDto
    calendar: IcalendarDto
    discipline: IDisciplineDto
}>
