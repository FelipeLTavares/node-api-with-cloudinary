import ImoveisService from "../../services/ImoveisService/index.js";
import BaseController from "../BaseController.js";

export default class ImoveisController extends BaseController {
  async get(req, res) {
    const imoveisService = new ImoveisService();

    const resultado = await imoveisService.index(req.query);

    res.status(200).json(resultado);
  }

  async create(req, res) {
    const imoveisService = new ImoveisService();

    const resultado = await imoveisService.create(req.body);

    if (resultado.err) return res.status(400).json(resultado);
    res.status(200).json(resultado);
  }

  async update(req, res) {
    const imoveisService = new ImoveisService();

    const resultado = await imoveisService.update(req.body);

    if (resultado.err) return res.status(400).json(resultado);
    res.status(200).json(resultado);
  }

  async delete(req, res) {
    const imoveisService = new ImoveisService();

    const resultado = await imoveisService.delete(req.query);

    if (resultado.err) return res.status(400).json(resultado);
    res.status(200).json(resultado);
  }

  async createV2(req, res) {
    const imoveisService = new ImoveisService();

    const resultado = await imoveisService.createV2(req);

    res.status(200).json(resultado);
  }
}
