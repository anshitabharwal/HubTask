const { z } = require("zod");

exports.registerSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(6),
    name: z.string().optional(),
  }),
});

exports.loginSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string(),
  }),
});
