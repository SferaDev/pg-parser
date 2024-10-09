import { describe, test, expect } from "vitest";
import { deparse } from "../src/lib/binding";

describe("deparse", () => {
  test("should convert AST back into SQL string", () => {
    const ast = {
      SelectStmt: {
        targetList: [
          {
            ResTarget: {
              val: {
                ColumnRef: {
                  fields: [
                    {
                      String: {
                        sval: "column1",
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    };

    const sql = deparse(ast);
    expect(sql).toBe('SELECT "column1"');
  });

  test("should handle complex AST", () => {
    const ast = {
      SelectStmt: {
        targetList: [
          {
            ResTarget: {
              val: {
                FuncCall: {
                  funcname: [
                    {
                      String: {
                        sval: "COUNT",
                      },
                    },
                  ],
                  args: [
                    {
                      ColumnRef: {
                        fields: [
                          {
                            String: {
                              sval: "column1",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
        fromClause: [
          {
            RangeVar: {
              relname: "table1",
            },
          },
        ],
        whereClause: {
          A_Expr: {
            kind: 0,
            name: [
              {
                String: {
                  sval: "=",
                },
              },
            ],
            lexpr: {
              ColumnRef: {
                fields: [
                  {
                    String: {
                      sval: "column1",
                    },
                  },
                ],
              },
            },
            rexpr: {
              A_Const: {
                val: {
                  String: {
                    sval: "value1",
                  },
                },
              },
            },
          },
        },
      },
    };

    const sql = deparse(ast);
    expect(sql).toBe(
      'SELECT COUNT("column1") FROM "table1" WHERE "column1" = \'value1\''
    );
  });
});
