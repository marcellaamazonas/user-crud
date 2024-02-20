import db from "../database";

export async function dbGet<T>(
  id: number,
  table: string
): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM ${table} WHERE id = ?`,
      [id],
      (err, row: T | undefined) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      }
    );
  });
}
