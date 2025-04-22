export interface VaultTrueResponse<T> {
  request_id: string;
  lease_id: string;
  renewable: boolean;
  lease_duration: number;
  data: {
    data: T;
    metadata: {
      created_time: string;
      custom_metadata: null | object;
      deletion_time: string;
      destroyed: boolean;
      version: number;
    };
  };
  wrap_info: null | object;
  warnings: null | object;
  auth: null | object;
  mount_type: string;
  code?: number;
}

export interface VaultFailResponse {
  code: string;
}

export interface VaultData {
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_USER: string;
}
