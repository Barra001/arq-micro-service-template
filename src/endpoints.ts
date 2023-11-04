import { AppExceptionFilter } from "./exception_filter/exception.filter";
import { AppRouterWrapper } from "./router.wrapper";

//controllers
import { AdminsController } from "./admins/controllers/admins.controller";
import { MonitoringServiceController } from "./monitoring_service/controllers/monitoring_service.controller";

//repositories
import { AdminsRepository } from "./admins/repository/admins.repository";

//models
import { AdminModel } from "./admins/entities/admins.entity";

//services
import { PlataformActivitiesServiceInterface } from "./plataform_activity/service/plataform_activities.service.interface";
import { AdminsService } from "./admins/service/admins.service";
import { MonitoringService } from "./monitoring_service/service/monitoring_service.service";

export function initEndpoints(
  platformActivityService: PlataformActivitiesServiceInterface
): AppRouterWrapper {
  const RouterWrapper = new AppRouterWrapper(
    AppExceptionFilter.catch,
    platformActivityService
  );

  const adminsRepository = new AdminsRepository(AdminModel);
  const adminService = new AdminsService(
    adminsRepository,
    platformActivityService
  );

  const monitoringService = new MonitoringService();
  const adminController = new AdminsController(adminService);

  const monitoringServiceController = new MonitoringServiceController(
    monitoringService
  );

  /*----------------------ADMINS----------------------*/
  RouterWrapper.get("", (req, res) => adminController.get(req, res));

  /*----------------------Monitoring----------------------*/
  RouterWrapper.get("/status", (req, res) =>
    monitoringServiceController.getSystemStatus(req, res)
  );

  return RouterWrapper;
}
