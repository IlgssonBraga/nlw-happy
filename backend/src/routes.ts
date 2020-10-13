import { Request, Response, Router } from "express";
import { getRepository } from "typeorm";
import { Orphanage } from "./models/Orphanage";

export const routes = Router();

routes.post("/orphanages", async (req: Request, res: Response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanages = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanages);

  return res.status(201).json(orphanages);
});
