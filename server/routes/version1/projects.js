const ProjectsHandle = require('express').Router();
const ProjectsController = require('../../controllers/projects');

ProjectsHandle.get('/', ProjectsController.getAll);
ProjectsHandle.get('/my', ProjectsController.getAllOfMe);
ProjectsHandle.post('/', ProjectsController.create);
ProjectsHandle.put('/:_id', ProjectsController.update);
ProjectsHandle.get('/statistic', ProjectsController.statistic);

module['exports'] = ProjectsHandle;