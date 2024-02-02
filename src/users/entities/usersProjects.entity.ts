import { BaseEntity } from '../../config/base.entity';
import { ACCESS_LEVEL } from '../../constants/roles';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UsersEntity } from './users.entity';
import { ProjectsEmtity } from '../../projects/entities/projects.entity';

@Entity({ name: 'users_projects' })
export class UsersProjectsEntity extends BaseEntity {
  @Column({ type: 'enum', enum: ACCESS_LEVEL })
  accessLevel: ACCESS_LEVEL;

  @ManyToOne(() => UsersEntity, (user) => user.projectsIncludes)
  user: UsersEntity;

  @ManyToOne(() => ProjectsEmtity, (project) => project.usersIncludes)
  project: ProjectsEmtity;
}
