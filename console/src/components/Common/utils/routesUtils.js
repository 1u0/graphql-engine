// import globals from '../../../Globals';

/*** DATA ROUTES ***/

export const getSchemaBaseRoute = schemaName => {
  // return `${globals.urlPrefix}/data/schema/${schemaName}`;
  return `/data/schema/${schemaName}`;
};

export const getSchemaAddTableRoute = schemaName => {
  return `${getSchemaBaseRoute(schemaName)}/table/add`;
};

export const getSchemaPermissionsRoute = schemaName => {
  return `${getSchemaBaseRoute(schemaName)}/permissions`;
};

const getTableBaseRoute = (schemaName, tableName, isTable) => {
  return `${getSchemaBaseRoute(schemaName)}/${
    isTable ? 'tables' : 'views'
  }/${tableName}`;
};

export const getTableBrowseRoute = (schemaName, tableName, isTable) => {
  return `${getTableBaseRoute(schemaName, tableName, isTable)}/browse`;
};

export const getTableInsertRowRoute = (schemaName, tableName) => {
  return `${getTableBaseRoute(schemaName, tableName, true)}/insert`;
};

export const getTableEditRowRoute = (schemaName, tableName, isTable) => {
  return `${getTableBaseRoute(schemaName, tableName, isTable)}/edit`;
};

export const getTableModifyRoute = (schemaName, tableName, isTable) => {
  return `${getTableBaseRoute(schemaName, tableName, isTable)}/modify`;
};

export const getTableRelationshipsRoute = (schemaName, tableName, isTable) => {
  return `${getTableBaseRoute(schemaName, tableName, isTable)}/relationships`;
};

export const getTablePermissionsRoute = (schemaName, tableName, isTable) => {
  return `${getTableBaseRoute(schemaName, tableName, isTable)}/permissions`;
};

export const getFunctionBaseRoute = (schemaName, functionName) => {
  return `${getSchemaBaseRoute(schemaName)}/functions/${functionName}`;
};

export const getFunctionModifyRoute = (schemaName, functionName) => {
  return `${getFunctionBaseRoute(schemaName, functionName)}/modify`;
};

export const getFunctionPermissionsRoute = (schemaName, functionName) => {
  return `${getFunctionBaseRoute(schemaName, functionName)}/permissions`;
};
