import { Admin } from "../entities/admins.entity";

export interface AdminsServiceInterface {
  find(): Promise<Admin>;
}
