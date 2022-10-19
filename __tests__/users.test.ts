import { describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import { app } from "../src/server";
import { Users } from "../src/types/users";

var userId: any;

describe("Listar Usuários", () => {
  test("Deve ser possível listar todos os usuários", async () => {
    const result = await supertest(app).get("/api/users/all");
    expect(result.text).toContain("users");
    expect(result.status).toBe(200);
  });
});

describe("Criação de usuário ", () => {
  test("Deve ser possível criar um novo usuário", async () => {
    const user: Users = {
      name: "Teste Name",
      email: "teste_criaca@gmail.com.br",
    };
    const res = await supertest(app)
      .post("/api/users/novo")
      .send({ user })
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    let info = JSON.parse(res.text);

    userId = info.user.id;
  });

  test("Não deve ser possível criar um usuário com email repetido", async () => {
    const user: Users = {
      name: "Teste Name",
      email: "teste_criaca@gmail.com.br",
    };
    const res = await supertest(app)
      .post("/api/users/novo")
      .send({ user })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
  });
});

describe("Atualização de usuário", () => {
  test("Deve ser possivel atualizar um usuario existente", async () => {
    const user: Users = {
      name: "Teste Name 1",
      email: "teste@gmail.com.br",
    };

    const res = await supertest(app)
      .put(`/api/users/update/${userId}`)
      .send({ user })
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
  });

  test("Não deve ser possivel atualizar um usuario inexistente", async () => {
    const user: Users = {
      name: "Teste Name 1",
      email: "teste@gmail.com.br",
    };
    const res = await supertest(app)
      .put(`/api/users/update/199999999`)
      .send({ user })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
  });
});

describe("Delete de usuário", () => {
  test("Deve ser possível deletar um usuário existente", async () => {
    const res = await supertest(app)
      .delete(`/api/users/delete`)
      .send({ email: "teste@gmail.com.br" })
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
  });

  test("Não deve ser possível deletar um usuário não existente", async () => {
    const res = await supertest(app)
      .delete(`/api/users/delete`)
      .send({ email: "teste@gmail.com.br" })
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
  });

  test("Não deve ser possível deletar sem passar o email", async () => {
    const res = await supertest(app)
      .delete(`/api/users/delete`)
      .set("Accept", "application/json");
    expect(res.status).toBe(400);
  });
});
