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
      const data = await this.vaultService.read('/ecommarce_category/data/dev');
      console.log('VAULT DATA:', data);
    } catch (error) {
      console.error('VAULT ERROR:', error);
    }
  }
}
