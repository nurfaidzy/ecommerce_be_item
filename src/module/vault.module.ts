import { Module } from '@nestjs/common';
import { VaultService } from 'src/vault/vault.service';

@Module({
  providers: [VaultService], // Provides the service internally
  exports: [VaultService], // Makes it available for other modules
})
export class VaultModule {
  constructor(private vaultService: VaultService) {
    void this.testVaultConnection();
  }

  async testVaultConnection() {
    try {
      await this.vaultService.read('/ecommarce_category/data/dev');
    } catch (error) {
      console.error('VAULT ERROR:', error);
      throw new Error(`Vault error ${error}`);
    }
  }
}
