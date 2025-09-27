const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Missions']
    try {
        const result = await mongodb.getDatabase().db().collection('missions').find();
        result.toArray().then((missions) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(missions);
    });
    } catch (err) {
        res.status(400).json({ message: err })
    }
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Missions']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid mission id to see a mission.');
        }
        const missionId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('missions').find({ _id: missionId });
        result.toArray().then((missions) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(missions[0]);
        });
    } catch (err) {
        res.status(400).json({ message: err });
    }
};

const createMission = async (req, res) => {
    //#swagger.tags=['Missions']
    try {
        const mission = {
            program: req.body.program,
            number: req.body.number,
            launchDate: req.body.launchDate,
            achievement: req.body.achievement,
            crewSize: req.body.crewSize,
            returnDate: req.body.returnDate,
            rocket: req.body.rocket
        };
        const response = await mongodb.getDatabase().db().collection('missions').insertOne(mission);
        if (response.acknowledged) {
            res.status(204).send();
    }} catch (err) {
        res.status(500).json(response.error || 'Some error occured while adding the mission.');
    };
};

const updateMission = async (req, res) => {
    //#swagger.tags=['Missions']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid mission id to update a mission.');
        }
        const missionId = new ObjectId(req.params.id);
        const mission = {
            program: req.body.program,
            number: req.body.number,
            launchDate: req.body.launchDate,
            achievement: req.body.achievement,
            crewSize: req.body.crewSize,
            returnDate: req.body.returnDate,
            rocket: req.body.rocket
        };
        const response = await mongodb.getDatabase().db().collection('missions').replaceOne({ _id: missionId }, mission);
        if (response.modifiedCount > 0) {
            res.status(204).send();
    }} catch (err) {
        res.status(500).json(response.error || 'Some error occured while updating the mission.');
    };
};

const deleteMission = async (req, res) => {
    //#swagger.tags=['Missions']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            res.status(400).json('Must use a valid mission id to delete a mission.');
        }
        const missionId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('missions').deleteOne({ _id: missionId });
        if (response.deletedCount > 0) {
            res.status(204).send();
    }} catch (err) {
        res.status(500).json(response.error || 'Some error occured while deleting the mission');
    };
}

module.exports = { getAll, getSingle, createMission, updateMission, deleteMission };