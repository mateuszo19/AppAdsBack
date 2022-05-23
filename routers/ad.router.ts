import {Router} from "express";
import {AdRecord} from "../records/ad.record";

export const adRouter = Router()

    .get('/search:name', async (req, res) => {

        res.json({
            ok: true,
        });
    });
