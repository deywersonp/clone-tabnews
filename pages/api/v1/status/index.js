import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  return response
    .status(200)
    .json({ chave: "eae dg, escama é só de peixe, uaaai" });
}

export default status;
