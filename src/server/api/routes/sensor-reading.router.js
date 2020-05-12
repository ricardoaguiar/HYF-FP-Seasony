/* eslint-disable no-console */
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const sensorReadingController = require('../controllers/sensor-readings.controller');

const {
  checkIfAuthenticated,
} = require('../lib/middleware/authentication.middleware');

/**
 * @swagger
 * /sensor-reading/{materialId}:
 *   get:
 *     summary: Get sensor readings.
 *     description:
 *       'Get sensor readings.<br /><br />
 *       Authentication\: <code>true</code><br /><br />
 *       Authorization\:  <code>user</code>'
 *     tags:
 *       - Sensor Reading
 *     operationId: materialId
 *     produces: application/json
 *     parameters:
 *      - name: authorization
 *        in: header
 *        description: Firebase token
 *        required: true
 *        default: Bearer ENTER_FIREBASE_TOKEN
 *        type: string
 *      - name: materialId
 *        in: path
 *        type: integer
 *        required: true
 *     security:
 *        fireabse_auth:
 *        - read
 *     responses:
 *       200:
 *         description: Successful request
 *       401:
 *         description: You are not authorized to view this content.
 *       404:
 *         description: Not found.
 *       5XX:
 *         description: Unexpected error.
 */
// ENDPOINT: /api/sensor-reading/:materialId :GET to get sensor reading
router.get('/:materialId', checkIfAuthenticated, (req, res, next) => {
  sensorReadingController
    .getSensorReadingByMaterialId(req.params.materialId)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
