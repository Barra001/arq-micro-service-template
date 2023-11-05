import { Admin } from "./../entities/admins.entity";

import { AdminsServiceInterface } from "./admins.service.interface";
import { AdminsRepositoryInterface } from "./../repository/admins.repository.interface";
import { PlataformActivitiesServiceInterface } from "src/plataform_activity/service/plataform_activities.service.interface";
import { LogType } from "./../../plataform_activity/entities/log-event";

export class AdminsService implements AdminsServiceInterface {
  constructor(
    private readonly adminRepository,
    private readonly plataformActivity: PlataformActivitiesServiceInterface
  ) {}

  async find(): Promise<Admin> {
    this.plataformActivity.create(
      "Something was looked for",
      "someone",
      LogType.info
    );
    return await this.adminRepository.find({});
  }
}
