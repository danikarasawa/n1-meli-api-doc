const express = require("express")
const router = express.Router()
const controller = require("../controllers/professorasController")

/**
 * @api {get} /professoras Retorna a lista de professoras
 * @apiName ListarProfessoras
 * @apiGroup Professoras
 *
 * @apiSuccess {String} Retorna a lista de professoras.
 */
router.get("/", controller.get)
router.get("/:id", controller.getById)
router.post("/", controller.post)

module.exports = router
