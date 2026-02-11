import "i18next";
import { TranslationTypes } from "@/shared/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: TranslationTypes;
  }
}
