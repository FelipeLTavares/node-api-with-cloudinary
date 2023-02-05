import multiparty from "multiparty";

export default class BaseService {
  formParse = (req) =>
    new Promise((resolve, reject) => {
      const form = new multiparty.Form();

      form.parse(req, function (err, rawFields, files) {
        if (err) return reject(err);
        const fields = Object.entries(rawFields)
          .map(([key, value]) => [key, value[0]])
          .reduce((old, [key, value]) => ({ ...old, [key]: value }), {});

        return resolve([fields, files]);
      });
    });
}
