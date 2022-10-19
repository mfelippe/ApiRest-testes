import { Request, Response } from "express";
import { prisma } from "../db";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw "Erro  de requisição ";
    }

    console.log("email:", email);
    const actionDelete = await prisma.user.delete({
      where: {
        email,
      },
    });

    console.log(actionDelete);

    res.status(200).json({ message: "usuário foi deletado" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
