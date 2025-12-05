import { prisma } from "../../db/prisma.js";

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
  });
};

export const updateUser = async (id, data) => {
  return await prisma.user.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id: Number(id) },
  });
};
