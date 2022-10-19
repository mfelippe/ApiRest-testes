import { Request, Response } from "express";
import { prisma } from "../db";
import { Users } from "../types/users";

export const createUser = async (req: Request, res: Response) => {
  try {
    var user: Users = req.body.user;

    const newUser = await prisma.user.create({
      data: { name: user.name, email: user.email },
    });

    res.status(200).json({ user: newUser });
  } catch (err) {
    res.status(400).json({ message: "Erro ao criar novo usuário" });
  }
};
