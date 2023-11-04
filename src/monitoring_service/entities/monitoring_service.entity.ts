
export class MonitoringServiceEntity {

    public status: {
        database: {
            connected: boolean;
            error: string;
        };
        ableToReceiveRequests: boolean;
    };

    constructor() {
        this.status = {
            database: {
                connected: false,
                error: null,
            },
            ableToReceiveRequests: false,
         
        };

    }
}



