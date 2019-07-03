
const jobs = require("../config/jobs");

module.exports = {

    create(req, res){
        // get the id from the body request
        let id = req.body.id;
        // get the title  from the request body
        let title = req.body.title;
        // get the description from the request body
        let description = req.body.description;
        // create a new job object
        let newJob = {
            id: id,
            title: title,
            description: description
        }
        // add new job object
        jobs.push(newJob)
        // return the jobs array to the server
        return res.json(jobs)
    }, 
    findAll(req, res){
        return res.json(jobs)
    }
};