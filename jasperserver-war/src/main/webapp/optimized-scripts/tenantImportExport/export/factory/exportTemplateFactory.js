define(["require","jquery","text!tenantImportExport/export/template/assetsToIncludeExtendedVersionTemplate.htm","text!tenantImportExport/export/template/eventsToIncludeTemplate.htm","text!tenantImportExport/export/template/exportDataFileTemplate.htm","text!tenantImportExport/export/template/rolesAndUsersToIncludeTemplate.htm","text!tenantImportExport/export/template/exportOptionsContainerTemplate.htm","text!tenantImportExport/export/template/repositoryExportTemplate.htm","tenantImportExport/export/enum/exportTypesEnum"],function(t){var e=t("jquery"),p=t("text!tenantImportExport/export/template/assetsToIncludeExtendedVersionTemplate.htm"),o=t("text!tenantImportExport/export/template/eventsToIncludeTemplate.htm"),r=t("text!tenantImportExport/export/template/exportDataFileTemplate.htm"),n=t("text!tenantImportExport/export/template/rolesAndUsersToIncludeTemplate.htm"),m=t("text!tenantImportExport/export/template/exportOptionsContainerTemplate.htm"),x=t("text!tenantImportExport/export/template/repositoryExportTemplate.htm"),a=t("tenantImportExport/export/enum/exportTypesEnum"),l={};return l[a.ROOT_TENANT]=[n,p,o].join(""),l[a.TENANT]=[n,p].join(""),l[a.SERVER_PRO]=[n,p,o].join(""),l[a.SERVER_CE]=[n,p,o].join(""),l[a.REPOSITORY]=[x].join(""),function(t){return t=t||{},r+e(m).append(l[t.type])[0].outerHTML}});