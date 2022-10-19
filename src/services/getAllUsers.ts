import { Request, Response } from "express";
import { prisma } from "../db";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({ users });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Ocorreu um erro ao processar a requisição " });
  }
};
