import { Injectable } from '@nestjs/common';
import * as vault from 'node-vault';
import {
  VaultData,
  VaultTrueResponse,
  VaultFailResponse,
} from 'src/interfaces/vault.interface';

const { TOKEN, VAULT_ADDR } = process.env;

@Injectable()
export class VaultService {
  private client: vault.client;

  constructor() {
    this.client = vault({
      apiVersion: 'v1',
      endpoint: VAULT_ADDR,
      token: TOKEN,
    });
  }

  async read(
    path: string,
  ): Promise<VaultTrueResponse<VaultData> | VaultFailResponse> {
    try {
      const result = (await this.client.read(
        path,
      )) as VaultTrueResponse<VaultData>;
      return result;
    } catch (error) {
      const errorResponse = error as VaultFailResponse;
      return errorResponse;
    }
  }
}
