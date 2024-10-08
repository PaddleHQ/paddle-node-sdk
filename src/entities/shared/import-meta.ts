/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IImportMetaResponse } from '../../types/index.js';

export class ImportMeta {
  public readonly externalId: string | null;
  public readonly importedFrom: string;

  constructor(importMeta: IImportMetaResponse) {
    this.externalId = importMeta.external_id ? importMeta.external_id : null;
    this.importedFrom = importMeta.imported_from;
  }
}
