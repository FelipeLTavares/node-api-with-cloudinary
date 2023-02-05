import yup from "yup";

export const ImovelSchema = yup.object({
  id: yup.string().min(1, "Não pode ser vazio"),
  titulo: yup.string().required("Campo obrigatório"),
  descricao: yup.string().min(1, "Não pode ser vazio"),
  valor: yup.string().min(1, "Não pode ser vazio"),
});

export const updateImoveisSchema = ImovelSchema.shape({
  id: yup.string().required("Campo obrigatório").min(1, "Não pode ser vazio"),
});
