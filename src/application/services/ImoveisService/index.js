import { db } from "../../../db/index.js";
import BaseService from "../BaseService.js";
import ImoveisRepository from "../../repositories/Imoveis/index.js";
import {
  ImovelSchema,
  updateImoveisSchema,
} from "../../../schemas/ImovelSchema.js";

export default class ImoveisService extends BaseService {
  async index(filter) {
    try {
      return db.transaction(async (t) => {
        const imoveisRepository = new ImoveisRepository(t);

        return imoveisRepository.Get(filter);
      });
    } catch (error) {
      return { error };
    }
  }

  async create(data) {
    try {
      await ImovelSchema.validate(data);

      return await db.transaction(async (t) => {
        const imoveisRepository = new ImoveisRepository(t);

        const repetedInstance = await imoveisRepository.Get({
          where: { titulo: data.titulo },
        });

        if (repetedInstance.length)
          throw new Error("Já existe registro com esse título!");

        return imoveisRepository.Create(data);
      });
    } catch (err) {
      return { err: err.message };
    }
  }

  async update(data) {
    try {
      await updateImoveisSchema.validate(data);

      return await db.transaction(async (t) => {
        const imoveisRepository = new ImoveisRepository(t);

        return await imoveisRepository.Update({ ...data });
      });
    } catch (err) {
      return { err: err.message };
    }
  }

  async delete({ id }) {
    try {
      return await db.transaction(async (t) => {
        const imoveisRepository = new ImoveisRepository(t);

        return await imoveisRepository.Delete(id);
      });
    } catch (err) {
      return { err: err.message };
    }
  }

  async createV2(data) {
    const [fields, files] = await this.formParse(data);

    try {
      await ImovelSchema.validate(fields);

      return await db.transaction(async (t) => {
        const imoveisRepository = new ImoveisRepository(t);

        const repetedInstance = await imoveisRepository.Get({
          where: { titulo: fields.titulo },
        });

        if (repetedInstance.length)
          throw new Error("Já existe registro com esse título!");

        return imoveisRepository.Create(fields);
      });
    } catch (err) {
      return { err: err.message };
    }
  }
}
