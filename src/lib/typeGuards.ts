/* This file is auto-generated by scripts/generateTypes.ts */
function isTaggedNode(node: object, tag: string) {
  const keys = Object.keys(node)
  return keys.length === 1 && keys[0] === tag
}

export const typeGuards = {
  isList(node: object | undefined): node is { List: import('./ast').List } {
    return node != null && isTaggedNode(node, 'List')
  },
  isRangeVar(
    node: object | undefined,
  ): node is { RangeVar: import('./ast').RangeVar } {
    return node != null && isTaggedNode(node, 'RangeVar')
  },
  isGroupingFunc(
    node: object | undefined,
  ): node is { GroupingFunc: import('./ast').GroupingFunc } {
    return node != null && isTaggedNode(node, 'GroupingFunc')
  },
  isNamedArgExpr(
    node: object | undefined,
  ): node is { NamedArgExpr: import('./ast').NamedArgExpr } {
    return node != null && isTaggedNode(node, 'NamedArgExpr')
  },
  isDistinctExpr(
    node: object | undefined,
  ): node is { DistinctExpr: import('./ast').DistinctExpr } {
    return node != null && isTaggedNode(node, 'DistinctExpr')
  },
  isNullIfExpr(
    node: object | undefined,
  ): node is { NullIfExpr: import('./ast').NullIfExpr } {
    return node != null && isTaggedNode(node, 'NullIfExpr')
  },
  isBoolExpr(
    node: object | undefined,
  ): node is { BoolExpr: import('./ast').BoolExpr } {
    return node != null && isTaggedNode(node, 'BoolExpr')
  },
  isSubLink(
    node: object | undefined,
  ): node is { SubLink: import('./ast').SubLink } {
    return node != null && isTaggedNode(node, 'SubLink')
  },
  isCaseExpr(
    node: object | undefined,
  ): node is { CaseExpr: import('./ast').CaseExpr } {
    return node != null && isTaggedNode(node, 'CaseExpr')
  },
  isCaseWhen(
    node: object | undefined,
  ): node is { CaseWhen: import('./ast').CaseWhen } {
    return node != null && isTaggedNode(node, 'CaseWhen')
  },
  isRowExpr(
    node: object | undefined,
  ): node is { RowExpr: import('./ast').RowExpr } {
    return node != null && isTaggedNode(node, 'RowExpr')
  },
  isCoalesceExpr(
    node: object | undefined,
  ): node is { CoalesceExpr: import('./ast').CoalesceExpr } {
    return node != null && isTaggedNode(node, 'CoalesceExpr')
  },
  isMinMaxExpr(
    node: object | undefined,
  ): node is { MinMaxExpr: import('./ast').MinMaxExpr } {
    return node != null && isTaggedNode(node, 'MinMaxExpr')
  },
  isSQLValueFunction(
    node: object | undefined,
  ): node is { SQLValueFunction: import('./ast').SQLValueFunction } {
    return node != null && isTaggedNode(node, 'SQLValueFunction')
  },
  isXmlExpr(
    node: object | undefined,
  ): node is { XmlExpr: import('./ast').XmlExpr } {
    return node != null && isTaggedNode(node, 'XmlExpr')
  },
  isJsonValueExpr(
    node: object | undefined,
  ): node is { JsonValueExpr: import('./ast').JsonValueExpr } {
    return node != null && isTaggedNode(node, 'JsonValueExpr')
  },
  isJsonIsPredicate(
    node: object | undefined,
  ): node is { JsonIsPredicate: import('./ast').JsonIsPredicate } {
    return node != null && isTaggedNode(node, 'JsonIsPredicate')
  },
  isNullTest(
    node: object | undefined,
  ): node is { NullTest: import('./ast').NullTest } {
    return node != null && isTaggedNode(node, 'NullTest')
  },
  isBooleanTest(
    node: object | undefined,
  ): node is { BooleanTest: import('./ast').BooleanTest } {
    return node != null && isTaggedNode(node, 'BooleanTest')
  },
  isSetToDefault(
    node: object | undefined,
  ): node is { SetToDefault: import('./ast').SetToDefault } {
    return node != null && isTaggedNode(node, 'SetToDefault')
  },
  isCurrentOfExpr(
    node: object | undefined,
  ): node is { CurrentOfExpr: import('./ast').CurrentOfExpr } {
    return node != null && isTaggedNode(node, 'CurrentOfExpr')
  },
  isJoinExpr(
    node: object | undefined,
  ): node is { JoinExpr: import('./ast').JoinExpr } {
    return node != null && isTaggedNode(node, 'JoinExpr')
  },
  isTypeName(
    node: object | undefined,
  ): node is { TypeName: import('./ast').TypeName } {
    return node != null && isTaggedNode(node, 'TypeName')
  },
  isColumnRef(
    node: object | undefined,
  ): node is { ColumnRef: import('./ast').ColumnRef } {
    return node != null && isTaggedNode(node, 'ColumnRef')
  },
  isParamRef(
    node: object | undefined,
  ): node is { ParamRef: import('./ast').ParamRef } {
    return node != null && isTaggedNode(node, 'ParamRef')
  },
  isA_Expr(
    node: object | undefined,
  ): node is { A_Expr: import('./ast').A_Expr } {
    return node != null && isTaggedNode(node, 'A_Expr')
  },
  isA_Const(
    node: object | undefined,
  ): node is { A_Const: import('./ast').A_Const } {
    return node != null && isTaggedNode(node, 'A_Const')
  },
  isTypeCast(
    node: object | undefined,
  ): node is { TypeCast: import('./ast').TypeCast } {
    return node != null && isTaggedNode(node, 'TypeCast')
  },
  isCollateClause(
    node: object | undefined,
  ): node is { CollateClause: import('./ast').CollateClause } {
    return node != null && isTaggedNode(node, 'CollateClause')
  },
  isRoleSpec(
    node: object | undefined,
  ): node is { RoleSpec: import('./ast').RoleSpec } {
    return node != null && isTaggedNode(node, 'RoleSpec')
  },
  isFuncCall(
    node: object | undefined,
  ): node is { FuncCall: import('./ast').FuncCall } {
    return node != null && isTaggedNode(node, 'FuncCall')
  },
  isA_Star(
    node: object | undefined,
  ): node is { A_Star: import('./ast').A_Star } {
    return node != null && isTaggedNode(node, 'A_Star')
  },
  isA_Indices(
    node: object | undefined,
  ): node is { A_Indices: import('./ast').A_Indices } {
    return node != null && isTaggedNode(node, 'A_Indices')
  },
  isA_Indirection(
    node: object | undefined,
  ): node is { A_Indirection: import('./ast').A_Indirection } {
    return node != null && isTaggedNode(node, 'A_Indirection')
  },
  isA_ArrayExpr(
    node: object | undefined,
  ): node is { A_ArrayExpr: import('./ast').A_ArrayExpr } {
    return node != null && isTaggedNode(node, 'A_ArrayExpr')
  },
  isResTarget(
    node: object | undefined,
  ): node is { ResTarget: import('./ast').ResTarget } {
    return node != null && isTaggedNode(node, 'ResTarget')
  },
  isMultiAssignRef(
    node: object | undefined,
  ): node is { MultiAssignRef: import('./ast').MultiAssignRef } {
    return node != null && isTaggedNode(node, 'MultiAssignRef')
  },
  isSortBy(
    node: object | undefined,
  ): node is { SortBy: import('./ast').SortBy } {
    return node != null && isTaggedNode(node, 'SortBy')
  },
  isWindowDef(
    node: object | undefined,
  ): node is { WindowDef: import('./ast').WindowDef } {
    return node != null && isTaggedNode(node, 'WindowDef')
  },
  isRangeSubselect(
    node: object | undefined,
  ): node is { RangeSubselect: import('./ast').RangeSubselect } {
    return node != null && isTaggedNode(node, 'RangeSubselect')
  },
  isRangeFunction(
    node: object | undefined,
  ): node is { RangeFunction: import('./ast').RangeFunction } {
    return node != null && isTaggedNode(node, 'RangeFunction')
  },
  isRangeTableFunc(
    node: object | undefined,
  ): node is { RangeTableFunc: import('./ast').RangeTableFunc } {
    return node != null && isTaggedNode(node, 'RangeTableFunc')
  },
  isRangeTableFuncCol(
    node: object | undefined,
  ): node is { RangeTableFuncCol: import('./ast').RangeTableFuncCol } {
    return node != null && isTaggedNode(node, 'RangeTableFuncCol')
  },
  isRangeTableSample(
    node: object | undefined,
  ): node is { RangeTableSample: import('./ast').RangeTableSample } {
    return node != null && isTaggedNode(node, 'RangeTableSample')
  },
  isColumnDef(
    node: object | undefined,
  ): node is { ColumnDef: import('./ast').ColumnDef } {
    return node != null && isTaggedNode(node, 'ColumnDef')
  },
  isTableLikeClause(
    node: object | undefined,
  ): node is { TableLikeClause: import('./ast').TableLikeClause } {
    return node != null && isTaggedNode(node, 'TableLikeClause')
  },
  isIndexElem(
    node: object | undefined,
  ): node is { IndexElem: import('./ast').IndexElem } {
    return node != null && isTaggedNode(node, 'IndexElem')
  },
  isDefElem(
    node: object | undefined,
  ): node is { DefElem: import('./ast').DefElem } {
    return node != null && isTaggedNode(node, 'DefElem')
  },
  isLockingClause(
    node: object | undefined,
  ): node is { LockingClause: import('./ast').LockingClause } {
    return node != null && isTaggedNode(node, 'LockingClause')
  },
  isXmlSerialize(
    node: object | undefined,
  ): node is { XmlSerialize: import('./ast').XmlSerialize } {
    return node != null && isTaggedNode(node, 'XmlSerialize')
  },
  isPartitionElem(
    node: object | undefined,
  ): node is { PartitionElem: import('./ast').PartitionElem } {
    return node != null && isTaggedNode(node, 'PartitionElem')
  },
  isPartitionRangeDatum(
    node: object | undefined,
  ): node is { PartitionRangeDatum: import('./ast').PartitionRangeDatum } {
    return node != null && isTaggedNode(node, 'PartitionRangeDatum')
  },
  isPartitionCmd(
    node: object | undefined,
  ): node is { PartitionCmd: import('./ast').PartitionCmd } {
    return node != null && isTaggedNode(node, 'PartitionCmd')
  },
  isGroupingSet(
    node: object | undefined,
  ): node is { GroupingSet: import('./ast').GroupingSet } {
    return node != null && isTaggedNode(node, 'GroupingSet')
  },
  isCommonTableExpr(
    node: object | undefined,
  ): node is { CommonTableExpr: import('./ast').CommonTableExpr } {
    return node != null && isTaggedNode(node, 'CommonTableExpr')
  },
  isMergeWhenClause(
    node: object | undefined,
  ): node is { MergeWhenClause: import('./ast').MergeWhenClause } {
    return node != null && isTaggedNode(node, 'MergeWhenClause')
  },
  isTriggerTransition(
    node: object | undefined,
  ): node is { TriggerTransition: import('./ast').TriggerTransition } {
    return node != null && isTaggedNode(node, 'TriggerTransition')
  },
  isJsonKeyValue(
    node: object | undefined,
  ): node is { JsonKeyValue: import('./ast').JsonKeyValue } {
    return node != null && isTaggedNode(node, 'JsonKeyValue')
  },
  isJsonObjectConstructor(
    node: object | undefined,
  ): node is { JsonObjectConstructor: import('./ast').JsonObjectConstructor } {
    return node != null && isTaggedNode(node, 'JsonObjectConstructor')
  },
  isJsonArrayConstructor(
    node: object | undefined,
  ): node is { JsonArrayConstructor: import('./ast').JsonArrayConstructor } {
    return node != null && isTaggedNode(node, 'JsonArrayConstructor')
  },
  isJsonArrayQueryConstructor(
    node: object | undefined,
  ): node is {
    JsonArrayQueryConstructor: import('./ast').JsonArrayQueryConstructor
  } {
    return node != null && isTaggedNode(node, 'JsonArrayQueryConstructor')
  },
  isJsonObjectAgg(
    node: object | undefined,
  ): node is { JsonObjectAgg: import('./ast').JsonObjectAgg } {
    return node != null && isTaggedNode(node, 'JsonObjectAgg')
  },
  isJsonArrayAgg(
    node: object | undefined,
  ): node is { JsonArrayAgg: import('./ast').JsonArrayAgg } {
    return node != null && isTaggedNode(node, 'JsonArrayAgg')
  },
  isInsertStmt(
    node: object | undefined,
  ): node is { InsertStmt: import('./ast').InsertStmt } {
    return node != null && isTaggedNode(node, 'InsertStmt')
  },
  isDeleteStmt(
    node: object | undefined,
  ): node is { DeleteStmt: import('./ast').DeleteStmt } {
    return node != null && isTaggedNode(node, 'DeleteStmt')
  },
  isUpdateStmt(
    node: object | undefined,
  ): node is { UpdateStmt: import('./ast').UpdateStmt } {
    return node != null && isTaggedNode(node, 'UpdateStmt')
  },
  isMergeStmt(
    node: object | undefined,
  ): node is { MergeStmt: import('./ast').MergeStmt } {
    return node != null && isTaggedNode(node, 'MergeStmt')
  },
  isSelectStmt(
    node: object | undefined,
  ): node is { SelectStmt: import('./ast').SelectStmt } {
    return node != null && isTaggedNode(node, 'SelectStmt')
  },
  isReturnStmt(
    node: object | undefined,
  ): node is { ReturnStmt: import('./ast').ReturnStmt } {
    return node != null && isTaggedNode(node, 'ReturnStmt')
  },
  isCreateSchemaStmt(
    node: object | undefined,
  ): node is { CreateSchemaStmt: import('./ast').CreateSchemaStmt } {
    return node != null && isTaggedNode(node, 'CreateSchemaStmt')
  },
  isAlterTableStmt(
    node: object | undefined,
  ): node is { AlterTableStmt: import('./ast').AlterTableStmt } {
    return node != null && isTaggedNode(node, 'AlterTableStmt')
  },
  isReplicaIdentityStmt(
    node: object | undefined,
  ): node is { ReplicaIdentityStmt: import('./ast').ReplicaIdentityStmt } {
    return node != null && isTaggedNode(node, 'ReplicaIdentityStmt')
  },
  isAlterTableCmd(
    node: object | undefined,
  ): node is { AlterTableCmd: import('./ast').AlterTableCmd } {
    return node != null && isTaggedNode(node, 'AlterTableCmd')
  },
  isAlterDomainStmt(
    node: object | undefined,
  ): node is { AlterDomainStmt: import('./ast').AlterDomainStmt } {
    return node != null && isTaggedNode(node, 'AlterDomainStmt')
  },
  isGrantStmt(
    node: object | undefined,
  ): node is { GrantStmt: import('./ast').GrantStmt } {
    return node != null && isTaggedNode(node, 'GrantStmt')
  },
  isObjectWithArgs(
    node: object | undefined,
  ): node is { ObjectWithArgs: import('./ast').ObjectWithArgs } {
    return node != null && isTaggedNode(node, 'ObjectWithArgs')
  },
  isAccessPriv(
    node: object | undefined,
  ): node is { AccessPriv: import('./ast').AccessPriv } {
    return node != null && isTaggedNode(node, 'AccessPriv')
  },
  isGrantRoleStmt(
    node: object | undefined,
  ): node is { GrantRoleStmt: import('./ast').GrantRoleStmt } {
    return node != null && isTaggedNode(node, 'GrantRoleStmt')
  },
  isAlterDefaultPrivilegesStmt(
    node: object | undefined,
  ): node is {
    AlterDefaultPrivilegesStmt: import('./ast').AlterDefaultPrivilegesStmt
  } {
    return node != null && isTaggedNode(node, 'AlterDefaultPrivilegesStmt')
  },
  isCopyStmt(
    node: object | undefined,
  ): node is { CopyStmt: import('./ast').CopyStmt } {
    return node != null && isTaggedNode(node, 'CopyStmt')
  },
  isVariableSetStmt(
    node: object | undefined,
  ): node is { VariableSetStmt: import('./ast').VariableSetStmt } {
    return node != null && isTaggedNode(node, 'VariableSetStmt')
  },
  isVariableShowStmt(
    node: object | undefined,
  ): node is { VariableShowStmt: import('./ast').VariableShowStmt } {
    return node != null && isTaggedNode(node, 'VariableShowStmt')
  },
  isCreateStmt(
    node: object | undefined,
  ): node is { CreateStmt: import('./ast').CreateStmt } {
    return node != null && isTaggedNode(node, 'CreateStmt')
  },
  isConstraint(
    node: object | undefined,
  ): node is { Constraint: import('./ast').Constraint } {
    return node != null && isTaggedNode(node, 'Constraint')
  },
  isCreateTableSpaceStmt(
    node: object | undefined,
  ): node is { CreateTableSpaceStmt: import('./ast').CreateTableSpaceStmt } {
    return node != null && isTaggedNode(node, 'CreateTableSpaceStmt')
  },
  isDropTableSpaceStmt(
    node: object | undefined,
  ): node is { DropTableSpaceStmt: import('./ast').DropTableSpaceStmt } {
    return node != null && isTaggedNode(node, 'DropTableSpaceStmt')
  },
  isAlterTableSpaceOptionsStmt(
    node: object | undefined,
  ): node is {
    AlterTableSpaceOptionsStmt: import('./ast').AlterTableSpaceOptionsStmt
  } {
    return node != null && isTaggedNode(node, 'AlterTableSpaceOptionsStmt')
  },
  isAlterTableMoveAllStmt(
    node: object | undefined,
  ): node is { AlterTableMoveAllStmt: import('./ast').AlterTableMoveAllStmt } {
    return node != null && isTaggedNode(node, 'AlterTableMoveAllStmt')
  },
  isCreateExtensionStmt(
    node: object | undefined,
  ): node is { CreateExtensionStmt: import('./ast').CreateExtensionStmt } {
    return node != null && isTaggedNode(node, 'CreateExtensionStmt')
  },
  isAlterExtensionStmt(
    node: object | undefined,
  ): node is { AlterExtensionStmt: import('./ast').AlterExtensionStmt } {
    return node != null && isTaggedNode(node, 'AlterExtensionStmt')
  },
  isAlterExtensionContentsStmt(
    node: object | undefined,
  ): node is {
    AlterExtensionContentsStmt: import('./ast').AlterExtensionContentsStmt
  } {
    return node != null && isTaggedNode(node, 'AlterExtensionContentsStmt')
  },
  isCreateFdwStmt(
    node: object | undefined,
  ): node is { CreateFdwStmt: import('./ast').CreateFdwStmt } {
    return node != null && isTaggedNode(node, 'CreateFdwStmt')
  },
  isAlterFdwStmt(
    node: object | undefined,
  ): node is { AlterFdwStmt: import('./ast').AlterFdwStmt } {
    return node != null && isTaggedNode(node, 'AlterFdwStmt')
  },
  isCreateForeignServerStmt(
    node: object | undefined,
  ): node is {
    CreateForeignServerStmt: import('./ast').CreateForeignServerStmt
  } {
    return node != null && isTaggedNode(node, 'CreateForeignServerStmt')
  },
  isAlterForeignServerStmt(
    node: object | undefined,
  ): node is {
    AlterForeignServerStmt: import('./ast').AlterForeignServerStmt
  } {
    return node != null && isTaggedNode(node, 'AlterForeignServerStmt')
  },
  isCreateForeignTableStmt(
    node: object | undefined,
  ): node is {
    CreateForeignTableStmt: import('./ast').CreateForeignTableStmt
  } {
    return node != null && isTaggedNode(node, 'CreateForeignTableStmt')
  },
  isCreateUserMappingStmt(
    node: object | undefined,
  ): node is { CreateUserMappingStmt: import('./ast').CreateUserMappingStmt } {
    return node != null && isTaggedNode(node, 'CreateUserMappingStmt')
  },
  isAlterUserMappingStmt(
    node: object | undefined,
  ): node is { AlterUserMappingStmt: import('./ast').AlterUserMappingStmt } {
    return node != null && isTaggedNode(node, 'AlterUserMappingStmt')
  },
  isDropUserMappingStmt(
    node: object | undefined,
  ): node is { DropUserMappingStmt: import('./ast').DropUserMappingStmt } {
    return node != null && isTaggedNode(node, 'DropUserMappingStmt')
  },
  isImportForeignSchemaStmt(
    node: object | undefined,
  ): node is {
    ImportForeignSchemaStmt: import('./ast').ImportForeignSchemaStmt
  } {
    return node != null && isTaggedNode(node, 'ImportForeignSchemaStmt')
  },
  isCreatePolicyStmt(
    node: object | undefined,
  ): node is { CreatePolicyStmt: import('./ast').CreatePolicyStmt } {
    return node != null && isTaggedNode(node, 'CreatePolicyStmt')
  },
  isAlterPolicyStmt(
    node: object | undefined,
  ): node is { AlterPolicyStmt: import('./ast').AlterPolicyStmt } {
    return node != null && isTaggedNode(node, 'AlterPolicyStmt')
  },
  isCreateAmStmt(
    node: object | undefined,
  ): node is { CreateAmStmt: import('./ast').CreateAmStmt } {
    return node != null && isTaggedNode(node, 'CreateAmStmt')
  },
  isCreateTrigStmt(
    node: object | undefined,
  ): node is { CreateTrigStmt: import('./ast').CreateTrigStmt } {
    return node != null && isTaggedNode(node, 'CreateTrigStmt')
  },
  isCreateEventTrigStmt(
    node: object | undefined,
  ): node is { CreateEventTrigStmt: import('./ast').CreateEventTrigStmt } {
    return node != null && isTaggedNode(node, 'CreateEventTrigStmt')
  },
  isAlterEventTrigStmt(
    node: object | undefined,
  ): node is { AlterEventTrigStmt: import('./ast').AlterEventTrigStmt } {
    return node != null && isTaggedNode(node, 'AlterEventTrigStmt')
  },
  isCreatePLangStmt(
    node: object | undefined,
  ): node is { CreatePLangStmt: import('./ast').CreatePLangStmt } {
    return node != null && isTaggedNode(node, 'CreatePLangStmt')
  },
  isCreateRoleStmt(
    node: object | undefined,
  ): node is { CreateRoleStmt: import('./ast').CreateRoleStmt } {
    return node != null && isTaggedNode(node, 'CreateRoleStmt')
  },
  isAlterRoleStmt(
    node: object | undefined,
  ): node is { AlterRoleStmt: import('./ast').AlterRoleStmt } {
    return node != null && isTaggedNode(node, 'AlterRoleStmt')
  },
  isDropRoleStmt(
    node: object | undefined,
  ): node is { DropRoleStmt: import('./ast').DropRoleStmt } {
    return node != null && isTaggedNode(node, 'DropRoleStmt')
  },
  isCreateSeqStmt(
    node: object | undefined,
  ): node is { CreateSeqStmt: import('./ast').CreateSeqStmt } {
    return node != null && isTaggedNode(node, 'CreateSeqStmt')
  },
  isAlterSeqStmt(
    node: object | undefined,
  ): node is { AlterSeqStmt: import('./ast').AlterSeqStmt } {
    return node != null && isTaggedNode(node, 'AlterSeqStmt')
  },
  isDefineStmt(
    node: object | undefined,
  ): node is { DefineStmt: import('./ast').DefineStmt } {
    return node != null && isTaggedNode(node, 'DefineStmt')
  },
  isCreateDomainStmt(
    node: object | undefined,
  ): node is { CreateDomainStmt: import('./ast').CreateDomainStmt } {
    return node != null && isTaggedNode(node, 'CreateDomainStmt')
  },
  isCreateOpClassStmt(
    node: object | undefined,
  ): node is { CreateOpClassStmt: import('./ast').CreateOpClassStmt } {
    return node != null && isTaggedNode(node, 'CreateOpClassStmt')
  },
  isCreateOpClassItem(
    node: object | undefined,
  ): node is { CreateOpClassItem: import('./ast').CreateOpClassItem } {
    return node != null && isTaggedNode(node, 'CreateOpClassItem')
  },
  isCreateOpFamilyStmt(
    node: object | undefined,
  ): node is { CreateOpFamilyStmt: import('./ast').CreateOpFamilyStmt } {
    return node != null && isTaggedNode(node, 'CreateOpFamilyStmt')
  },
  isAlterOpFamilyStmt(
    node: object | undefined,
  ): node is { AlterOpFamilyStmt: import('./ast').AlterOpFamilyStmt } {
    return node != null && isTaggedNode(node, 'AlterOpFamilyStmt')
  },
  isDropStmt(
    node: object | undefined,
  ): node is { DropStmt: import('./ast').DropStmt } {
    return node != null && isTaggedNode(node, 'DropStmt')
  },
  isTruncateStmt(
    node: object | undefined,
  ): node is { TruncateStmt: import('./ast').TruncateStmt } {
    return node != null && isTaggedNode(node, 'TruncateStmt')
  },
  isCommentStmt(
    node: object | undefined,
  ): node is { CommentStmt: import('./ast').CommentStmt } {
    return node != null && isTaggedNode(node, 'CommentStmt')
  },
  isSecLabelStmt(
    node: object | undefined,
  ): node is { SecLabelStmt: import('./ast').SecLabelStmt } {
    return node != null && isTaggedNode(node, 'SecLabelStmt')
  },
  isDeclareCursorStmt(
    node: object | undefined,
  ): node is { DeclareCursorStmt: import('./ast').DeclareCursorStmt } {
    return node != null && isTaggedNode(node, 'DeclareCursorStmt')
  },
  isClosePortalStmt(
    node: object | undefined,
  ): node is { ClosePortalStmt: import('./ast').ClosePortalStmt } {
    return node != null && isTaggedNode(node, 'ClosePortalStmt')
  },
  isFetchStmt(
    node: object | undefined,
  ): node is { FetchStmt: import('./ast').FetchStmt } {
    return node != null && isTaggedNode(node, 'FetchStmt')
  },
  isIndexStmt(
    node: object | undefined,
  ): node is { IndexStmt: import('./ast').IndexStmt } {
    return node != null && isTaggedNode(node, 'IndexStmt')
  },
  isCreateStatsStmt(
    node: object | undefined,
  ): node is { CreateStatsStmt: import('./ast').CreateStatsStmt } {
    return node != null && isTaggedNode(node, 'CreateStatsStmt')
  },
  isStatsElem(
    node: object | undefined,
  ): node is { StatsElem: import('./ast').StatsElem } {
    return node != null && isTaggedNode(node, 'StatsElem')
  },
  isAlterStatsStmt(
    node: object | undefined,
  ): node is { AlterStatsStmt: import('./ast').AlterStatsStmt } {
    return node != null && isTaggedNode(node, 'AlterStatsStmt')
  },
  isCreateFunctionStmt(
    node: object | undefined,
  ): node is { CreateFunctionStmt: import('./ast').CreateFunctionStmt } {
    return node != null && isTaggedNode(node, 'CreateFunctionStmt')
  },
  isFunctionParameter(
    node: object | undefined,
  ): node is { FunctionParameter: import('./ast').FunctionParameter } {
    return node != null && isTaggedNode(node, 'FunctionParameter')
  },
  isAlterFunctionStmt(
    node: object | undefined,
  ): node is { AlterFunctionStmt: import('./ast').AlterFunctionStmt } {
    return node != null && isTaggedNode(node, 'AlterFunctionStmt')
  },
  isDoStmt(
    node: object | undefined,
  ): node is { DoStmt: import('./ast').DoStmt } {
    return node != null && isTaggedNode(node, 'DoStmt')
  },
  isCallStmt(
    node: object | undefined,
  ): node is { CallStmt: import('./ast').CallStmt } {
    return node != null && isTaggedNode(node, 'CallStmt')
  },
  isRenameStmt(
    node: object | undefined,
  ): node is { RenameStmt: import('./ast').RenameStmt } {
    return node != null && isTaggedNode(node, 'RenameStmt')
  },
  isAlterObjectSchemaStmt(
    node: object | undefined,
  ): node is { AlterObjectSchemaStmt: import('./ast').AlterObjectSchemaStmt } {
    return node != null && isTaggedNode(node, 'AlterObjectSchemaStmt')
  },
  isAlterOwnerStmt(
    node: object | undefined,
  ): node is { AlterOwnerStmt: import('./ast').AlterOwnerStmt } {
    return node != null && isTaggedNode(node, 'AlterOwnerStmt')
  },
  isAlterOperatorStmt(
    node: object | undefined,
  ): node is { AlterOperatorStmt: import('./ast').AlterOperatorStmt } {
    return node != null && isTaggedNode(node, 'AlterOperatorStmt')
  },
  isAlterTypeStmt(
    node: object | undefined,
  ): node is { AlterTypeStmt: import('./ast').AlterTypeStmt } {
    return node != null && isTaggedNode(node, 'AlterTypeStmt')
  },
  isRuleStmt(
    node: object | undefined,
  ): node is { RuleStmt: import('./ast').RuleStmt } {
    return node != null && isTaggedNode(node, 'RuleStmt')
  },
  isNotifyStmt(
    node: object | undefined,
  ): node is { NotifyStmt: import('./ast').NotifyStmt } {
    return node != null && isTaggedNode(node, 'NotifyStmt')
  },
  isTransactionStmt(
    node: object | undefined,
  ): node is { TransactionStmt: import('./ast').TransactionStmt } {
    return node != null && isTaggedNode(node, 'TransactionStmt')
  },
  isCompositeTypeStmt(
    node: object | undefined,
  ): node is { CompositeTypeStmt: import('./ast').CompositeTypeStmt } {
    return node != null && isTaggedNode(node, 'CompositeTypeStmt')
  },
  isCreateEnumStmt(
    node: object | undefined,
  ): node is { CreateEnumStmt: import('./ast').CreateEnumStmt } {
    return node != null && isTaggedNode(node, 'CreateEnumStmt')
  },
  isCreateRangeStmt(
    node: object | undefined,
  ): node is { CreateRangeStmt: import('./ast').CreateRangeStmt } {
    return node != null && isTaggedNode(node, 'CreateRangeStmt')
  },
  isAlterEnumStmt(
    node: object | undefined,
  ): node is { AlterEnumStmt: import('./ast').AlterEnumStmt } {
    return node != null && isTaggedNode(node, 'AlterEnumStmt')
  },
  isViewStmt(
    node: object | undefined,
  ): node is { ViewStmt: import('./ast').ViewStmt } {
    return node != null && isTaggedNode(node, 'ViewStmt')
  },
  isLoadStmt(
    node: object | undefined,
  ): node is { LoadStmt: import('./ast').LoadStmt } {
    return node != null && isTaggedNode(node, 'LoadStmt')
  },
  isDropdbStmt(
    node: object | undefined,
  ): node is { DropdbStmt: import('./ast').DropdbStmt } {
    return node != null && isTaggedNode(node, 'DropdbStmt')
  },
  isClusterStmt(
    node: object | undefined,
  ): node is { ClusterStmt: import('./ast').ClusterStmt } {
    return node != null && isTaggedNode(node, 'ClusterStmt')
  },
  isVacuumStmt(
    node: object | undefined,
  ): node is { VacuumStmt: import('./ast').VacuumStmt } {
    return node != null && isTaggedNode(node, 'VacuumStmt')
  },
  isVacuumRelation(
    node: object | undefined,
  ): node is { VacuumRelation: import('./ast').VacuumRelation } {
    return node != null && isTaggedNode(node, 'VacuumRelation')
  },
  isExplainStmt(
    node: object | undefined,
  ): node is { ExplainStmt: import('./ast').ExplainStmt } {
    return node != null && isTaggedNode(node, 'ExplainStmt')
  },
  isCreateTableAsStmt(
    node: object | undefined,
  ): node is { CreateTableAsStmt: import('./ast').CreateTableAsStmt } {
    return node != null && isTaggedNode(node, 'CreateTableAsStmt')
  },
  isRefreshMatViewStmt(
    node: object | undefined,
  ): node is { RefreshMatViewStmt: import('./ast').RefreshMatViewStmt } {
    return node != null && isTaggedNode(node, 'RefreshMatViewStmt')
  },
  isCheckPointStmt(
    node: object | undefined,
  ): node is { CheckPointStmt: import('./ast').CheckPointStmt } {
    return node != null && isTaggedNode(node, 'CheckPointStmt')
  },
  isDiscardStmt(
    node: object | undefined,
  ): node is { DiscardStmt: import('./ast').DiscardStmt } {
    return node != null && isTaggedNode(node, 'DiscardStmt')
  },
  isConstraintsSetStmt(
    node: object | undefined,
  ): node is { ConstraintsSetStmt: import('./ast').ConstraintsSetStmt } {
    return node != null && isTaggedNode(node, 'ConstraintsSetStmt')
  },
  isReindexStmt(
    node: object | undefined,
  ): node is { ReindexStmt: import('./ast').ReindexStmt } {
    return node != null && isTaggedNode(node, 'ReindexStmt')
  },
  isCreateConversionStmt(
    node: object | undefined,
  ): node is { CreateConversionStmt: import('./ast').CreateConversionStmt } {
    return node != null && isTaggedNode(node, 'CreateConversionStmt')
  },
  isCreateCastStmt(
    node: object | undefined,
  ): node is { CreateCastStmt: import('./ast').CreateCastStmt } {
    return node != null && isTaggedNode(node, 'CreateCastStmt')
  },
  isCreateTransformStmt(
    node: object | undefined,
  ): node is { CreateTransformStmt: import('./ast').CreateTransformStmt } {
    return node != null && isTaggedNode(node, 'CreateTransformStmt')
  },
  isPrepareStmt(
    node: object | undefined,
  ): node is { PrepareStmt: import('./ast').PrepareStmt } {
    return node != null && isTaggedNode(node, 'PrepareStmt')
  },
  isExecuteStmt(
    node: object | undefined,
  ): node is { ExecuteStmt: import('./ast').ExecuteStmt } {
    return node != null && isTaggedNode(node, 'ExecuteStmt')
  },
  isDeallocateStmt(
    node: object | undefined,
  ): node is { DeallocateStmt: import('./ast').DeallocateStmt } {
    return node != null && isTaggedNode(node, 'DeallocateStmt')
  },
  isDropOwnedStmt(
    node: object | undefined,
  ): node is { DropOwnedStmt: import('./ast').DropOwnedStmt } {
    return node != null && isTaggedNode(node, 'DropOwnedStmt')
  },
  isReassignOwnedStmt(
    node: object | undefined,
  ): node is { ReassignOwnedStmt: import('./ast').ReassignOwnedStmt } {
    return node != null && isTaggedNode(node, 'ReassignOwnedStmt')
  },
  isAlterTSDictionaryStmt(
    node: object | undefined,
  ): node is { AlterTSDictionaryStmt: import('./ast').AlterTSDictionaryStmt } {
    return node != null && isTaggedNode(node, 'AlterTSDictionaryStmt')
  },
  isAlterTSConfigurationStmt(
    node: object | undefined,
  ): node is {
    AlterTSConfigurationStmt: import('./ast').AlterTSConfigurationStmt
  } {
    return node != null && isTaggedNode(node, 'AlterTSConfigurationStmt')
  },
  isPublicationObjSpec(
    node: object | undefined,
  ): node is { PublicationObjSpec: import('./ast').PublicationObjSpec } {
    return node != null && isTaggedNode(node, 'PublicationObjSpec')
  },
  isCreatePublicationStmt(
    node: object | undefined,
  ): node is { CreatePublicationStmt: import('./ast').CreatePublicationStmt } {
    return node != null && isTaggedNode(node, 'CreatePublicationStmt')
  },
  isAlterPublicationStmt(
    node: object | undefined,
  ): node is { AlterPublicationStmt: import('./ast').AlterPublicationStmt } {
    return node != null && isTaggedNode(node, 'AlterPublicationStmt')
  },
  isCreateSubscriptionStmt(
    node: object | undefined,
  ): node is {
    CreateSubscriptionStmt: import('./ast').CreateSubscriptionStmt
  } {
    return node != null && isTaggedNode(node, 'CreateSubscriptionStmt')
  },
  isAlterSubscriptionStmt(
    node: object | undefined,
  ): node is { AlterSubscriptionStmt: import('./ast').AlterSubscriptionStmt } {
    return node != null && isTaggedNode(node, 'AlterSubscriptionStmt')
  },
  isDropSubscriptionStmt(
    node: object | undefined,
  ): node is { DropSubscriptionStmt: import('./ast').DropSubscriptionStmt } {
    return node != null && isTaggedNode(node, 'DropSubscriptionStmt')
  },
  isInteger(
    node: object | undefined,
  ): node is { Integer: import('./ast').Integer } {
    return node != null && isTaggedNode(node, 'Integer')
  },
  isFloat(node: object | undefined): node is { Float: import('./ast').Float } {
    return node != null && isTaggedNode(node, 'Float')
  },
  isBoolean(
    node: object | undefined,
  ): node is { Boolean: import('./ast').Boolean } {
    return node != null && isTaggedNode(node, 'Boolean')
  },
  isString(
    node: object | undefined,
  ): node is { String: import('./ast').String } {
    return node != null && isTaggedNode(node, 'String')
  },
}
