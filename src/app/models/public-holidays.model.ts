export interface PublicHolidaysModel {
  readonly date: number;
  readonly localName: string;
  readonly name: string;
  readonly fixed: boolean;
  readonly global: boolean;
  readonly counties: string;
  readonly launchYear: string;
  readonly type: string;
}
