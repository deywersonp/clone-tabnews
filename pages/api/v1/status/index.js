function status(request, response) {
  return response
    .status(200)
    .json({ chave: "eae dg, escama é só de peixe, uaaai" });
}

export default status;
