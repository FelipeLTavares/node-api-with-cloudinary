import cloudinary from "../../db/cloudinary";

export class CloudinaryRepository {
  async upload(file) {
    const uploadedImg = await cloudinary.uploader
      .upload(file, { upload_preset: process.env.UPLOAD_PRESET })
      .then((res) => ({ url: res.url, publicId: res.public_id }))
      .catch((err) => "Erro no upload da imagem");

    return uploadedImg;
  }

  async delete(fileId) {
    await cloudinary.api
      .delete_resources(fileId)
      .then((resp) => console.log(resp));
  }
}

export default CloudinaryRepository;
