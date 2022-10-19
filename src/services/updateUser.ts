import { Request, Response } from "express";
import { prisma } from "../db";
import { Users } from "../types/users";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const newInfo: Users = req.body.user;
    const id = Number(req.params.id);

    const update = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email: newInfo.email,
        name: newInfo.name,
      },
    });

    res.status(200).json({ message: "Usuário atualizado com sucesso ✔" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Ocorreu um erro." });
  }
};
