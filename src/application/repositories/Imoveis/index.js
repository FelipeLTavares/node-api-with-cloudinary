import { ImovelModel } from "../../../db/models/Imovel/index.js";
import BaseRepository from "../BaseRepository.js";

export default class ImoveisRepository extends BaseRepository {
  async Get(query) {
    return ImovelModel.findAll({
      ...query,
      raw: true,
      transaction: this.transaction,
    });
  }

  async Create(data) {
    return ImovelModel.create(data, {
      raw: true,
      transaction: this.transaction,
    });
  }

  async Update(data) {
    const { id } = data;
    return ImovelModel.update(data, {
      where: { id },
      raw: true,
      transaction: this.transaction,
    });
  }

  async Delete(id) {
    return ImovelModel.destroy({
      where: { id },
      raw: true,
      transaction: this.transaction,
    });
  }
}
