import { Request, Response } from "express";
import { AdminsServiceInterface } from "../service/admins.service.interface";

export class AdminsController {
  constructor(private readonly adminSevice: AdminsServiceInterface) {}

  async get(req: Request, res: Response): Promise<void> {
    const result = await this.adminSevice.find();
    res.json({ result });
  }
}
