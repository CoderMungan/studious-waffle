// src/router/mainRouter.ts
import express, { Router } from "express";
import mainController from "../controller/mainController";

const mainRouter: Router = express.Router();

/**
 * @swagger
 * /api/v1/users-list:
 *   get:
 *     summary: Kullanıcı listesini al
 *     responses:
 *       200:
 *         description: Başarılı bir şekilde kullanıcı listesi döner
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   isAdmin:
 *                     type: boolean
 *                   companyId:
 *                     type: number
 */
mainRouter.get("/users-list", mainController.userList);

/**
 * @swagger
 * /api/v1/users-create:
 *   post:
 *     summary: Yeni bir kullanıcı oluştur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Başarılı bir şekilde kullanıcı oluşturuldu
 *       400:
 *         description: Eksik veya hatalı alanlar var
 */
mainRouter.post("/users-create", mainController.userCreate);

/**
 * @swagger
 * /api/v1/users-delete/{userID}:
 *   delete:
 *     summary: Belirtilen ID'ye sahip kullanıcıyı sil
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Başarılı bir şekilde kullanıcı silindi
 *       404:
 *         description: Kullanıcı bulunamadı
 */
mainRouter.delete("/users-delete/:userID", mainController.userDelete);

/**
 * @swagger
 * /api/v1/users-update/{userID}:
 *   put:
 *     summary: Belirtilen ID'ye sahip kullanıcıyı güncelle
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Başarılı bir şekilde kullanıcı güncellendi
 *       404:
 *         description: Kullanıcı bulunamadı
 */
mainRouter.put("/users-update/:userID", mainController.userUpdate);

export default mainRouter;
